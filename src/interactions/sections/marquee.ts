/** Anima o marquee com medição dinâmica, pausa contextual e reduced motion. */
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type MarqueeRow = {
  measure: () => void;
  step: (deltaSeconds: number) => void;
  setPaused: (value: boolean) => void;
  showStatic: () => void;
  destroy: () => void;
};

function createRow(
  viewport: HTMLElement,
  track: HTMLElement,
  direction: number,
  speed: number,
): MarqueeRow | null {
  const baseGroup = track.querySelector<HTMLElement>(".marquee__group");
  if (!baseGroup) return null;

  let distance = 0;
  let offset = 0;
  let paused = false;

  const removeGeneratedClones = () => {
    track.querySelectorAll<HTMLElement>('[data-marquee-clone="generated"]').forEach((clone) => clone.remove());
  };

  const ensureCoverage = () => {
    removeGeneratedClones();
    distance = baseGroup.getBoundingClientRect().width;
    if (!distance) return;

    const requiredWidth = viewport.clientWidth + distance * 2;
    while (track.scrollWidth < requiredWidth) {
      const clone = baseGroup.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      clone.dataset.marqueeClone = "generated";
      track.appendChild(clone);
    }
  };

  const render = () => {
    if (!distance) return;
    const x = direction < 0 ? -offset : -distance + offset;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  };

  const measure = () => {
    const previousDistance = distance;
    const previousProgress = previousDistance > 0 ? offset / previousDistance : 0;
    ensureCoverage();
    offset = distance > 0 ? previousProgress * distance : 0;
    render();
  };

  const step = (deltaSeconds: number) => {
    if (paused || !distance) return;
    offset = (offset + speed * deltaSeconds) % distance;
    render();
  };

  return {
    measure,
    step,
    setPaused(value: boolean) { paused = value; },
    showStatic() { offset = 0; track.style.removeProperty("transform"); },
    destroy() { removeGeneratedClones(); track.style.removeProperty("transform"); },
  };
}

export function initMarquee() {
  const root = document.querySelector<HTMLElement>(".marquee");
  if (!root) return;

  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
  const manifestoViewport = root.querySelector<HTMLElement>(".marquee__viewport--manifesto");
  const manifestoTrack = root.querySelector<HTMLElement>(".marquee__track--manifesto");
  const servicesViewport = root.querySelector<HTMLElement>(".marquee__viewport--services");
  const servicesTrack = root.querySelector<HTMLElement>(".marquee__track--services");
  if (!manifestoViewport || !manifestoTrack || !servicesViewport || !servicesTrack) return;

  root.classList.add("marquee--enhanced");
  let rows: MarqueeRow[] = [];
  let animationFrame = 0;
  let previousTime = 0;
  let resizeFrame = 0;
  let isVisible = true;

  const createRows = () => {
    rows.forEach((row) => row.destroy());
    rows = [
      createRow(manifestoViewport, manifestoTrack, -1, 54),
      createRow(servicesViewport, servicesTrack, 1, 36),
    ].filter((row): row is MarqueeRow => row !== null);
    rows.forEach((row) => row.measure());
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    previousTime = 0;
  };

  const animate = (time: number) => {
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
    } else startAnimation();
  };

  const setPaused = (paused: boolean) => rows.forEach((row) => row.setPaused(paused));

  root.addEventListener("mouseenter", () => setPaused(true));
  root.addEventListener("mouseleave", () => setPaused(false));
  root.addEventListener("focusin", () => setPaused(true));
  root.addEventListener("focusout", (event: FocusEvent) => {
    if (!root.contains(event.relatedTarget as Node | null)) setPaused(false);
  });

  const remeasure = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (reducedMotion.matches) rows.forEach((row) => row.showStatic());
      else rows.forEach((row) => row.measure());
    });
  };

  const ResizeObserverCtor = window.ResizeObserver;
  if (typeof ResizeObserverCtor === "function") new ResizeObserverCtor(remeasure).observe(root);
  else window.addEventListener("resize", remeasure, { passive: true });

  reducedMotion.addEventListener("change", syncMode);

  const IntersectionObserverCtor = window.IntersectionObserver;
  if (typeof IntersectionObserverCtor === "function") {
    const visibilityObserver = new IntersectionObserverCtor(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    }, { rootMargin: "20% 0px" });
    visibilityObserver.observe(root);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });

  document.fonts?.ready.then(() => {
    if (reducedMotion.matches) rows.forEach((row) => row.showStatic());
    else rows.forEach((row) => row.measure());
  });

  syncMode();
}
