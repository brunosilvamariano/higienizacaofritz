import type { ResultItem } from "@/types/content";

export const RESULTS: readonly ResultItem[] = [
  {
    id: "higienizacao-sofa",
    number: "01",
    category: "Higienização",
    badge: "Serviço realizado",
    title: "Higienização de sofá",
    description:
      "Registro de atendimento em sofá, com atenção ao tecido, às áreas de uso e aos detalhes da peça.",
    image: {
      src: "/assets/images/resultados/higienizacao.jpg",
      alt: "Higienização de sofá realizada pela Fritz",
      width: 1024,
      height: 1536,
    },
  },
  {
    id: "cadeiras",
    number: "02",
    category: "Cadeiras",
    badge: "Serviço realizado",
    title: "Cadeiras estofadas",
    description:
      "Registro de atendimento em cadeira estofada, incluindo assento, encosto e acabamento do tecido.",
    image: {
      src: "/assets/images/resultados/cadeira.jpg",
      alt: "Cadeira estofada em serviço realizado pela Fritz",
      width: 1024,
      height: 1536,
    },
  },
  {
    id: "detalhes",
    number: "03",
    category: "Detalhes",
    badge: "Execução real",
    title: "Costuras e detalhes",
    description:
      "Atenção às costuras e áreas de maior contato durante a higienização do estofado.",
    image: {
      src: "/assets/images/resultados/execucao.jpg",
      alt: "Limpeza de costuras e detalhes de estofado realizada pela Fritz",
      width: 1024,
      height: 1536,
    },
  },
  {
    id: "camas",
    number: "04",
    category: "Camas",
    badge: "Serviço realizado",
    title: "Camas e cabeceiras",
    description:
      "Registro de atendimento em colchão, base e cabeceira, conforme o material e a necessidade da peça.",
    image: {
      src: "/assets/images/resultados/cama.jpg",
      alt: "Higienização de cama e cabeceira realizada pela Fritz",
      width: 1024,
      height: 1536,
    },
  },
  {
    id: "impermeabilizacao",
    number: "05",
    category: "Impermeabilização",
    badge: "Proteção do tecido",
    title: "Impermeabilização",
    description:
      "Aplicação de proteção para ajudar a reduzir a absorção imediata de líquidos no tecido.",
    image: {
      src: "/assets/images/resultados/protecao.jpg",
      alt: "Impermeabilização de tecido realizada pela Fritz",
      width: 1024,
      height: 1536,
    },
  },
] as const;
