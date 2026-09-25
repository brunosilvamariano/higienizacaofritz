import { COMPANY } from "@/config/company";
import { FOOTER_NAV_COLUMNS } from "@/content/navigation";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { InstagramIcon, LocationIcon, WhatsAppIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer aria-label="Rodapé do site" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <a aria-label={`${COMPANY.shortName} — voltar ao início`} className="site-footer__brand" href="#inicio">
            <img alt="" height="28" src="/assets/brand/fritz-mark.png" width="28" />
            <span>{COMPANY.shortName}</span>
          </a>

          <nav aria-label="Navegação principal do rodapé" className="site-footer__links">
            {FOOTER_NAV_COLUMNS.map((column, index) => (
              <ul key={index}>
                {column.map((item) => <li key={item.id}><a href={item.href}>{item.label === "Atendimento" ? "Atendimentos" : item.label}</a></li>)}
              </ul>
            ))}
          </nav>

          <nav aria-label="Redes sociais e contato" className="site-footer__social">
            <ul>
              <li><a className="site-footer__social-link site-footer__social-link--instagram" aria-label={`Abrir Instagram da ${COMPANY.shortName}`} href={COMPANY.contact.instagramUrl} rel="noopener noreferrer" target="_blank"><InstagramIcon /><span className="visually-hidden">Instagram</span></a></li>
              <li><a className="site-footer__social-link site-footer__social-link--whatsapp" aria-label={`Abrir WhatsApp da ${COMPANY.brandName}`} href={createWhatsappUrl(WHATSAPP_MESSAGES.default)} rel="noopener noreferrer" target="_blank"><WhatsAppIcon className="hero-cta__whatsapp" /><span className="visually-hidden">WhatsApp</span></a></li>
            </ul>
            <ul>
              <li><a className="site-footer__social-link site-footer__social-link--location" aria-label={`Abrir localização da ${COMPANY.brandName} no Google Maps`} href={COMPANY.mapsUrl} rel="noopener noreferrer" target="_blank"><LocationIcon /><span className="visually-hidden">Localização no Google Maps</span></a></li>
            </ul>
          </nav>

          <div className="site-footer__legal">
            <p>© <span>{new Date().getFullYear()}</span> {COMPANY.name}</p>
            <p>Todos os direitos reservados.</p>
            <a aria-label={`Site de ${COMPANY.developer.name}, desenvolvedor do projeto`} className="developer-credit" href={COMPANY.developer.url} rel="noopener noreferrer" target="_blank">
              <span>Desenvolvido com</span>
              <svg aria-hidden="true" className="developer-credit__heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" /></svg>
              <span>por <strong>{COMPANY.developer.name}</strong></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
