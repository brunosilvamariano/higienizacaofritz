/**
 * ============================================================
 * REVEAL
 * Entradas suaves com IntersectionObserver e stagger controlado.
 * ============================================================
 */

const GROUP_SELECTORS = [
  '.about__content > *',
  '.atendimento__header > *',
  '.atendimento__card',
  '.processo__header > *',
  '.processo__item',
  '.galeria__header > *',
  '.results-card',
  '.faq__intro > *',
  '.faq__item',
  '.contact__content > *',
  '.site-footer__inner > *'
];

export function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    return;
  }

  const items = [];
  const seen = new Set();

  GROUP_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (seen.has(element)) {
        return;
      }

      seen.add(element);
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`);

      if (element.matches('img, picture, figure, .results-card')) {
        element.dataset.reveal = 'scale';
      }

      items.push(element);
    });
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -7% 0px'
  });

  items.forEach((item) => observer.observe(item));
}
