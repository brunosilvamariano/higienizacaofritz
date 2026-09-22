/** Abertura independente dos outros módulos, sem espera mínima artificial. */
(() => {
  const loader = document.querySelector('[data-preloader]');
  if (!loader || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let dismissed = false;
  let fallback;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(fallback);
    loader.classList.add('is-leaving');
    setTimeout(() => loader.remove(), 380);
    window.removeEventListener('pageshow', onPageShow);
    window.removeEventListener('keydown', dismiss);
    window.removeEventListener('pointerdown', dismiss);
  };
  const onPageShow = event => { if (event.persisted) dismiss(); };
  loader.hidden = false;
  fallback = setTimeout(dismiss, 1800);
  window.addEventListener('pageshow', onPageShow);
  window.addEventListener('keydown', dismiss, {once:true});
  window.addEventListener('pointerdown', dismiss, {once:true});
  const ready = () => {
    const hero = document.querySelector('#inicio .hero__portrait');
    if (!hero || hero.complete) dismiss();
    else {
      hero.addEventListener('load', dismiss, {once:true});
      hero.addEventListener('error', dismiss, {once:true});
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();

