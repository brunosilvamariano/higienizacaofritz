# Adaptando a base para outra empresa

## 1. Dados centrais

Edite `src/config/company.ts`:

- nome da empresa;
- telefone/WhatsApp;
- Instagram;
- endereço e Google Maps;
- cidades atendidas;
- nota e quantidade de avaliações;
- crédito do desenvolvedor, se necessário.

## 2. SEO

Edite `src/config/seo.ts`:

- `siteUrl`;
- `title`;
- `description`;
- imagem Open Graph.

O Schema, robots e sitemap usam esses dados automaticamente.

## 3. Conteúdo

Troque os arquivos em `src/content/`. Não replique cards diretamente nos componentes.

## 4. Identidade visual

Comece por `src/styles/tokens.css`. Troque cores e fontes antes de alterar regras específicas das seções.

## 5. Assets

Substitua as imagens em `public/assets/` mantendo nomes e proporções quando quiser preservar o layout. Se mudar caminhos, atualize os arquivos de conteúdo/configuração correspondentes.

## 6. Validação

Antes do deploy:

```bash
npm run typecheck
npm run build
```

Depois revise desktop, tablet e mobile e valide os links externos, WhatsApp, Maps, SEO e Open Graph.
