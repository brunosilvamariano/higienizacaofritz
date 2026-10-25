import Image from 'next/image';
import bannerImage from '@/assets/images/pages/home/services/video-covers/estofados.jpg';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { RoundLink } from '@/components/ui/round-link';
import { whatsappUrl } from '@/config/contact';
import { HeroEntrance } from '@/sections/home/hero/hero-entrance';
import '@/sections/home/hero/hero.css';

export function ServicesIntroduction() {
  return (
    <section
      className="services-introduction"
      aria-labelledby="services-page-title"
    >
      <div className="services-introduction-banner hero tw:relative">
        <HeroEntrance />
        <nav className="services-breadcrumb" aria-label="Caminho de navegação">
          <a href="/">Início</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Serviços</span>
        </nav>
        <div className="hero-scene tw:absolute tw:inset-0" aria-hidden="true">
          <div className="hero-wordmark">Serviços</div>
          <div className="hero-portrait">
            <Image
              className="services-introduction-image"
              src={bannerImage}
              alt=""
              fill
              sizes="100vw"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        <div className="services-introduction-grid hero-content tw:relative tw:grid">
          <div>
            <SectionEyebrow>Higienização e proteção</SectionEyebrow>
            <h1 id="services-page-title">
              <span className="hero-title-line">Um cuidado para</span>
              <span className="hero-title-line">cada tecido.</span>
            </h1>
          </div>
          <div className="services-introduction-copy">
            <p className="hero-description">
              Conheça os serviços do Fritz para estofados, colchões e tapetes.
              Do orçamento aos cuidados após o atendimento, tudo começa com uma
              conversa.
            </p>
            <div className="hero-action-mask">
              <div className="hero-action">
                <RoundLink
                  href={whatsappUrl()}
                  icon="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar os serviços do Fritz pelo WhatsApp — abrir em nova aba"
                  data-track-contact="servicos abertura"
                >
                  Consultar atendimento
                </RoundLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
