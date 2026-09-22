/** Alterna os atalhos conforme a seção visível e o estado do menu. */
export function initFloatingCta() {
  const cta = document.querySelector('[data-floating-cta]');
  const topLink = document.querySelector('[data-back-to-top]');
  const shell = document.querySelector('.app-shell');
  const regions = [...document.querySelectorAll('#contato, .site-footer')];
  if (!cta || !topLink || !shell || !regions.length) return;
  const mobile = window.matchMedia('(max-width: 63.99rem)');
  const sync = () => {
    const atEnd = regions.some(region => {
      const rect = region.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    const menuOpen = mobile.matches && shell.classList.contains('is-mobile-open');
    const hideCta = atEnd || menuOpen;
    cta.classList.toggle('is-hidden', hideCta);
    cta.setAttribute('aria-hidden', String(hideCta));
    if (hideCta) cta.setAttribute('tabindex', '-1');
    else cta.removeAttribute('tabindex');
    topLink.hidden = !atEnd || menuOpen;
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(sync, { threshold: 0 });
    regions.forEach(region => observer.observe(region));
  } else {
    window.addEventListener('scroll', sync, { passive: true });
  }
  window.addEventListener('resize', sync, { passive: true });
  window.addEventListener('pageshow', sync);
  new MutationObserver(sync).observe(shell, { attributes: true, attributeFilter: ['class'] });
  mobile.addEventListener('change', sync);
  topLink.addEventListener('click', event => {
    event.preventDefault();
    const title = document.querySelector('#hero-title');
    if (title) {
      title.setAttribute('tabindex', '-1');
      title.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  sync();
}
