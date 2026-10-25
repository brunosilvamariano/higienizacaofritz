import Image from 'next/image';
import { TitleReveal } from '@/animations/title-reveal';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { RoundLink } from '@/components/ui/round-link';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import { serviceDetails } from './service-catalog.content';

export function ServiceCatalog() {
  return (
    <section
      id="servicos"
      className="service-catalog"
      aria-labelledby="service-catalog-title"
      tabIndex={-1}
    >
      <div className="service-catalog-heading">
        <SectionEyebrow>Serviços Fritz</SectionEyebrow>
        <TitleReveal
          id="service-catalog-title"
          text="O cuidado certo começa aqui."
          accent="cuidado certo"
        />
      </div>
      <nav
        className="service-catalog-index tw:flex"
        aria-label="Escolha um serviço"
      >
        {serviceDetails.map((service) => (
          <a key={service.id} href={`/servicos#${service.id}`}>
            {service.title
              .replace('Higienização de ', '')
              .replace(' de estofados', '')}
          </a>
        ))}
      </nav>
      <div className="service-catalog-list">
        {serviceDetails.map((service, index) => (
          <article
            id={service.id}
            key={service.id}
            className="service-detail tw:grid"
            aria-labelledby={`detail-${service.id}`}
            tabIndex={-1}
          >
            <div className="service-detail-photo">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 767px) 90vw, 45vw"
              />
              <span className="service-detail-icon" aria-hidden="true">
                <FritzIcon name={service.icon} />
              </span>
            </div>
            <div className="service-detail-copy">
              <span className="service-detail-number">
                Serviço {String(index + 1).padStart(2, '0')}
              </span>
              <h3 id={`detail-${service.id}`}>{service.title}</h3>
              <p className="service-detail-introduction">
                {service.introduction}
              </p>
              <p>{service.description}</p>
              <ul>
                {service.notes.map((note) => (
                  <li key={note}>
                    <span aria-hidden="true">✓</span>
                    {note}
                  </li>
                ))}
              </ul>
              <RoundLink
                href={whatsappUrl(service.title.toLowerCase())}
                icon="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar ${service.title.toLowerCase()} pelo WhatsApp — abrir em nova aba`}
                data-track-contact={`pagina servicos ${service.id}`}
              >
                Consultar este serviço
              </RoundLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
