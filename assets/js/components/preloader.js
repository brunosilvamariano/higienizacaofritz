/**
 * ============================================================
 * PRELOADER
 * Remove a abertura assim que a página estiver pronta.
 * ============================================================
 */

export function initPreloader() {
  const preloader = document.querySelector('[data-preloader]');

  if (!preloader) {
    return;
  }

  let dismissed = false;
  const startedAt = performance.now();
  const minimumVisibleTime = 1200;

  const dismiss = () => {
    if (dismissed) {
      return;
    }

    dismissed = true;

    const elapsed = performance.now() - startedAt;
    const remaining = Math.max(0, minimumVisibleTime - elapsed);

    window.setTimeout(() => {
      preloader.classList.add('is-leaving');

      window.setTimeout(() => {
        preloader.remove();
      }, 420);
    }, remaining);
  };

  if (document.readyState === 'complete') {
    window.requestAnimationFrame(dismiss);
  } else {
    window.addEventListener('load', dismiss, { once: true });
  }

  window.setTimeout(dismiss, 2500);
}
