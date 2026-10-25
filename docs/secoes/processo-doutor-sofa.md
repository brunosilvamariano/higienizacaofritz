# Design brief — Como funciona Fritz

Simplificação pedida: substituir a numeração dos círculos do percurso por ícones locais relacionados a cada etapa (foto, calendário, higienização e cuidados finais). Manter os rótulos Etapa 01–04 e a ordem acessível da lista, evitando duplicação visual de números.

Evolução pedida: foto ocupa a largura total da seção, com paralaxe discreta (até 60 px de deslocamento em cada direção), sem fundo fixo no celular. Painel das quatro etapas sobrepõe 72 px da base da imagem. Cabeçalho e painel continuam alinhados ao eixo de conteúdo; foto sem margens laterais. Preservar controles, etapas, CTA e tipografia. Imagem com área extra para impedir exposição de bordas ao movimentar; preferência de movimento reduzido mantém foto estática. Atualizações por requestAnimationFrame somente durante rolagem/redimensionamento.

Referência inspecionada: https://doutorsofa.com.br/pt-BR/unidades/chapeco-sc, Como Funciona a Limpeza de Estofados. Elementos úteis: fotografia de atendimento na abertura, linha contínua com passos numerados e CTA ao fim do percurso.

Direção Fritz: cabeçalho editorial alinhado à esquerda; painel claro com borda azul acinzentada, raio de 28 px e sombra externa discreta. Foto local extraída do vídeo de estofados à esquerda; à direita, quatro etapas conectadas por uma linha fina, círculos numerados e textos Nohemi/Switzer na escala compartilhada. Rodapé integrado com orientação e RoundLink padrão para o WhatsApp. Somente dados do Fritz: fotos e cidade para orçamento, combinação do atendimento, preparo do ambiente e cuidados de secagem. Não importar garantia, prazo de secagem, produtos ou contatos do concorrente.

Desktop: fotografia e percurso lado a lado; tablet/celular, foto horizontal e linha vertical com números à esquerda. Os quatro textos ficam inicialmente abertos, preservando o controle de expandir/recolher cada etapa com rótulos acessíveis. O desenho da linha e a entrada dos passos são sutis, executados uma vez na visibilidade; movimento reduzido apresenta tudo sem animação. Sem empilhamento de textos ou setas pontilhadas na nova seção.

Editar arquivos existentes src/sections/home/process/process.tsx, process.css e process.content.ts; ajustar em home.css somente as regras contextuais antigas do botão e do alinhamento desta seção. Preservar id processo, classes raiz usadas pela transição dos serviços, etapas reais, fontes e demais seções. Novo arquivo: este registro. Sem dependências ou arquitetura novas.

Verificação: npm run check aprovado; desktop 1440 px com percurso horizontal, imagem e CTA completos; celular 320 px com percurso vertical e sem overflow. Testado recolher e reabrir a segunda etapa: conteúdo recolhido com altura zero e aria-expanded atualizado. Movimento reduzido mantém texto visível e transição em 0 s. Capturas em work/benefits-preview/premium-process-desktop.jpg e premium-process-mobile.jpg.

Validação da imagem ampliada: check e build aprovados. Foto ocupa toda a largura útil em 1440 e 320 px, sem overflow horizontal. Deslocamento observado de -30,12 px para 7,96 px durante rolagem; área de imagem cobre o quadro inteiro nas duas posições. Movimento reduzido confirmado com transform none e inset 0. Capturas parallax-process-desktop.jpg e parallax-process-mobile.jpg na mesma pasta de previews.
