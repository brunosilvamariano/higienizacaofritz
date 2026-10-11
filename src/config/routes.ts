/** Rotas de página. Fonte única para o sitemap e a transição entre páginas. */
export const projectSlugs = [
  'cuidado-estofados',
  'higienizacao-sofas',
  'cadeiras-estofadas',
  'detalhes-tecidos',
  'sofas-retrateis',
  'atendimento-fritz',
] as const;

export const routes = [
  { path: '/', priority: 1 },
  { path: '/sobre', priority: 0.7 },
  { path: '/projetos', priority: 0.8 },
  { path: '/servicos', priority: 0.7 },
  { path: '/contato', priority: 0.7 },
  { path: '/blog', priority: 0.5 },
  ...[
    'higienizacao-estofados',
    'impermeabilizacao-estofados',
    'cuidados-cadeiras',
    'orcamento-fritz',
  ].map((slug) => ({ path: `/blog/${slug}`, priority: 0.4 })),
  ...['estilos', 'licencas', 'alteracoes'].map((slug) => ({
    path: `/informacoes/${slug}`,
    priority: 0.2,
  })),
  ...projectSlugs.map((slug) => ({ path: `/projetos/${slug}`, priority: 0.6 })),
] as const;

export const routePaths: ReadonlySet<string> = new Set(
  routes.map((route) => route.path),
);
