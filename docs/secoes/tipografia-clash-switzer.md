# Design Brief — tipografia Fritz

23/10/2026. Aplicação expressamente autorizada de Clash Display e Switzer em substituição às famílias atuais. Preservar o header/hero recém-adaptados, fotos, cores, conteúdo, navegação e interações.

Revisão do título do hero: ampliar Cuidado com / a sua casa. conforme a referência enviada, com Clash Display Semibold e escala própria de 40–96 px no desktop/tablet e 34–52 px no celular. Manter duas linhas, a descrição e o CTA na coluna de apoio e conferir o encaixe com o retrato. A mudança é exclusiva do título principal; títulos das demais seções mantêm a escala aprovada.

Clash Display em peso 500 nos títulos, 600 na assinatura textual da marca; caixa natural nos títulos de leitura. Switzer 400 nos parágrafos e 500 nos menus e ações, incluindo nomes de clientes. Escala central em tokens.css: títulos de seção 30–54 px, cards 22–28 px, banner 30–60 px, corpo 16–18 px com entrelinha 1,6. Entrelinha de títulos 1,12 e tracking discreto. Palavra Higienização com escala própria, pois a nova fonte ocupa mais largura; manter o retrato à frente e legibilidade em telas estreitas.

Revisar títulos longos, nomes de avaliações, cards sobre fotos, quatro etapas, mapa, FAQ, rodapé e menu. Manter conteúdo no fluxo, com quebra por palavras, sem redução artificial de escala ou corte para esconder overflow. Composição inferior do hero em duas colunas no desktop e uma no celular; respeitar as áreas do rosto e do CTA. Todos os efeitos existentes continuam com movimento reduzido.

Pacotes oficiais obtidos de https://www.fontshare.com/fonts/clash-display e https://www.fontshare.com/fonts/switzer. WOFF2 variáveis originais sem conversão, subset ou alteração; FFL.txt preservado junto de cada família. Fontes servidas com next/font/local, sem CDN. Não instalar pacotes. Fontes antigas conservadas como acervo local, sem carregamento na página.

Manter a organização vigente. Novos recursos em src/assets/fonts/clash-display e src/assets/fonts/switzer; configurar pelos arquivos existentes fonts.ts, layout.tsx e folhas de estilo correspondentes. Nenhuma mudança de arquitetura ou novas rotas.

Verificação: confirmar carregamento das duas famílias e pesos reais, caracteres de português e ausência de fontes remotas; revisar desktop e celular, menus, alturas, quebras, overflow e movimento reduzido. Executar check, testes existentes e build; capturar prévias de hero e conteúdo.

Resultado: npm run check, 28 testes existentes e build de produção concluídos com sucesso. Revisão visual em 320×568, 390×844, 768×1024, 1024×768 e 1440×900. Sem overflow horizontal ou cortes horizontais nos títulos inspecionados. Menu móvel e megamenu verificados; FAQ com perguntas/respostas de 15 px e números em uma linha. Revisados benefícios, processo, Sobre, FAQ e rodapé; nomes de avaliações usam Switzer em escala própria. Fontes recebidas por /_next/static/media com status 200 no localhost, sem requisição a CDN de fontes. SHA-256 dos três WOFF2 coincide com os pacotes oficiais. Prévias em work/typography-preview. A revisão de conteúdo foi feita também com movimento reduzido; a prévia final restaura as animações normais.
