# Fritz — Higienização e impermeabilização

Home institucional em Next.js, React e TypeScript. Domínio de produção definido: **https://higienizacaofritz.com.br**. A vinculação do domínio, DNS e publicação ainda dependem dos trâmites do proprietário.

## Executar e verificar

Node.js 22.22.2, npm 11.15.0. Instale com npm ci; execute npm run dev. npm run check verifica lint, tipos e formatação; npm test executa testes unitários e npm run build gera a produção.

Copie .env.example para .env.local. SITE_URL=https://higienizacaofritz.com.br e SITE_INDEXABLE=true são os valores da produção. Previews Vercel têm noindex. Nunca versionar valores privados do ambiente.

## Home e navegação

Uma única página: hero, benefícios, resumo Google, serviços, como funciona, antes/depois, avaliações, sobre, cidades atendidas, FAQ, contato e rodapé. O menu aponta para âncoras. As antigas rotas redirecionam permanentemente às seções correspondentes, conforme src/config/legacy-redirects.ts. O sitemap contém somente a home.

## Identidade e recursos

Bebas Neue nos títulos, Poppins nos conteúdos e DM Sans no hero/header, mantidas em arquivos locais WOFF2, com licenças. Sem CDN de fontes/ícones. Cores e escala em src/styles/tokens.css; composição por seção e ajustes contextuais em src/sections/home/home.css.

As fotografias de uso compartilhado ficam em src/assets/images/shared. Comparativos ilustrativos permanecem identificados; as avaliações e a fotografia do profissional não foram substituídas por conteúdo inventado.

## SEO e áreas atendidas

src/config/site.ts define origem, título e descrição. src/config/metadata.ts define canonical, Open Graph e Twitter. src/content/service-areas.ts centraliza Joinville, Itapoá, São Francisco do Sul, Balneário Barra do Sul, Barra Velha, Balneário Piçarras e Balneário Camboriú. Mapa, FAQ e dados estruturados usam o mesmo cadastro.

Após configurar e publicar o domínio, conferir HTTPS, redirecionamento de www e do endereço antigo na hospedagem, robots.txt, sitemap.xml, imagem social, links WhatsApp e Search Console. Não foi feita mudança de DNS nem publicação automática.

Auditoria HTTP reproduzível: node scripts/audit-fritz.cjs http://localhost:3901, com a produção iniciada nessa porta. O script verifica metadados, áreas atendidas, âncoras, imagens, vídeos e redirecionamentos. Não é uma medição Lighthouse.

## Organização e documentação

[Estrutura completa atual](docs/guias/estrutura-completa.txt) · [Arquitetura](docs/guias/arquitetura.md) · [Índice](docs/README.md).

Arquivos obsoletos retirados do código ativo possuem cópia recuperável local em work/cleanup-2026-10-17. work é ignorado pelo Git e não é necessário para executar o site. Auditorias antigas registram o estado da época, não o estado vigente.

Desenvolvimento: VBG Agency. Fotografias, avaliações, identidade e vídeos têm direitos próprios. Licenças de fontes e ícones acompanham os recursos.
