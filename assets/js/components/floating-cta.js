/**
 * ============================================================
 * COMPONENTS / FLOATING CTA
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Sincroniza a visibilidade e a acessibilidade do CTA flutuante. */
const MOBILE_QUERY = '(max-width: 63.99rem)';

export function initFloatingCta() {
  const cta = document.querySelector('[data-floating-cta]');
  const contact = document.querySelector('#contato');
  const shell = document.querySelector('.app-shell');

  if (!cta || !contact || !shell) return;

  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  let contactVisible = false;

  const syncVisibility = () => {
    const mobileMenuOpen = mobileMedia.matches && shell.classList.contains('is-mobile-open');
    const shouldHide = contactVisible || mobileMenuOpen;

    cta.classList.toggle('is-hidden', shouldHide);
    cta.setAttribute('aria-hidden', String(shouldHide));

    if (shouldHide) {
      cta.setAttribute('tabindex', '-1');
    } else {
      cta.removeAttribute('tabindex');
    }
  };

  const updateContactVisibility = () => {
    const rect = contact.getBoundingClientRect();
    contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
    syncVisibility();
  };

  updateContactVisibility();

  if ('IntersectionObserver' in window) {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        syncVisibility();
      },
      {
        root: null,
        threshold: 0,
      },
    );

    contactObserver.observe(contact);
  } else {
    window.addEventListener('scroll', updateContactVisibility, { passive: true });
    window.addEventListener('resize', updateContactVisibility);
  }

  const shellObserver = new MutationObserver((mutations) => {
    const classChanged = mutations.some(
      (mutation) => mutation.type === 'attributes' && mutation.attributeName === 'class',
    );

    if (classChanged) syncVisibility();
  });

  shellObserver.observe(shell, {
    attributes: true,
    attributeFilter: ['class'],
  });

  mobileMedia.addEventListener('change', syncVisibility);

  syncVisibility();
}
