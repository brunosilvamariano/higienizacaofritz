import { SERVICES } from "@/content/services";
import { createWhatsappUrl } from "@/lib/whatsapp";

export function Services() {
  return (
    <section aria-labelledby="atendimento-title" className="atendimento" id="atendimento">
      <div className="atendimento__inner">
        <header className="atendimento__header">
          <div>
            <p className="atendimento__eyebrow">
              <span aria-hidden="true" className="atendimento__eyebrow-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect height="6" rx="1.2" width="6" x="4" y="4" />
                  <rect height="6" rx="1.2" width="6" x="14" y="4" />
                  <rect height="6" rx="1.2" width="6" x="4" y="14" />
                  <rect height="6" rx="1.2" width="6" x="14" y="14" />
                </svg>
              </span>
              Atendimentos
            </p>
            <h2 className="atendimento__title" id="atendimento-title">
              Soluções para sofás, cadeiras, <strong>colchões e mais.</strong>
            </h2>
            <p className="atendimento__lead">
              Serviços para sofás, cadeiras, colchões, poltronas, camas e outros estofados residenciais.
            </p>
          </div>
          <div className="atendimento__meta">
            <p className="atendimento__meta-copy">
              Envie fotos, quantidade de peças e bairro para receber uma avaliação inicial pelo WhatsApp.
            </p>
          </div>
        </header>

        <div className="atendimento__rail">
          <div
            aria-describedby="atendimento-scroll-help"
            aria-label="Atendimentos disponíveis"
            aria-roledescription="carrossel"
            className="atendimento__viewport"
            data-services-viewport=""
            id="atendimento-viewport"
            role="region"
            tabIndex={0}
          >
            <p className="visually-hidden" id="atendimento-scroll-help">
              Deslize horizontalmente, arraste com o mouse ou use a barra de rolagem para explorar os atendimentos.
            </p>
            <div className="atendimento__track">
              {SERVICES.map((service, index) => (
                <article
                  key={service.id}
                  aria-label={`${index + 1} de ${SERVICES.length}: ${service.ariaLabel}`}
                  aria-roledescription="slide"
                  className={`service-card service-card--${service.variant}`}
                  role="group"
                >
                  <div aria-hidden="true" className="service-card__media">
                    <img
                      alt=""
                      decoding="async"
                      height={service.image.height}
                      loading="lazy"
                      src={service.image.src}
                      width={service.image.width}
                    />
                  </div>
                  <div className="service-card__content">
                    <span aria-hidden="true" className="service-card__number">{service.number}</span>
                    <span className="service-card__tag">{service.tag}</span>
                    <div className="service-card__body">
                      <h3 className="service-card__title">{service.title}</h3>
                      <p className="service-card__copy">{service.description}</p>
                      <ul aria-label="Destaques" className="service-card__keywords">
                        {service.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                      </ul>
                      <a
                        aria-label={`Solicitar orçamento sobre ${service.ariaLabel} pelo WhatsApp`}
                        className="service-card__cta"
                        href={createWhatsappUrl(service.whatsappMessage)}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true" className="service-card__cta-icon">
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M5 12h14" />
                            <path d="m14 7 5 5-5 5" />
                          </svg>
                        </span>
                        <span>Solicitar orçamento</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="atendimento__scroll-control">
            <input
              aria-label="Percorrer os atendimentos horizontalmente"
              className="atendimento__scroll-range"
              data-services-scroll-range=""
              max="100"
              min="0"
              step="0.1"
              type="range"
              defaultValue="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
