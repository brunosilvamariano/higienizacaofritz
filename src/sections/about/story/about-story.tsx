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
          <span className="section-kicker">O olhar da Fritz</span>
          <h2 id="about-story-title">
            Seu jeito de viver.
            <br />
            Nosso ponto de partida.
          </h2>
        </Reveal>
        <Reveal className="about-story-copy">
          <p>
            O primeiro passo é entender sua peça e o cuidado que você procura.
            Envie fotos, quantidade de estofados e sua localização para
            conversar com a Fritz.
          </p>
          <p>
            Converse sobre o serviço indicado para o tecido e siga as
            orientações após o atendimento. Atenção às peças e respeito pela sua
            casa orientam essa conversa.
          </p>
          <WhatsAppLink context="higienização do meu estofado">
            Conversar com a Fritz
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
        Nosso cuidado.
      </div>
    </section>
  );
}
