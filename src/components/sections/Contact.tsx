import { COMPANY } from "@/config/company";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="contact" id="contato">
      <div className="contact__shell">
        <header className="contact__topline">
          <p className="contact__eyebrow">
            <span aria-hidden="true" className="contact__eyebrow-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6.5 7.5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H11l-4.5 3v-3h0a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"></path>
                <path d="M8.5 11.5h7"></path>
                <path d="M8.5 14h4.5"></path>
              </svg>
            </span>
            CONTATO
          </p>
          <p className="contact__location">
            Joinville — SC
          </p>
        </header>
        <div className="contact__body">
          <div className="contact__intro">
            <h2 className="contact__title" id="contact-title">
              Seu estofado merece{" "}
              <strong>
                cuidado profissional.
              </strong>
            </h2>
            <p className="contact__lead">
              Para solicitar seu orçamento, envie fotos da peça, a quantidade e o bairro onde será o atendimento.
            </p>
            <a aria-label="Conversar pelo WhatsApp" className="contact__primary" href={createWhatsappUrl(WHATSAPP_MESSAGES.budget)} rel="noopener noreferrer" target="_blank">
              <span aria-hidden="true" className="contact__primary-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
              <span className="contact__primary-copy">
                <strong>
                  Vamos conversar.
                </strong>
                <small>
                  Falar pelo WhatsApp
                </small>
              </span>
            </a>
          </div>
          <nav aria-label="Canais de contato" className="contact__links">
            <a className="contact-link contact-link--whatsapp" href={createWhatsappUrl(WHATSAPP_MESSAGES.default)} rel="noopener noreferrer" target="_blank">
              <span className="contact-link__index"></span>
              <span className="contact-link__content">
                <strong>
                  WhatsApp
                </strong>
                <small>
                  {COMPANY.contact.phoneDisplay}
                </small>
              </span>
              <span aria-hidden="true" className="contact-link__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
            </a>
            <a aria-label={`Abrir Instagram da ${COMPANY.shortName}`} className="contact-link contact-link--instagram" href={COMPANY.contact.instagramUrl} rel="noopener noreferrer" target="_blank">
              <span className="contact-link__index"></span>
              <span className="contact-link__content">
                <strong>
                  Instagram
                </strong>
                <small>
                  {COMPANY.contact.instagramHandle}
                </small>
              </span>
              <span aria-hidden="true" className="contact-link__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
            </a>
            <a aria-label={`Abrir localização da ${COMPANY.brandName} no Google Maps`} className="contact-link contact-link--location" href={COMPANY.mapsUrl} rel="noopener noreferrer" target="_blank">
              <span className="contact-link__index"></span>
              <span className="contact-link__content">
                <strong>
                  Chegar ao local
                </strong>
                <small>
                  Abrir rota no Google Maps
                </small>
              </span>
              <span aria-hidden="true" className="contact-link__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
            </a>
          </nav>
        </div>
        {/* ==================== FOOTER / RODAPÉ ==================== */}
        <footer aria-label="Informações de atendimento" className="contact__meta">
          <div className="contact-meta">
            <span aria-hidden="true" className="contact-meta__icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="7"></circle>
                <circle cx="12" cy="12" r="2.2"></circle>
              </svg>
            </span>
            <span>
              <strong>
                Atendimento personalizado
              </strong>
              <small>
                Higienização e impermeabilização
              </small>
            </span>
          </div>
          <div className="contact-meta">
            <span aria-hidden="true" className="contact-meta__icon contact-meta__icon--dot"></span>
            <span>
              <strong>
                Atendimento regional
              </strong>
              <small>
                Joinville e litoral norte de SC
              </small>
            </span>
          </div>
          <div className="contact-meta">
            <span aria-hidden="true" className="contact-meta__icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 18 18 6"></path>
                <path d="M9 6h9v9"></path>
              </svg>
            </span>
            <span>
              <strong>
                Contato direto
              </strong>
              <small>
                WhatsApp e redes sociais
              </small>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
