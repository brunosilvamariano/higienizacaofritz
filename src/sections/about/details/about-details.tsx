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
            text: 'Começa pelas fotos da peça e pela sua necessidade.',
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
              { title: 'Missão', value: 'Cuidar de cada peça' },
              { title: 'Visão', value: 'Construir confiança' },
              { title: 'Valores', value: 'Respeito e cuidado' },
            ].map((item) => (
              <article className="about-why-card" key={item.title}>
                <span>{item.title}</span>
                <h3>{item.value}</h3>
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
