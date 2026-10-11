# Auditoria Fritz — 11/10/2026

Repositório: C:\user\bruno\dev\clientes\higienizacoes\pasta_fritz\fritz
URL canônica: https://higienizacaofritz.vercel.app/

## Conteúdo e arquivos

Revisadas as páginas públicas, artigos, detalhes de projetos, formulários, rodapé e páginas auxiliares. Os textos de móveis planejados foram substituídos por conteúdo de higienização e impermeabilização. Foram removidos 137 arquivos de imagens obsoletas sem referências ativas e o vídeo antigo do template. Fotografias da Fritz e imagens relacionadas aos serviços permanecem. Não foram geradas imagens por IA.

As URLs antigas de artigos e projetos permanecem apenas em dez redirecionamentos permanentes, para preservar links existentes. Identificadores técnicos internos e documentos históricos podem preservar nomes anteriores; não aparecem como conteúdo público.

## SEO e compartilhamento

Títulos, descrições, URLs canônicas, Open Graph e Twitter foram padronizados por página. A imagem google.jpg fornecida foi copiada sem alteração como social-share.jpg, com 1200 × 630 pixels. O vídeo download.mp4 foi copiado sem alteração como fritz-showreel.mp4: 1920 × 1080, duração de cinco segundos.

Configurados sitemap com 16 páginas públicas, robots.txt e dados estruturados LocalBusiness com telefone, sete cidades atendidas e catálogo de serviços. Páginas auxiliares não são indexadas. Previews continuam sem indexação. Nenhum endereço, horário ou avaliação foi inventado.

## Validação

- 25 testes unitários aprovados.
- TypeScript aprovado.
- Biome: 157 arquivos verificados sem erros ou avisos.
- Auditoria HTTP local: 16 páginas, dez redirecionamentos, 29 imagens, vídeo, metadados, sitemap e dados estruturados aprovados.
- Vídeo reproduzido no navegador; não foram observadas imagens quebradas ou erros de console nas páginas examinadas.
- O script scripts/audit-fritz.cjs permite repetir a validação HTTP contra uma instância local.

## Limitação do build e publicação

O build compilou o código e passou na etapa de TypeScript, mas falhou no prerender ao criar subpastas de saída no Windows: EPERM em .next-audit/server/app/contato.segments/contato. A falha persistiu após autorização de escrita; o build completo não foi aprovado. As alterações experimentais de diagnóstico foram revertidas.

Nenhum deploy, push ou commit foi realizado nesta auditoria. Na consulta à versão publicada, ela ainda apresentava URL canônica antiga, noindex e sitemap vazio. É necessário publicar as alterações e conferir no ambiente de produção da Vercel:

SITE_URL=https://higienizacaofritz.vercel.app
SITE_INDEXABLE=true

Depois do deploy, validar novamente a URL pública. A prévia do WhatsApp depende de o novo HTML e a imagem estarem publicados e acessíveis; plataformas podem manter cache da prévia anterior.

## Referências técnicas

- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
