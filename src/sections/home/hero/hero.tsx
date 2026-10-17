import { ResponsiveImage } from '@/components/media/responsive-image';
import { heroSlides } from './hero.slides';
import { heroContent } from './hero.content';
import { contact } from '@/config/contact';
import { InstagramIcon } from '@/components/ui/social-icons';
import { HeroEntrance } from './hero-entrance';
import './hero.css';
function EntranceText({ text }: { text: string }) {
  let offset = 0;
  const words = text.split(' ').map((word) => ({
    id: offset++,
    letters: Array.from(word).map((letter) => ({ letter, id: offset++ })),
  }));
  return words.map(({ id, letters }) => (
    <span key={id} aria-hidden="true">
      <span className="hero-entrance-word">
        {letters.map(({ letter, id: letterId }) => (
          <span className="hero-letter-mask" key={letterId}>
            <span className="hero-letter">{letter}</span>
          </span>
        ))}
      </span>{' '}
    </span>
  ));
}
export function Hero() {
  return (
    <section
      className="hero tw:relative tw:overflow-hidden"
      aria-labelledby="hero-title"
    >
      <HeroEntrance />
      <div className="hero-background" aria-hidden="true">
        <ResponsiveImage {...heroSlides[0].images} alt="" eager sizes="100vw" />
      </div>
      <h1
        id="hero-title"
        className="hero-wordmark"
        aria-label="Higienização de estofados em Joinville e região"
      >
        <EntranceText text="Higienização" />
      </h1>
      <div className="hero-content tw:relative tw:flex">
        <h2 aria-label={heroContent.title.join(' ')}>
          <EntranceText text={heroContent.title.join(' ')} />
        </h2>
        <p className="hero-description">
          <span className="tw:sr-only">{heroContent.description}</span>
          <EntranceText text={heroContent.description} />
        </p>
      </div>
      <div className="hero-bottom tw:relative tw:flex">
        <div className="hero-social">
          <span>Siga-nos</span>
          <i aria-hidden="true" />
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram — abrir em nova aba"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="hero-stat">
          <span className="hero-water-symbol" aria-hidden="true">
            <svg
              viewBox="0 0 48 64"
              width="48"
              height="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
            >
              <title>Gota de água</title>
              <path d="M24 4C20 12 5 29 5 40a19 19 0 0 0 38 0C43 29 28 12 24 4Z" />
              <path d="M13 40a11 11 0 0 0 11 11" />
            </svg>
          </span>
          <div>
            <strong>Cuidado profissional</strong>
            <p>Higienização e proteção</p>
            <small>Sofás e outros estofados</small>
          </div>
        </div>
      </div>
    </section>
  );
}
