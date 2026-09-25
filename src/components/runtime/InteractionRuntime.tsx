"use client";

import { useEffect } from "react";
import { initReveal } from "@/interactions/components/reveal";
import { initSidebar } from "@/interactions/components/sidebar";
import { initFloatingCta } from "@/interactions/components/floating-cta";
import { initMarquee } from "@/interactions/sections/marquee";
import { initServicesCarousel } from "@/interactions/sections/services";
import { initResultsCarousel } from "@/interactions/sections/results";
import { initFaq } from "@/interactions/sections/faq";
import { initTestimonials } from "@/interactions/sections/testimonials";

declare global {
  interface Window {
    __siteInteractionsInitialized?: boolean;
  }
}

export function InteractionRuntime() {
  useEffect(() => {
    if (window.__siteInteractionsInitialized) return;
    window.__siteInteractionsInitialized = true;

    initReveal();
    initSidebar();
    initFloatingCta();
    initMarquee();
    initServicesCarousel();
    initResultsCarousel();
    initFaq();
    initTestimonials();
  }, []);

  return null;
}
