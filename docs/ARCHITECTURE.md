# Arquitetura

## Objetivo

Separar **estrutura**, **conteúdo**, **identidade da empresa** e **interações**. A regra é simples: trocar dados de um cliente não deve exigir procurar telefone, links, avaliações ou serviços em vários componentes.

## Camadas

### `src/config`
Dados globais e estáveis.

- `company.ts`: identidade, contatos, endereço, áreas atendidas, Google e desenvolvedor.
- `seo.ts`: URL canônica, metadata e imagens sociais.
- `structured-data.ts`: Schema.org gerado a partir de `company` e `content`.

### `src/content`
Conteúdo repetitivo convertido em dados tipados.

Serviços, processo, resultados, avaliações, FAQ e navegação vivem aqui. Os componentes apenas renderizam esses dados.

### `src/components`

- `layout`: elementos globais da página.
- `sections`: cada seção principal da landing page.
- `ui`: elementos compartilhados, como ícones e divisores.
- `runtime`: inicialização das interações que dependem do DOM.

### `src/interactions`
Comportamentos que dependem do navegador, todos em TypeScript. Os seletores usam classes e `data-*` já presentes no HTML para preservar o comportamento visual existente.

### `src/styles`

- `tokens.css`: cores, fontes e tokens estruturais; principal ponto para rebranding.
- `base.css`: reset, utilitários e regras globais.
- `components/`: CSS de componentes globais.
- `sections/`: CSS específico de cada seção.

## Fonte única de verdade

Evite escrever no componente informações que já existem em `config` ou `content`. Exemplo: telefone, Instagram, número de avaliações e cidades atendidas devem ser alterados uma única vez.

## Convenções

- Código, arquivos e nomes técnicos em inglês.
- Conteúdo exibido ao usuário em português.
- Indentação de 2 espaços.
- TypeScript `strict` e `allowJs: false`.
- Não adicionar CDN para fontes, ícones ou imagens.
- Não usar CSS inline para layout.
- Preservar semântica e acessibilidade ao criar novas seções.
