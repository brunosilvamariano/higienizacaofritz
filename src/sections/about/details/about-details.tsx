import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { AboutMotion } from './about-motion';
import './about-details.css';
export { AboutMotion };

export function AboutStats() {
  return (
    <section className="about-stats section" aria-label="Elementos do projeto">
      <div className="about-stats-grid">
        <div className="about-stats-photo">
          <ResponsiveImage
            {...projects[5].images.capa}
            alt="Ambiente de trabalho com móveis planejados"
            sizes="45vw"
          />
        </div>
        {[
          {
            title: 'Planejamento',
            text: 'Começa pelo espaço e pela sua rotina.',
          },
          {
            title: 'Materiais',
            text: 'Texturas e acabamentos compõem o ambiente.',
          },
          {
            title: 'Função',
            text: 'Organização e circulação orientam as escolhas.',
          },
          {
            title: 'Detalhes',
            text: 'Proporções, iluminação e uso em cada composição.',
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
          Seu espaço, seu jeito
        </h2>
        <div>
          <h3 data-title-anim="">Móveis planejados</h3>
          <p data-text-anim="">
            Planejar um ambiente é pensar em como você vive: o que precisa
            guardar, como se movimenta e quais materiais fazem sentido no seu
            espaço.
          </p>
        </div>
      </div>
      <div className="about-why-track">
        <div className="about-why-stage">
          <div className="about-why-items">
            {[
              { title: 'Entender', value: 'Sua rotina' },
              { title: 'Planejar', value: 'Seu espaço' },
              { title: 'Compor', value: 'Os detalhes' },
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
          Ambientes
        </h2>
        <span className="reference-badge" data-floating-badge="">
          Para viver
        </span>
      </div>
      <div className="about-team-track">
        <div className="about-team-stage">
          <div className="about-team-grid">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug}>
                <ResponsiveImage
                  {...project.images.capa}
                  alt={`Composição de ${project.category.toLowerCase()} com móveis planejados`}
                  sizes="(max-width: 767px) 90vw, 25vw"
                />
                <h3>{project.category}</h3>
                <p>{project.introduction}</p>
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
          Cada detalhe conta
        </h2>
        <span className="reference-badge" data-floating-badge="">
          Forma e função
        </span>
      </div>
      <div>
        {[
          {
            title: 'Proporção',
            text: 'Móveis em relação ao espaço disponível',
            detail: 'Composição',
          },
          {
            title: 'Organização',
            text: 'Lugar para os objetos do dia a dia',
            detail: 'Uso',
          },
          {
            title: 'Materiais',
            text: 'Texturas e acabamentos em conjunto',
            detail: 'Escolhas',
          },
          {
            title: 'Iluminação',
            text: 'Luz que valoriza o ambiente e suas funções',
            detail: 'Atmosfera',
          },
          {
            title: 'Circulação',
            text: 'Espaço para se mover com conforto',
            detail: 'Planejamento',
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
          Madeira, luz e proporção
        </h2>
        <p data-text-anim="">
          Explore composições de móveis planejados para diferentes espaços da
          casa.
        </p>
      </div>
      <div className="about-life-images" data-slide-cards="">
        {projects.slice(0, 4).map((project) => (
          <div key={project.slug} data-slide-card="">
            <ResponsiveImage
              {...project.images.angulo}
              alt={`${project.category} — composição de móveis planejados`}
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
