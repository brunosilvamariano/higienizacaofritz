import Image from 'next/image';
import professional from '@/assets/images/pages/home/about-fritz/profissional.webp';
import { RoundLink } from '@/components/ui/round-link';
import { whatsappUrl } from '@/config/contact';
import { heroContent } from './hero.content';
import { HeroEntrance } from './hero-entrance';
import './hero.css';

export function Hero() {
  return (
    <section className="hero tw:relative" aria-labelledby="hero-title">
      <HeroEntrance />
      <div className="hero-scene tw:absolute tw:inset-0" aria-hidden="true">
        <div className="hero-wordmark">Higienização</div>
        <div className="hero-portrait">
          <Image
            src={professional}
            alt=""
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 70vw, 760px"
          />
        </div>
      </div>
      <div className="hero-content tw:relative tw:grid">
        <h1 id="hero-title">
          {heroContent.title.map((line) => (
            <span className="hero-title-line" key={line}>
              {line}{' '}
            </span>
          ))}
          <span className="tw:sr-only">
            {' '}
            Higienização de estofados em Joinville e região.
          </span>
        </h1>
        <div className="hero-aside">
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-action-mask">
            <div className="hero-action">
              <RoundLink
                icon="whatsapp"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento pelo WhatsApp — abrir em nova aba"
                data-track-contact="hero orçamento"
              >
                {heroContent.cta}
              </RoundLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
