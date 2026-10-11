import { ServiceOpeningMotion } from './service-opening-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { fritzProfessionalImage } from '@/sections/about/fritz.images';
import { servicesContent } from './services.content';
import { serviceItemImages } from './services.images';
import './services.css';
const services = servicesContent.items;
export function Services() {
  return (
    <section
      id="servicos"
      className="services section"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <div className="reference-heading">
        <TitleReveal id="services-title" text={servicesContent.title} />
        <span className="reference-badge" data-floating-badge="">
          Higienização e proteção
        </span>
      </div>
      <div className="services-list">
        {services.map((item) => (
          <article key={item.title} className="service-row tw:flex">
            <div className="service-copy">
              <h3 data-title-anim="">
                {item.image === 'impermeabilizacao'
                  ? 'Impermeabilização'
                  : item.title.slice(0, item.title.lastIndexOf(' '))}
                <br />
                <span className="service-title-ending">
                  {item.image === 'impermeabilizacao'
                    ? 'de estofados'
                    : item.title.slice(item.title.lastIndexOf(' ') + 1)}
                </span>
              </h3>
              <p data-text-anim="">{item.text}</p>
            </div>
            <div className="service-image">
              <ResponsiveImage
                eager
                priority="auto"
                unoptimized
                {...serviceItemImages[item.image]}
                sizes="(min-width:768px) 40vw,100vw"
              />
              <small>{item.title}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesOpening() {
  return (
    <header className="service-page-opening">
      <ServiceOpeningMotion />
      <div className="service-opening-circle" aria-hidden="true" />
      <div
        className="service-opening-circle service-opening-circle-top"
        aria-hidden="true"
      />
      <div className="service-opening-content">
        <p className="service-opening-caption">
          <span aria-hidden="true" />
          Experiência <em>da</em> Fritz
        </p>
        <h1>
          <span data-service-title-text="">Higienização e proteção</span>
          <br />
          <span data-service-title-text="">para cuidar do seu </span>
          <span className="service-opening-photo">
            <ResponsiveImage
              {...fritzProfessionalImage}
              alt=""
              eager
              unoptimized
              sizes="150px"
            />
          </span>{' '}
          <span data-service-title-text="">estofado</span>
        </h1>
        <a
          className="service-opening-down"
          href="#apresentacao-servicos"
          aria-label="Assistir à apresentação da Fritz"
        >
          <span className="tw:sr-only">Assistir à apresentação da Fritz</span>
          <svg aria-hidden="true" viewBox="0 0 20 40" width="16" height="32">
            <path d="M10 2v32m-6-7 6 7 6-7" fill="none" stroke="currentColor" />
          </svg>
        </a>
      </div>
      <span className="service-opening-triangle" aria-hidden="true" />
    </header>
  );
}
