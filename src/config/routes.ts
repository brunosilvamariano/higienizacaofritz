/** Rotas de página. Fonte única para o sitemap e a transição entre páginas. */
export const routes = [{ path: '/', priority: 1 }] as const;

export const routePaths: ReadonlySet<string> = new Set(
  routes.map((route) => route.path),
);
