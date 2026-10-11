const configuredUrl =
  process.env.SITE_URL || 'https://higienizacaofritz.vercel.app';
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
  title: 'Higienização de estofados em Joinville | Fritz',
  description:
    'Higienização de sofás, colchões, cadeiras e tapetes em Joinville e região. Consulte a impermeabilização de estofados e solicite orçamento à Fritz.',
  indexable:
    process.env.VERCEL_ENV !== 'preview' &&
    (!process.env.SITE_INDEXABLE || process.env.SITE_INDEXABLE === 'true'),
};
