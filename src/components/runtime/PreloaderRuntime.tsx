"use client";

import { useEffect } from "react";

export function PreloaderRuntime() {
  useEffect(() => {
    const loader = document.querySelector<HTMLElement>("[data-preloader]");
    if (!loader) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      loader.remove();
      return;
    }

    let dismissed = false;
    let fallback = 0;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      window.clearTimeout(fallback);
      loader.classList.add("is-leaving");
      window.setTimeout(() => loader.remove(), 380);
    };

    loader.hidden = false;
    fallback = window.setTimeout(dismiss, 1800);

    const hero = document.querySelector<HTMLImageElement>("#inicio .hero__portrait");
    if (!hero || hero.complete) dismiss();
    else {
      hero.addEventListener("load", dismiss, { once: true });
      hero.addEventListener("error", dismiss, { once: true });
    }

    window.addEventListener("pageshow", dismiss, { once: true });
    window.addEventListener("keydown", dismiss, { once: true });
    window.addEventListener("pointerdown", dismiss, { once: true });
  }, []);

  return null;
}
