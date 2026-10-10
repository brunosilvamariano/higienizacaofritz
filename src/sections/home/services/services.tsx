import { ServiceOpeningMotion } from './service-opening-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import { DemoNote } from '@/components/ui/demo-note';
import { servicesContent } from './services.content';
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
          Do projeto à montagem
        </span>
        <DemoNote>{servicesContent.introduction}</DemoNote>
      </div>
      <div className="services-list">
        {services.map((item, index) => (
          <article key={item.title} className="service-row tw:flex">
            <div className="service-copy">
              <h3 data-title-anim="">{item.title}</h3>
              <p data-text-anim="">{item.text}</p>
              <div className="service-tags">
                {item.features.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="service-image">
              <ResponsiveImage
                eager
                priority="auto"
                unoptimized
                {...projects[index].images.detalhe}
                alt={`${projects[index].category} — estudo conceitual`}
                sizes="(min-width:768px) 40vw,100vw"
              />
              <small>Inspiração de móveis planejados</small>
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
          Experiência <em>da</em> Traço
        </p>
        <h1>
          <span data-service-title-text="">Móveis planejados</span>
          <br />
          <span data-service-title-text="">para o seu </span>
          <span className="service-opening-photo">
            <ResponsiveImage
              {...projects[1].images.detalhe}
              alt=""
              eager
              unoptimized
              sizes="150px"
            />
          </span>{' '}
          <span data-service-title-text="">dia a dia</span>
        </h1>
        <a
          className="service-opening-down"
          href="#apresentacao-servicos"
          aria-label="Assistir à apresentação da Traço"
        >
          <span className="tw:sr-only">Assistir à apresentação da Traço</span>
          <svg aria-hidden="true" viewBox="0 0 20 40" width="16" height="32">
            <path d="M10 2v32m-6-7 6 7 6-7" fill="none" stroke="currentColor" />
          </svg>
        </a>
      </div>
      <span className="service-opening-triangle" aria-hidden="true" />
    </header>
  );
}
