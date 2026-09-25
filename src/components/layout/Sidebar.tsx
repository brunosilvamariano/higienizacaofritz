import { COMPANY } from "@/config/company";
import { NAV_ITEMS } from "@/content/navigation";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { NavigationIcon } from "@/components/ui/NavigationIcon";
import { InstagramIcon, LocationIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Sidebar() {
  return (
    <aside aria-label="Navegação principal" className="sidebar" id="sidebar">
      <div className="sidebar__top">
        <a aria-label={`${COMPANY.shortName} — início`} className="brand" href="#inicio">
          <img alt="" className="brand__mark" height="32" src="/assets/brand/fritz-mark.png" width="32" />
          <span className="brand__name">{COMPANY.brandName}</span>
        </a>
        <button aria-controls="sidebar" aria-expanded="true" aria-label="Recolher menu lateral" className="icon-button sidebar__toggle" data-sidebar-toggle="" type="button">
          <svg aria-hidden="true" className="sidebar__toggle-desktop-icon" viewBox="0 0 24 24"><path d="m14 7-5 5 5 5" /><path d="M19 5v14" /></svg>
          <span aria-hidden="true" className="sidebar__toggle-mobile-glyph" />
        </button>
      </div>

      <nav aria-label="Seções do site" className="sidebar__nav">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const isHome = item.id === "inicio";
            return (
              <li key={item.id}>
                <a
                  aria-current={isHome ? "location" : undefined}
                  className={`nav-item${isHome ? " is-active" : ""}`}
                  data-tooltip={item.label}
                  href={item.href}
                >
                  <NavigationIcon id={item.id} />
                  <span className="nav-item__label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar__bottom">
        <div aria-hidden="true" className="sidebar__divider" />
        <a aria-label={`Solicitar orçamento com a ${COMPANY.brandName} pelo WhatsApp`} className="profile profile--cta" data-tooltip={`Orçamento — ${COMPANY.brandName}`} href={createWhatsappUrl(WHATSAPP_MESSAGES.sidebar)} rel="noopener noreferrer" target="_blank">
          <span aria-hidden="true" className="profile__avatar profile__avatar--whatsapp"><WhatsAppIcon /></span>
          <span className="profile__copy"><strong>Solicitar orçamento</strong><small>{COMPANY.shortName}</small></span>
          <svg aria-hidden="true" className="profile__more profile__more--arrow" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></svg>
        </a>
        <div aria-label="Links rápidos" className="sidebar__socials">
          <span className="sidebar__socials-label">Links rápidos</span>
          <div className="sidebar__socials-list">
            <a aria-label={`Abrir Instagram da ${COMPANY.shortName}`} className="social-link social-link--instagram" data-tooltip="Instagram" href={COMPANY.contact.instagramUrl} rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
            <a aria-label={`Abrir localização da ${COMPANY.brandName} no Google Maps`} className="social-link social-link--location" data-tooltip="Localização" href={COMPANY.mapsUrl} rel="noopener noreferrer" target="_blank"><LocationIcon /></a>
          </div>
        </div>
      </div>
    </aside>
  );
}
