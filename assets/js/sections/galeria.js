/**
 * ============================================================
 * SECTIONS / GALERIA
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Controla o Cover Flow de resultados com drag por mouse, swipe por toque, teclado e paginação. */
export function initGaleria() {
  const section = document.querySelector('[data-results-carousel]');
  if (!section) return;

  const stage = section.querySelector('.results-stage');
  const cards = [...section.querySelectorAll('[data-result-card]')];
  const pagination = section.querySelector('[data-results-pagination]');

  if (!stage || cards.length === 0 || !pagination) return;

  section.classList.add('galeria--enhanced');
  const status = document.createElement('p');
  status.className = 'visually-hidden';
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  pagination.after(status);
  let currentIndex = 0;
  let pointerId = null;
  let dragStartX = 0;
  let dragCurrentX = 0;
  let dragging = false;
  let moved = false;

  const dragThreshold = 42;
  const normalizeIndex = (index) => (index + cards.length) % cards.length;

  const relativeOffset = (index) => {
    let offset = index - currentIndex;
    const half = Math.floor(cards.length / 2);

    if (offset > half) offset -= cards.length;
    if (offset < -half) offset += cards.length;

    return offset;
  };

  const positionFor = (offset) => {
    if (offset === 0) return 'center';
    if (offset === -1) return 'left';
    if (offset === 1) return 'right';
    if (offset < -1) return 'far-left';
    return 'far-right';
  };

  const dots = cards.map((_, index) => {
    const button = document.createElement('button');
    button.className = 'results-dot';
    button.type = 'button';
    button.setAttribute('aria-label', `Exibir resultado ${index + 1}`);
    button.addEventListener('click', () => goTo(index));
    pagination.append(button);
    return button;
  });

  const render = () => {
    const focusedCard = cards.find(card => card === document.activeElement);
    cards.forEach((card, index) => {
      const position = positionFor(relativeOffset(index));
      card.dataset.position = position;
      card.setAttribute('aria-hidden', String(position !== 'center'));
      card.tabIndex = position === 'center' ? 0 : -1;
    });

    if (focusedCard) cards[currentIndex].focus({ preventScroll: true });
    status.textContent = `Resultado ${currentIndex + 1} de ${cards.length}: ${cards[currentIndex].querySelector('h3')?.textContent ?? ''}`;
    dots.forEach((dot, index) => {
      dot.setAttribute('aria-current', String(index === currentIndex));
    });
  };

  const goTo = (index) => {
    currentIndex = normalizeIndex(index);
    render();
  };

  const previous = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  const finishDrag = (event) => {
    if (!dragging || event.pointerId !== pointerId) return;

    const distance = dragCurrentX - dragStartX;
    dragging = false;
    pointerId = null;
    stage.classList.remove('is-dragging');

    if (stage.hasPointerCapture(event.pointerId)) {
      stage.releasePointerCapture(event.pointerId);
    }

    if (event.type === 'pointerup' && Math.abs(distance) >= dragThreshold) {
      if (distance < 0) next();
      else previous();
    }

    window.setTimeout(() => {
      moved = false;
    }, 0);
  };

  stage.addEventListener('pointerdown', (event) => {
    if (dragging || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;

    pointerId = event.pointerId;
    dragStartX = event.clientX;
    dragCurrentX = event.clientX;
    dragging = true;
    moved = false;


    stage.classList.add('is-dragging');
  });

  stage.addEventListener('pointermove', (event) => {
    if (!dragging || event.pointerId !== pointerId) return;

    dragCurrentX = event.clientX;

    if (Math.abs(dragCurrentX - dragStartX) > 6) {
      moved = true;
      if (!stage.hasPointerCapture(event.pointerId)) stage.setPointerCapture(event.pointerId);
    }
  });

  stage.addEventListener('pointerup', finishDrag);
  stage.addEventListener('pointercancel', finishDrag);
  stage.addEventListener('lostpointercapture', finishDrag);

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (moved || index === currentIndex) return;
      goTo(index);
    });
  });

  section.addEventListener('keydown', (event) => {
    if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); goTo(event.key === 'Home' ? 0 : cards.length - 1); }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previous();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    }
  });

  render();
}
