# Arquitetura

## Princípios
HTML semântico, CSS modular, JavaScript progressivo e assets locais. Cada seção mantém seu próprio CSS; JavaScript só existe quando há interação real.

## Ordem visual
Hero → Sobre → Atendimentos → Processo → Galeria/Resultados → FAQ → Contato → Footer.

## Estado da sidebar
`assets/js/components/sidebar.js` é a fonte de verdade para expandido/recolhido, navegação ativa e itens opcionais. Evite duplicar essa lógica em CSS. A Fritz não utiliza TikTok nesta versão; o canal foi removido da navegação e do rodapé.

## Design system
`assets/css/design-system.css` centraliza tokens. Antes de adicionar valores locais, verifique se um token existente resolve o caso.

## Convenções
Classes BEM-like; SVGs decorativos com `aria-hidden`; links externos com `rel="noopener noreferrer"`; imagens informativas com `alt`; controles devem ser teclado-acessíveis.
