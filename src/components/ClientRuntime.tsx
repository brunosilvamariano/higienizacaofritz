"use client";

import { useEffect } from "react";
import { initReveal } from "@/client/components/reveal.js";
import { initSidebar } from "@/client/components/sidebar.js";
import { initFloatingCta } from "@/client/components/floating-cta.js";
import { initMarquee } from "@/client/sections/marquee.js";
import { initAtendimentoCarousel } from "@/client/sections/atendimento.js";
import { initGaleria } from "@/client/sections/galeria.js";
import { initFaq } from "@/client/sections/faq.js";
import { initFooter } from "@/client/sections/footer.js";
import { initTestimonials } from "@/client/sections/depoimentos.js";

declare global {
  interface Window {
    __fritzRuntimeInitialized?: boolean;
  }
}

export function ClientRuntime() {
  useEffect(() => {
    if (window.__fritzRuntimeInitialized) return;
    window.__fritzRuntimeInitialized = true;

    initReveal();
    initSidebar();
    initFloatingCta();
    initMarquee();
    initAtendimentoCarousel();
    initGaleria();
    initFaq();
    initFooter();
    initTestimonials();
  }, []);

  return null;
}
