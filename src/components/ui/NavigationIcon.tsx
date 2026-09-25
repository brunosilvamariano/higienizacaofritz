import type { NavItem } from "@/types/content";

export function NavigationIcon({ id }: { id: NavItem["id"] }) {
  switch (id) {
    case "inicio":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>;
    case "sobre":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>;
    case "atendimento":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 1Z" /><path d="M20 13v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 1Z" /><path d="M17 19c0 1.1-.9 2-2 2h-3" /></svg>;
    case "processo":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /><path d="M6.5 12h4M13.5 12h4" /></svg>;
    case "galeria":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><rect height="16" rx="2" width="18" x="3" y="4" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 20" /></svg>;
    case "faq":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.5 2.5 0 1 1 3.95 2.04c-1.08.8-1.75 1.2-1.75 2.46" /><path d="M12 17h.01" /></svg>;
    case "contato":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><rect height="14" rx="2" width="18" x="3" y="5" /><path d="m4 7 8 6 8-6" /></svg>;
  }
}
