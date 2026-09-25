import { COMPANY } from "@/config/company";

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Gostaria de solicitar um orçamento para higienização ou impermeabilização de estofados.",
  budget: "Olá! Gostaria de solicitar um orçamento para meu estofado.",
  about: `Olá! Gostaria de saber mais sobre os serviços da ${COMPANY.brandName}.`,
  sidebar: "Olá! Gostaria de solicitar um orçamento.",
} as const;

export function createWhatsappUrl(message: string): string {
  return `https://wa.me/${COMPANY.contact.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
