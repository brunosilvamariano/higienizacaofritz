/**
 * ============================================================
 * SECTIONS / FOOTER
 * Responsabilidades e interações deste módulo.
 * ============================================================
 */

/** Mantém o ano do copyright sincronizado com a data local do navegador. */
export function initFooter() {
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
}
