import { initTestimonials } from './sections/depoimentos.js';
/**
 * ============================================================
 * APP
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Inicialização central dos módulos progressivos da página. */
import { initReveal } from './components/reveal.js';
import { initSidebar } from './components/sidebar.js';
import { initFloatingCta } from './components/floating-cta.js';
import { initMarquee } from './sections/marquee.js';
import { initAtendimentoCarousel } from './sections/atendimento.js';
import { initGaleria } from './sections/galeria.js';
import { initFaq } from './sections/faq.js';
import { initFooter } from './sections/footer.js';

function init() {
  initReveal();
  initSidebar();
  initFloatingCta();
  initMarquee();
  initAtendimentoCarousel();
  initGaleria();
  initFaq();
  initFooter();
  initTestimonials();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
