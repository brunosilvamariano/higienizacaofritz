/** Navegação por toque, setas e barra de progresso, sem reprodução automática. */
export function initTestimonials() {
  const track = document.querySelector('#reviews-track');
  const controls = document.querySelector('.testimonials__controls');

  if (!track || !controls) return;

  const cards = [...track.querySelectorAll('.testimonial')];
  const prev = controls.querySelector('[data-review-prev]');
  const next = controls.querySelector('[data-review-next]');
  const progress = controls.querySelector('[data-review-progress]');

  if (!cards.length || !prev || !next || !progress) return;

  let stops = [];
  let active = 0;

  const getScrollBehavior = () => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  );

  const go = (index) => {
    const target = stops[index];

    if (typeof target !== 'number') return;

    track.scrollTo({
      left: target,
      behavior: getScrollBehavior()
    });
  };

  const sync = () => {
    if (!stops.length) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const scrollRatio = maxScroll > 0 ? Math.min(1, Math.max(0, track.scrollLeft / maxScroll)) : 1;

    active = stops.reduce((best, stop, index) => (
      Math.abs(stop - track.scrollLeft) < Math.abs(stops[best] - track.scrollLeft) ? index : best
    ), 0);

    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;

    const progressRatio = stops.length > 1
      ? (1 + (scrollRatio * (stops.length - 1))) / stops.length
      : 1;

    progress.style.setProperty('--review-progress', progressRatio.toFixed(4));
    progress.setAttribute('aria-valuenow', String(Math.round(progressRatio * 100)));
    progress.setAttribute('aria-valuetext', `Página ${active + 1} de ${stops.length}`);
  };

  const layout = () => {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    const perPage = Math.max(1, Math.floor((track.clientWidth + gap) / step));
    const updated = [0];

    for (let position = perPage * step; position < maxScroll - 2; position += perPage * step) {
      updated.push(position);
    }

    if (maxScroll > 2) updated.push(maxScroll);

    stops = updated;
    controls.hidden = maxScroll <= 2;
    sync();
  };

  prev.addEventListener('click', () => go(Math.max(0, active - 1)));
  next.addEventListener('click', () => go(Math.min(stops.length - 1, active + 1)));
  track.addEventListener('scroll', sync, { passive: true });

  if ('ResizeObserver' in window) {
    new ResizeObserver(layout).observe(track);
  } else {
    window.addEventListener('resize', layout, { passive: true });
  }

  layout();
}
