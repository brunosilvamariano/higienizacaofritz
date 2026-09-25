import type { NavItem } from "@/types/content";

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "sobre", label: "Sobre", href: "#sobre" },
  { id: "atendimento", label: "Atendimento", href: "#atendimento" },
  { id: "processo", label: "Processo", href: "#processo" },
  { id: "galeria", label: "Resultados", href: "#galeria" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contato", label: "Contato", href: "#contato" },
] as const;

export const FOOTER_NAV_COLUMNS = [
  [NAV_ITEMS[0], NAV_ITEMS[2], NAV_ITEMS[5]],
  [NAV_ITEMS[1], NAV_ITEMS[4], NAV_ITEMS[6]],
] as const;
