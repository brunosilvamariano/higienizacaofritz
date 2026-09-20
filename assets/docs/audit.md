# Auditoria técnica final — setembro de 2026

## Resultado

O projeto foi revisado como site estático reutilizável. A versão de entrega não depende de gerenciador de pacotes, etapa de compilação ou servidor de aplicação. O navegador recebe diretamente `index.html`, CSS, JavaScript, fontes, imagens e demais arquivos locais.

## Estrutura

Os arquivos permanecem separados por componentes e seções. Imagens, fontes, ícones e favicons estão armazenados localmente. O projeto não cria uma segunda cópia do site para publicação: a raiz do repositório é a própria origem estática.

## HTML e semântica

O documento mantém um único `<main>` e um único `<h1>`, além de `header`, `nav`, `section` e `footer` conforme a função dos blocos. O skip link e os atributos de acessibilidade foram preservados.

## Head e SEO

O head contém charset, viewport, title, description, author, application-name, theme-color, robots/googlebot, Open Graph, Twitter Card, canonical, favicon e preload do hero. A imagem social dedicada usa URL absoluta e também é referenciada pelos dados estruturados.

O Schema `LocalBusiness` mantém nome, telefone, endereço, Instagram, serviços e áreas atendidas. `robots.txt` e `sitemap.xml` devem permanecer coerentes com a URL pública usada no deploy.

## Segurança

Nenhuma credencial deve ser adicionada ao repositório. `vercel.json` configura cabeçalhos HTTP não invasivos. Políticas mais restritivas, especialmente CSP e HSTS, devem ser habilitadas somente depois de validar todas as integrações utilizadas pelo site.

## Publicação

A Vercel deve servir o projeto diretamente da raiz, com Framework Preset `Other`, sem comando de instalação, sem comando de compilação e sem diretório de saída configurado.

## Limites desta auditoria

A revisão estática não substitui teste visual em navegadores e dispositivos reais, Lighthouse/axe em navegador, validação do domínio publicado, regras jurídicas específicas ou validação de IDs de plataformas de publicidade.
