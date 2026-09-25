import { COMPANY } from "@/config/company";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function About() {
  return (
    <section aria-labelledby="about-title" className="about" id="sobre">
      <div className="about__inner">
        <div className="about__layout">
          <figure className="about__media">
            <img alt={`Profissional da ${COMPANY.brandName} realizando higienização de estofado`} decoding="async" height="500" loading="lazy" src="/assets/images/about/fritz-atendimento.webp" width="500" />
            <div aria-hidden="true" className="about__seal">
              <svg aria-hidden="true" viewBox="0 0 120 120">
                <defs>
                  <path d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" id="about-seal-path"></path>
                </defs>
                <text>
                  <textPath href="#about-seal-path" startOffset="1%">
                    FRITZ • HIGIENIZAÇÃO • IMPERMEABILIZAÇÃO • SC •
                  </textPath>
                </text>
              </svg>
              <span className="about__seal-core">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3.5c.55 4.65 3.2 7.3 7.85 7.85-4.65.55-7.3 3.2-7.85 7.85-.55-4.65-3.2-7.3-7.85-7.85C8.8 10.8 11.45 8.15 12 3.5Z"></path>
                  <path d="M19 3.5c.18 1.45 1.05 2.32 2.5 2.5-1.45.18-2.32 1.05-2.5 2.5-.18-1.45-1.05-2.32-2.5-2.5 1.45-.18 2.32-1.05 2.5-2.5Z"></path>
                </svg>
              </span>
            </div>
          </figure>
          <div className="about__content">
            <p className="about__eyebrow">
              <span aria-hidden="true" className="about__eyebrow-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 19h14M8 16l8-8M9.5 5.5l9 9M6 10l8-8"></path>
                </svg>
              </span>
              Sobre
            </p>
            <h2 className="about__title" id="about-title">
              Cuidado técnico para
              <span>
                renovar e{" "}
                <strong>
                  proteger.
                </strong>
              </span>
            </h2>
            <p className="about__copy">
              {COMPANY.brandName} atua com higienização e impermeabilização de estofados, unindo cuidado no atendimento e atenção em cada etapa do serviço.
            </p>
            <div aria-hidden="true" className="about__divider">
              <span className="about__divider-accent"></span>
            </div>
            <div aria-label="Princípios da nossa abordagem" className="about__principles" role="list">
              <div className="about__principle" role="listitem">
                <span aria-hidden="true" className="about__principle-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="7.2"></circle>
                    <path d="m14.8 9.2-1.7 3.9-3.9 1.7 1.7-3.9 3.9-1.7Z"></path>
                  </svg>
                </span>
                <div>
                  <h3>
                    Higienização cuidadosa
                  </h3>
                  <p>
                    Limpeza profissional para seus estofados.
                  </p>
                </div>
              </div>
              <div className="about__principle" role="listitem">
                <span aria-hidden="true" className="about__principle-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M4.5 16.5 12 4l7.5 12.5"></path>
                    <path d="M7.8 11.7h8.4M8.5 17.5h7"></path>
                  </svg>
                </span>
                <div>
                  <h3>
                    Proteção do tecido
                  </h3>
                  <p>
                    Impermeabilização para ajudar no cuidado diário.
                  </p>
                </div>
              </div>
            </div>
            <div aria-label="Ações sobre nossa abordagem" className="about__actions">
              <a className="hero-cta hero-cta--primary about__cta" href={createWhatsappUrl(WHATSAPP_MESSAGES.about)} rel="noopener noreferrer" target="_blank">
                <span aria-hidden="true" className="hero-cta__icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.6Z"></path>
                    <path d="M8.4 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.5 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.8-1c.2-.3.5-.3.8-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.4-.7 2-.6.7-1.6 1-2.6.8-1.4-.2-3.2-1.1-4.8-2.6-1.9-1.8-3.1-4-3.2-5.3 0-.5.1-1 .3-1.3Z"></path>
                  </svg>
                </span>
                <span className="hero-cta__label">
                  Solicitar orçamento
                </span>
                <span aria-hidden="true" className="hero-cta__arrow">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M6 12h11"></path>
                    <path d="m13.5 8.5 3.5 3.5-3.5 3.5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
