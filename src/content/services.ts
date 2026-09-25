import type { ServiceCard } from "@/types/content";

export const SERVICES: readonly ServiceCard[] = [
  {
    id: "higienizacao",
    ariaLabel: "Higienização de estofados",
    variant: "landing",
    number: "01",
    tag: "Limpeza",
    title: "Higienização",
    description:
      "Limpeza de sofás, poltronas, cadeiras e outros estofados, conforme o tipo de tecido e o estado da peça.",
    keywords: ["Limpeza", "Cuidado", "Renovação"],
    image: {
      src: "/assets/images/atendimento/higienizacao-estofados.webp",
      width: 400,
      height: 200,
    },
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para higienização de estofados.",
    schemaName: "Higienização de estofados",
    schemaDescription:
      "Higienização de sofás, cadeiras, poltronas, colchões, camas e outros estofados conforme o tecido e a necessidade da peça.",
  },
  {
    id: "impermeabilizacao",
    ariaLabel: "Impermeabilização",
    variant: "site",
    number: "02",
    tag: "Proteção",
    title: "Impermeabilização",
    description:
      "Proteção para o tecido, ajudando a reduzir a absorção imediata de líquidos e facilitando os cuidados do dia a dia.",
    keywords: ["Proteção", "Tecido", "Praticidade"],
    image: {
      src: "/assets/images/atendimento/impermeabilizacao.webp",
      width: 400,
      height: 200,
    },
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para impermeabilização.",
    schemaName: "Impermeabilização de estofados",
    schemaDescription:
      "Impermeabilização para ajudar a reduzir a absorção imediata de líquidos e facilitar os cuidados com o tecido.",
  },
  {
    id: "estofados-camas",
    ariaLabel: "Estofados e Camas",
    variant: "identity",
    number: "03",
    tag: "Residencial",
    title: "Estofados e Camas",
    description:
      "Atendimento voltado a sofás, camas e peças estofadas que fazem parte da rotina da casa.",
    keywords: ["Sofás", "Poltronas", "Conforto"],
    image: {
      src: "/assets/images/atendimento/camas.webp",
      width: 400,
      height: 200,
    },
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para sofás e poltronas.",
    schemaName: "Higienização de estofados residenciais",
    schemaDescription:
      "Atendimento para sofás, camas, poltronas e outras peças estofadas residenciais.",
  },
  {
    id: "atendimento",
    ariaLabel: "Atendimento personalizado",
    variant: "experience",
    number: "04",
    tag: "Orçamento",
    title: "Atendimento",
    description:
      "Envie fotos e informações pelo WhatsApp para conversar sobre o serviço mais adequado ao seu estofado.",
    keywords: ["WhatsApp", "Avaliação", "Joinville"],
    image: {
      src: "/assets/images/atendimento/atendimento-profissional.webp",
      width: 1200,
      height: 900,
    },
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para atendimento personalizado.",
    schemaName: "Atendimento personalizado para estofados",
    schemaDescription:
      "Avaliação inicial por WhatsApp com fotos e informações para orientar o serviço mais adequado ao estofado.",
  },
] as const;
