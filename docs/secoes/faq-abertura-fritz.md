# Design brief — FAQ e abertura Fritz

Objetivo: melhorar a leitura das dúvidas e substituir a marca em imagem por uma assinatura digitada, sem alterar o hero ou a composição das páginas.

FAQ: conservar fontes e escala compartilhadas; aliviar o espaçamento entre letras das perguntas, ampliar respiro vertical e separar respostas. Cidades vêm do cadastro único, em duas colunas com pequenos traços; no celular, uma coluna. A orientação sobre bairro fica em um bloco separado. Destaques pontuais usam peso médio e cor de texto, sem transformar a resposta inteira em negrito.

Abertura: fundo gelo, Fritz. em cobalto, cursor verde discreto. Escrita de seis caracteres em 480 ms, pausa final de 100 ms e cortina de 420 ms. Preparação da página e escrita ocorrem juntas. Navegação conserva cobertura de 360 ms para o fechamento do menu. Respeitar movimento reduzido, navegação por âncoras, histórico e recuperação em falhas.

Implementação nos componentes existentes de FAQ, PageTransition e coordenação de HeroEntrance. Sem novas dependências, imagens ou fontes. Validar visualmente desktop/celular, acordeão por teclado, navegação e movimento reduzido; executar verificações do projeto.

## Verificação

FAQ inspecionado em desktop de 1440 px e viewport móvel de 390 px: sete cidades legíveis em coluna única no celular, sem overflow horizontal. Setas do teclado movem o foco entre perguntas; Enter abre a resposta e fecha a anterior.

Navegação Home → Serviços observada no DOM: cobertura, escrita progressiva até Fritz., pausa final, revelação e estado idle. Sequência observada em aproximadamente 1,5 s no ambiente local. Primeira carga e retorno à home liberaram a cortina.

29 testes unitários passaram. Build de produção Webpack concluído com as oito páginas estáticas. Sem dependências adicionais.
