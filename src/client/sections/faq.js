/**
 * ============================================================
 * SECTIONS / FAQ
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Aprimora o FAQ como accordion acessível com navegação por teclado. */
export function initFaq() {
  const section = document.querySelector('[data-faq]');
  if (!section) return;

  const items = [...section.querySelectorAll('.faq-item')];
  const toggles = [...section.querySelectorAll('[data-faq-toggle]')];
  const counter = section.querySelector('[data-faq-counter]');

  if (!items.length || !toggles.length) return;

  section.classList.add('faq--enhanced');

  const setOpen = (activeIndex, focus = false) => {
    items.forEach((item, index) => {
      const button = item.querySelector('[data-faq-toggle]');
      const answer = item.querySelector('.faq-item__answer');
      const isOpen = index === activeIndex;

      item.classList.toggle('is-open', isOpen);
      button?.setAttribute('aria-expanded', String(isOpen));
      answer?.setAttribute('aria-hidden', String(!isOpen));
      if (answer) answer.inert = !isOpen;
    });

    if (counter) {
      counter.textContent = String(activeIndex + 1).padStart(2, '0');
    }

    if (focus) {
      toggles[activeIndex]?.focus({ preventScroll: true });
    }
  };

  setOpen(0);

  toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') === 'true' ? -1 : index));

    toggle.addEventListener('keydown', (event) => {
      let targetIndex = null;

      if (event.key === 'ArrowDown') targetIndex = (index + 1) % toggles.length;
      if (event.key === 'ArrowUp') targetIndex = (index - 1 + toggles.length) % toggles.length;
      if (event.key === 'Home') targetIndex = 0;
      if (event.key === 'End') targetIndex = toggles.length - 1;

      if (targetIndex === null) return;

      event.preventDefault();
      setOpen(targetIndex, true);
    });
  });
}
