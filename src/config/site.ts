const configuredUrl =
  process.env.SITE_URL || 'https://tracomoveisplanejaveis.vercel.app';
const url = new URL(configuredUrl);
if (
  url.protocol !== 'https:' ||
  url.username ||
  url.password ||
  url.search ||
  url.hash ||
  url.pathname !== '/'
) {
  throw new Error(
    'SITE_URL deve ser a origem HTTPS do site, sem caminho, credenciais ou parâmetros.',
  );
}

export const site = {
  name: 'Traço Móveis Planejados',
  url: url.origin,
  title: 'Traço — Móveis planejados | Seu espaço. Seu traço.',
  description:
    'Móveis planejados para cozinhas, quartos, salas, banheiros e home office. Explore ideias para aproveitar seu espaço e converse sobre seu projeto com a Traço.',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
