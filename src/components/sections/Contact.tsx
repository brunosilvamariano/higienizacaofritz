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
              Seu estofado merece
              <strong>
                cuidado profissional.
              </strong>
            </h2>
            <p className="contact__lead">
              Para solicitar seu orçamento, envie fotos da peça, a quantidade e o bairro onde será o atendimento.
            </p>
            <a aria-label="Conversar pelo WhatsApp" className="contact__primary" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20estofado." rel="noopener noreferrer" target="_blank">
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
            <a className="contact-link contact-link--whatsapp" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20ou%20impermeabiliza%C3%A7%C3%A3o%20de%20estofados." rel="noopener noreferrer" target="_blank">
              <span className="contact-link__index"></span>
              <span className="contact-link__content">
                <strong>
                  WhatsApp
                </strong>
                <small>
                  +55 47 99905-1278
                </small>
              </span>
              <span aria-hidden="true" className="contact-link__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
            </a>
            <a aria-label="Abrir Instagram da Fritz Higienização" className="contact-link contact-link--instagram" href="https://www.instagram.com/higienizacaofritz/" rel="noopener noreferrer" target="_blank">
              <span className="contact-link__index"></span>
              <span className="contact-link__content">
                <strong>
                  Instagram
                </strong>
                <small>
                  @higienizacaofritz
                </small>
              </span>
              <span aria-hidden="true" className="contact-link__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 18 18 6"></path>
                  <path d="M9 6h9v9"></path>
                </svg>
              </span>
            </a>
            <a aria-label="Abrir localização da Fritz no Google Maps" className="contact-link contact-link--location" href="https://www.google.com/maps/search/?api=1&amp;query=Higieniza%C3%A7%C3%A3o%20e%20Impermeabiliza%C3%A7%C3%A3o%20Fritz%2C%20R.%20Octac%C3%ADlio%20Jos%C3%A9%20de%20Souza%2C%2025%20-%20Jarivatuba%2C%20Joinville%20-%20SC%2C%2089230-435" rel="noopener noreferrer" target="_blank">
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
                Atendimento em Joinville
              </strong>
              <small>
                Santa Catarina
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
