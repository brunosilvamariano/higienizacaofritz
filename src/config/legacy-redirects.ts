/** URLs antigas encaminham para a seção correspondente da home. */
export const legacyRedirects = [
  { source: '/sobre', destination: '/#sobre-a-fritz', permanent: true },
  { source: '/servicos', destination: '/#servicos', permanent: true },
  {
    source: '/projetos/:path*',
    destination: '/#antes-e-depois',
    permanent: true,
  },
  { source: '/contato', destination: '/#contato', permanent: true },
  { source: '/blog/:path*', destination: '/#duvidas', permanent: true },
  { source: '/informacoes/:path*', destination: '/', permanent: true },
];
