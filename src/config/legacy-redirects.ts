/** URLs antigas encaminham para os conteúdos atuais do Fritz. */
export const legacyRedirects = [
  { source: '/sobre', destination: '/#sobre-a-fritz', permanent: true },
  {
    source: '/projetos/:path*',
    destination: '/servicos',
    permanent: true,
  },
  { source: '/contato', destination: '/#contato', permanent: true },
  { source: '/blog/:path*', destination: '/#duvidas', permanent: true },
  { source: '/informacoes/:path*', destination: '/', permanent: true },
];
