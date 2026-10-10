import { ResponsiveImage } from '@/components/media/responsive-image';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Reveal } from '@/animations/reveal';
import { aboutImages } from '../about.images';
import './about-story.css';
export function AboutStory() {
  return (
    <section
      className="about-story section"
      aria-labelledby="about-story-title"
    >
      <figure className="about-story-photo">
        <ResponsiveImage {...aboutImages.living} sizes="90vw" />
      </figure>
      <div className="about-story-grid tw:grid">
        <Reveal>
          <span className="section-kicker">O olhar da Traço</span>
          <h2 id="about-story-title">
            Seu jeito de viver.
            <br />
            Nosso ponto de partida.
          </h2>
        </Reveal>
        <Reveal className="about-story-copy">
          <p>
            O ponto de partida é entender como você usa a casa: o que precisa
            guardar, onde prepara suas refeições e como divide os momentos de
            trabalho e descanso. O planejamento conecta essas necessidades ao
            espaço disponível.
          </p>
          <p>
            Layout, divisões internas e acabamentos devem funcionar em conjunto.
            O olhar da Traço é unir organização e conforto em móveis que façam
            sentido para o seu jeito de viver.
          </p>
          <WhatsAppLink context="o olhar da Traço e um projeto para meu espaço">
            Conversar com a Traço
          </WhatsAppLink>
        </Reveal>
      </div>
      <div className="about-story-material-grid tw:grid">
        <figure>
          <ResponsiveImage
            {...aboutImages.kitchen}
            sizes="(min-width:768px) 44vw, 100vw"
          />
          <figcaption>Enxergar o espaço como um todo.</figcaption>
        </figure>
        <figure>
          <ResponsiveImage
            {...aboutImages.detail}
            sizes="(min-width:768px) 44vw, 100vw"
          />
          <figcaption>Encontrar cuidado em cada detalhe.</figcaption>
        </figure>
      </div>
      <div className="about-story-wordmark" aria-hidden="true">
        Nosso traço.
      </div>
    </section>
  );
}
