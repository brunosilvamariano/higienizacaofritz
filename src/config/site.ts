const configuredUrl =
  process.env.SITE_URL || 'https://higienizacaofritz.com.br';
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
    'Higienização e impermeabilização de estofados em Joinville e litoral norte de SC. Sofás, colchões e tapetes: peça seu orçamento pelo WhatsApp.',
  indexable:
    process.env.VERCEL_ENV !== 'preview' &&
    (!process.env.SITE_INDEXABLE || process.env.SITE_INDEXABLE === 'true'),
};
