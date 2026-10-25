# Design brief — identidade Fritz

> Registro anterior. A direção vigente e os resultados da revisão de 25/10/2026 estão em [auditoria-identidade-visual-fritz.md](auditoria-identidade-visual-fritz.md).

25/10/2026. Refinar home e Serviços, mantendo cobalto, fontes, estrutura e interações aprovadas. Referência: https://aentoria-ttm.webflow.io/. Acabamento observado: base #F4F5F0, carvão #131313, verde #CDFB56, bordas iluminadas, sombras externas e internas. Adaptar a linguagem de luz e profundidade; não copiar marca, conteúdo ou verde neon.

Paleta Fritz: cobalto #0047AB em hero e ações; azul #3279BF em acentos editoriais grandes; gelo #F3F5F1; porcelana #FDFEFC; carvão #1C2523; texto secundário #59645E; borda #D9DFD6. Verde #77B14A inspirado no detalhe do equipamento da logo, aplicado em gotas e pequenos elementos; suporte verde #E4EFD9. Não recolorir logo nem ícones oficiais.

Uma borda por superfície, sombra difusa com iluminação superior. Botões mantêm cápsula, dimensões, animação e WhatsApp oficial. Cards e controles recebem relevo consistente. Avaliações conservam fotos, conteúdo, movimento e modal, retirando ruído diagonal. Diferenciais mantêm progresso e animação. Contato continua por trás do rodapé, agora com radial gelo/verde discreto. Hero/header conservam geometria e efeitos. Comparativos provisórios autorizados aguardam substituição por fotos reais.

Sem mudanças de arquitetura ou dependências. Arquivos existentes: tokens.css para paleta/sombras; home-colors.css para aplicação compartilhada; home.css para compatibilidade; CSS dos componentes RoundLink/SectionEyebrow e de cada seção. servicos/page.tsx importa a mesma aplicação de paleta. Novo: somente este documento.

Validar lint, TypeScript, formatação, compilação, contraste e navegador em desktop/mobile; verificar menu, FAQ, avaliações e transbordamento. Nenhuma meta Lighthouse presumida.

## Verificacao realizada

- npm run check: lint, TypeScript e Prettier passaram.
- npm run build -- --webpack: compilacao de producao e geracao estatica concluidas em pasta isolada. Configuracoes temporarias de tipos restauradas.
- Inspecao no navegador em 1440, 390 e 320 px: sem transbordamento horizontal do documento nas duas paginas; CTAs dentro de seus recipientes em 320 px.
- Modal de avaliacao real, acordeao do FAQ e navegacao pelo menu mobile verificados.
- Cobalto do hero confirmado em #0047AB. Contraste calculado: texto/carvao sobre gelo 14,30:1; texto secundario sobre porcelana 6,09:1; porcelana sobre cobalto 8,34:1. Azul secundario 4,14:1 sobre gelo, restrito a titulos grandes; verde da marca e decorativo, sem uso em corpo de texto claro.
- A checagem visual encontrou e corrigiu conflitos de cascata no fundo de contato e nos rotulos dos paineis escuros. Geometria do hero/header e animacoes existentes preservadas. Sem dependencias adicionadas.
