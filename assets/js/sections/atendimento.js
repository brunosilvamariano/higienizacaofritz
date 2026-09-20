/**
 * ============================================================
 * SECTIONS / ATENDIMENTO
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Sincroniza arraste, scroll nativo e controle range dos atendimentos. */
export function initAtendimentoCarousel() {
  const viewport = document.querySelector('[data-services-viewport]');
  const range = document.querySelector('[data-services-scroll-range]');
  if (!viewport || !range) return;

  let isDragging = false;
  let pointerId = null;
  let startX = 0;
  let startScrollLeft = 0;
  let draggedDistance = 0;
  let suppressClickUntil = 0;
  let syncFrame = 0;

  const maxScroll = () => Math.max(0, viewport.scrollWidth - viewport.clientWidth);

  const syncRangeFromViewport = () => {
    cancelAnimationFrame(syncFrame);
    syncFrame = requestAnimationFrame(() => {
      const maximum = maxScroll();
      const value = maximum > 0 ? (viewport.scrollLeft / maximum) * 100 : 0;

      range.value = String(Math.min(100, Math.max(0, value)));
      range.disabled = maximum <= 1;
      range.setAttribute('aria-valuetext', maximum <= 1 ? 'Todos os atendimentos estão visíveis' : `${Math.round(value)}% percorrido`);
    });
  };

  const finishDrag = () => {
    if (!isDragging) return;

    isDragging = false;
    pointerId = null;
    viewport.classList.remove('is-dragging');

    if (draggedDistance > 6) {
      suppressClickUntil = performance.now() + 220;
    }

    syncRangeFromViewport();
  };

  viewport.addEventListener('scroll', syncRangeFromViewport, { passive: true });

  viewport.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    if (event.target.closest('a, button, input, textarea, select, label')) return;

    isDragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = viewport.scrollLeft;
    draggedDistance = 0;

    viewport.classList.add('is-dragging');
    viewport.setPointerCapture?.(event.pointerId);
  });

  viewport.addEventListener('pointermove', (event) => {
    if (!isDragging || event.pointerId !== pointerId) return;

    const deltaX = event.clientX - startX;
    draggedDistance = Math.max(draggedDistance, Math.abs(deltaX));
    viewport.scrollLeft = startScrollLeft - deltaX;
  });

  viewport.addEventListener('pointerup', (event) => {
    if (event.pointerId !== pointerId) return;
    viewport.releasePointerCapture?.(event.pointerId);
    finishDrag();
  });

  viewport.addEventListener('pointercancel', finishDrag);
  viewport.addEventListener('lostpointercapture', finishDrag);

  viewport.addEventListener('click', (event) => {
    if (performance.now() >= suppressClickUntil) return;
    if (event.target.closest('a')) event.preventDefault();
  }, true);

  range.addEventListener('input', () => {
    const maximum = maxScroll();
    viewport.scrollLeft = maximum * (Number(range.value) / 100);
  });

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(syncRangeFromViewport);
    resizeObserver.observe(viewport);
  } else {
    window.addEventListener('resize', syncRangeFromViewport, { passive: true });
  }

  syncRangeFromViewport();
}
