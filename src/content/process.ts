import type { ProcessStep } from "@/types/content";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "contato",
    title: "Contato",
    description: "Você envia fotos, quantidade de peças e localização pelo WhatsApp.",
    icon: "contact",
  },
  {
    id: "avaliacao",
    title: "Avaliação",
    description:
      "Analisamos o tipo de peça, o tecido e o serviço solicitado para alinhar o orçamento.",
    icon: "evaluation",
  },
  {
    id: "execucao",
    title: "Execução",
    description:
      "A higienização ou impermeabilização é realizada conforme as características do material.",
    icon: "execution",
  },
  {
    id: "orientacoes",
    title: "Orientações",
    description:
      "Ao final, explicamos as orientações de uso, secagem e conservação indicadas para a peça.",
    icon: "guidance",
  },
] as const;
