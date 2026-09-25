import { COMPANY } from "@/config/company";
import { formatPortugueseList } from "@/lib/text";
import type { FaqItem } from "@/types/content";

const serviceAreas = formatPortugueseList(COMPANY.serviceAreas);

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "areas-atendidas",
    question: "Quais cidades a Fritz atende?",
    answer: `A Fritz atende ${serviceAreas}. Para confirmar o atendimento no seu endereço, fale diretamente pelo WhatsApp.`,
  },
  {
    id: "higienizacao-impermeabilizacao",
    question: "Qual a diferença entre higienização e impermeabilização?",
    answer:
      "A higienização é voltada à limpeza do estofado. A impermeabilização aplica uma proteção ao tecido para ajudar a reduzir a absorção imediata de líquidos.",
  },
  {
    id: "fotos-whatsapp",
    question: "Posso enviar fotos do estofado pelo WhatsApp?",
    answer:
      "Sim. Fotos ajudam a identificar a peça e facilitam a conversa inicial sobre o serviço e o orçamento.",
  },
  {
    id: "tempo-servico",
    question: "Quanto tempo o serviço leva?",
    answer:
      "O prazo varia conforme a peça e o serviço. Envie fotos, a quantidade de itens e o tipo de cuidado desejado para solicitar uma estimativa antes de agendar.",
  },
  {
    id: "secagem",
    question: "Depois da higienização, quando posso usar o estofado?",
    answer:
      "O tempo de secagem pode variar conforme tecido, clima, ventilação e condições do ambiente. A orientação adequada é passada no atendimento.",
  },
  {
    id: "localizacao",
    question: "Como encontro a Fritz?",
    answer:
      "A Fritz fica na Rua Octacílio José de Souza, 25, Jarivatuba, Joinville - SC. O link de localização do site abre o endereço diretamente no Google Maps.",
  },
] as const;
