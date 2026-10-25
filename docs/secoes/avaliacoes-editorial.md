# Design brief — avaliações Fritz / Solace UI

Referência escolhida pelo usuário: https://21st.dev/@solaceui/components/testimonial-section-2, inspecionada em desktop e celular em 24/10/2026. Esta direção substitui a composição de três cards que o usuário rejeitou. A página informa licença MIT; implementação própria baseada no comportamento visual observado, sem copiar código restrito a conta.

Composição: título e selo compartilhado centralizados; três faixas de cápsulas com foto circular, nome real e identificação Google nas cores originais. Fileiras em sentidos alternados, velocidade lenta, textura diagonal discreta e máscara de transparência nas bordas. Cápsulas claras com contorno fino, sombra pequena e realce azul no hover/foco. Nenhum cargo fictício, foto externa ou métrica nova.

Interação: abrir o trecho real da avaliação em dialog nativo centralizado, superfície azul profunda, aspas e foto do cliente, link para a fonte e botão de fechar. Fechar com Escape ou clique fora; manter foco no diálogo e devolver ao acionador. Entrada suave. Pausar faixas quando fora da tela, aba oculta, hover, foco, diálogo aberto ou controle de pausa. Movimento reduzido apresenta listas horizontais manuais, sem cópias acessíveis nem animações. Mesmo funcionamento no celular; reduzir largura, vãos e textura sem alterar tipografia compartilhada.

Dados: quinze avaliações existentes em src/content/google-reviews.ts, distribuídas em três grupos de cinco. Preservar literalmente os trechos e indicar que são trechos. Não acrescentar textos completos que não estão no cadastro. Botão geral abre readReviewsUrl; cada relato mantém seu perfil Google real.

Arquivos existentes alterados: src/sections/home/testimonials/review-selection.tsx, review-selection.css e este brief. Nenhuma mudança de arquitetura, fonte, dependência, hero, serviços ou outras seções. Validar abertura/fechamento, foco, pausa, movimento reduzido, desktop, 390 e 320 px, além de npm run check e build.

Validação concluída: npm run check e build de produção aprovados. Conferidos desktop 1440 px, celular 390 px e 320 × 700 px; relato longo de Anne sem overflow interno. Clique direto nas cápsulas e Enter abrem o trecho correto; Escape, botão e clique externo fecham. Retorno de foco ao acionador confirmado por teclado. Faixas pausam com o diálogo aberto e o controle de pausa funciona. Movimento reduzido remove as animações e esconde as cópias, mantendo as listas manuais. Capturas em work/benefits-preview/avaliacoes-solace-desktop.png e avaliacoes-solace-mobile.png. Nenhuma biblioteca adicionada.
