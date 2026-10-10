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
  name: 'Fritz — Higienização e impermeabilização',
  url: url.origin,
  title: 'Fritz — Higienização e impermeabilização',
  description:
    'Fritz: higienização e impermeabilização de estofados. Converse com a equipe sobre os cuidados com seu estofado.',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
