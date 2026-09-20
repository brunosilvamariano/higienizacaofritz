/**
 * ============================================================
 * SECTIONS / MARQUEE
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Anima o marquee com medição dinâmica, pausa contextual e reduced motion. */
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function createRow(viewport, track, direction, speed) {
  const baseGroup = track.querySelector('.marquee__group');
  if (!baseGroup) return null;

  let distance = 0;
  let offset = 0;
  let paused = false;

  const removeGeneratedClones = () => {
    track.querySelectorAll('[data-marquee-clone="generated"]').forEach((clone) => clone.remove());
  };

  const ensureCoverage = () => {
    removeGeneratedClones();

    distance = baseGroup.getBoundingClientRect().width;
    if (!distance) return;

    const requiredWidth = viewport.clientWidth + (distance * 2);
    while (track.scrollWidth < requiredWidth) {
      const clone = baseGroup.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.dataset.marqueeClone = 'generated';
      track.appendChild(clone);
    }
  };

  const measure = () => {
    const previousDistance = distance;
    const previousProgress = previousDistance > 0 ? offset / previousDistance : 0;

    ensureCoverage();
    offset = distance > 0 ? previousProgress * distance : 0;
    render();
  };

  const render = () => {
    if (!distance) return;
    const x = direction < 0 ? -offset : -distance + offset;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  };

  const step = (deltaSeconds) => {
    if (paused || !distance) return;
    offset = (offset + speed * deltaSeconds) % distance;
    render();
  };

  return {
    measure,
    step,
    setPaused(value) {
      paused = value;
    },
    showStatic() {
      offset = 0;
      track.style.removeProperty('transform');
    },
    destroy() {
      removeGeneratedClones();
      track.style.removeProperty('transform');
    },
  };
}

export function initMarquee() {
  const root = document.querySelector('.marquee');
  if (!root) return;

  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
  const manifestoViewport = root.querySelector('.marquee__viewport--manifesto');
  const manifestoTrack = root.querySelector('.marquee__track--manifesto');
  const servicesViewport = root.querySelector('.marquee__viewport--services');
  const servicesTrack = root.querySelector('.marquee__track--services');

  if (!manifestoViewport || !manifestoTrack || !servicesViewport || !servicesTrack) return;

  let rows = [];
  let animationFrame = 0;
  let previousTime = 0;
  let resizeFrame = 0;
  let isVisible = true;

  const createRows = () => {
    rows.forEach((row) => row?.destroy());
    rows = [
      createRow(manifestoViewport, manifestoTrack, -1, 54),
      createRow(servicesViewport, servicesTrack, 1, 36),
    ].filter(Boolean);

    rows.forEach((row) => row.measure());
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    previousTime = 0;
  };

  const animate = (time) => {
    if (reducedMotion.matches || document.hidden || !isVisible) {
      stopAnimation();
      return;
    }

    if (!previousTime) previousTime = time;
    const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;

    rows.forEach((row) => row.step(deltaSeconds));
    animationFrame = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (reducedMotion.matches || document.hidden || !isVisible || animationFrame) return;
    previousTime = 0;
    animationFrame = requestAnimationFrame(animate);
  };

  const syncMode = () => {
    createRows();

    if (reducedMotion.matches) {
      stopAnimation();
      rows.forEach((row) => row.showStatic());
    } else {
      startAnimation();
    }
  };

  const setPaused = (paused) => {
    rows.forEach((row) => row.setPaused(paused));
  };

  root.addEventListener('mouseenter', () => setPaused(true));
  root.addEventListener('mouseleave', () => setPaused(false));
  root.addEventListener('focusin', () => setPaused(true));
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) setPaused(false);
  });

  const remeasure = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (reducedMotion.matches) rows.forEach((row) => row.showStatic());
      else rows.forEach((row) => row.measure());
    });
  };

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(root);
  } else {
    window.addEventListener('resize', remeasure, { passive: true });
  }

  reducedMotion.addEventListener('change', syncMode);
  if ('IntersectionObserver' in window) {
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    }, { rootMargin: '20% 0px' });
    visibilityObserver.observe(root);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      if (reducedMotion.matches) rows.forEach((row) => row.showStatic());
      else rows.forEach((row) => row.measure());
    });
  }

  syncMode();
}
