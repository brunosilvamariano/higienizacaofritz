import {
  fritzProfessionalImage,
  fritzAboutCards,
  fritzLifePhotos,
} from '../fritz.images';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { AboutMotion } from './about-motion';
import './about-details.css';
export { AboutMotion };

export function AboutStats() {
  return (
    <section className="about-stats section" aria-label="O cuidado da Fritz">
      <div className="about-stats-grid">
        <div className="about-stats-photo">
          <ResponsiveImage
            {...fritzProfessionalImage}
            alt="Profissional da Fritz durante o cuidado com um estofado"
            sizes="45vw"
          />
        </div>
        {[
          {
            title: 'Atendimento',
            text: 'Começa pelas fotos dos estofados e pela sua necessidade.',
          },
          {
            title: 'Tecidos',
            text: 'Cada tecido tem características que merecem atenção.',
          },
          {
            title: 'Orientação',
            text: 'Converse sobre o serviço e os cuidados após o atendimento.',
          },
          {
            title: 'Detalhes',
            text: 'Atenção às peças que fazem parte da sua rotina.',
          },
        ].map((item) => (
          <article className="about-stats-card" key={item.title}>
            <h2 data-title-anim="">{item.title}</h2>
            <p data-text-anim="">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function WhyChoose() {
  return (
    <section className="about-why section" aria-labelledby="why-title">
      <div className="about-why-heading">
        <h2 id="why-title" data-title-anim="">
          O que nos move
        </h2>
        <div>
          <h3 data-title-anim="">O cuidado da Fritz</h3>
          <p data-text-anim="">
            Cuidar dos estofados que fazem parte da sua vida, com atenção à peça
            e respeito pela sua casa.
          </p>
        </div>
      </div>
      <div className="about-why-track">
        <div className="about-why-stage">
          <div className="about-why-items">
            {[
              {
                title: 'Missão',
                value: 'Cuidar de cada peça',
                icon: 'M16 34V24a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v10 M10 34a6 6 0 0 1 6 6v5h32v-5a6 6 0 1 1 12 0v13H4V40a6 6 0 0 1 6-6Z M10 53v6m44-6v6 M48 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z',
              },
              {
                title: 'Visão',
                value: 'Construir confiança',
                icon: 'M32 5 54 14v17c0 14-9 22-22 28C19 53 10 45 10 31V14Z M32 19s-9 10-9 16a9 9 0 0 0 18 0c0-6-9-16-9-16Z M28 35a4 4 0 0 0 4 4',
              },
              {
                title: 'Valores',
                value: 'Respeito e cuidado',
                icon: 'M32 27 20 16a7 7 0 0 1 12-7 7 7 0 0 1 12 7Z M4 38h9v20H4Z M13 43l10-7h12a5 5 0 0 1 0 10H24 M40 44l11-7a5 5 0 0 1 6 8L40 58H24l-11-6',
              },
            ].map((item) => (
              <article className="about-why-card" key={item.title}>
                <span>{item.title}</span>
                <h3>{item.value}</h3>
                <svg
                  className="about-why-decoration"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={item.icon} />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function AboutTeam() {
  return (
    <section className="about-team section" aria-labelledby="team-title">
      <div className="reference-heading">
        <h2 id="team-title" data-title-anim="">
          O cuidado na prática
        </h2>
        <span className="reference-badge" data-floating-badge="">
          Equipe Fritz
        </span>
      </div>
      <div className="about-team-track">
        <div className="about-team-stage">
          <div className="about-team-grid">
            {fritzAboutCards.map((project) => (
              <article key={project.id}>
                <ResponsiveImage
                  {...project.images}
                  alt={project.images.alt}
                  sizes="(max-width: 767px) 90vw, 25vw"
                />
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function AboutAwards() {
  return (
    <section className="about-awards section" aria-labelledby="awards-title">
      <div className="reference-heading">
        <h2 id="awards-title" data-title-anim="">
          Onde a Fritz atende
        </h2>
        <span className="reference-badge" data-floating-badge="">
          Áreas atendidas
        </span>
      </div>
      <div>
        {[
          {
            title: 'Itapoá',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'São Francisco do Sul',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'Balneário Camboriú',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'Balneário Piçarras',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'Balneário Barra do Sul',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'Barra Velha',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
          {
            title: 'Joinville',
            text: 'Consulte horários e disponibilidade',
            detail: 'Santa Catarina',
          },
        ].map((item) => (
          <article key={item.title} className="about-award-row">
            <strong>{item.title}</strong>
            <span>{item.text}</span>
            <strong>{item.detail}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
export function AboutLife() {
  return (
    <section className="about-life section" aria-labelledby="life-title">
      <div className="reference-heading">
        <h2 id="life-title" data-title-anim="">
          Cuidado em cada detalhe
        </h2>
        <p data-text-anim="">
          Conheça quem cuida dos seus estofados. Fale com a Fritz para consultar
          o serviço indicado para suas peças.
        </p>
      </div>
      <div className="about-life-images" data-slide-cards="">
        {fritzLifePhotos.map((image) => (
          <div key={image.desktop.src} data-slide-card="">
            <ResponsiveImage {...image} alt={image.alt} sizes="30vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
