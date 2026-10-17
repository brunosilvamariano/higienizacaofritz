'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HoverLabel } from '@/components/ui/hover-label';
import { whatsappUrl } from '@/config/contact';
import sofa from '@/assets/images/shared/services/sofas/desktop.webp';
import colchao from '@/assets/images/shared/services/colchoes/desktop.webp';
import tapete from '@/assets/images/shared/services/tapetes/desktop.webp';
import protecao from '@/assets/images/shared/services/impermeabilizacao/desktop.webp';
import './process-banner.css';

const cards = [
  { title: 'Estofados', image: sofa },
  { title: 'Colchões', image: colchao },
  { title: 'Tapetes', image: tapete },
  { title: 'Impermeabilização', image: protecao },
];

export function ProcessBanner() {
  const banner = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = banner.current;
    if (!element) return;
    let inView = false;
    const update = () => setActive(inView && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { rootMargin: '120px' },
    );
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <div
      ref={banner}
      className="process-banner"
      data-paused={!active || paused}
    >
      <div className="process-banner-copy">
        <h3 className="process-banner-title">
          O cuidado com seu estofado começa aqui.
        </h3>
        <a
          className="process-banner-cta pill-link"
          href={whatsappUrl('orçamento para cuidar do meu estofado')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp da Fritz — abrir em nova aba"
          data-track-contact="banner como funciona"
        >
          <HoverLabel variant="primary">Solicitar orçamento</HoverLabel>
        </a>
      </div>
      <div className="process-banner-gallery" aria-hidden="true">
        <div className="process-banner-columns tw:flex">
          {[0, 1, 2].map((lane) => (
            <div className="process-banner-lane" key={lane}>
              {[0, 1].map((copy) => (
                <div className="process-banner-group" key={copy}>
                  {cards.map((_, index) => {
                    const card = cards[(index + lane) % cards.length];
                    return (
                      <div className="process-banner-card" key={card.title}>
                        <div className="process-banner-photo">
                          <Image
                            src={card.image}
                            alt=""
                            sizes="220px"
                            quality={85}
                          />
                        </div>
                        <div className="process-banner-card-copy">
                          <span>{card.title}</span>
                          <small>Fritz · Cuidado em cada detalhe</small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="process-banner-pause tw:flex tw:items-center tw:justify-center"
        aria-label={
          paused ? 'Retomar animação dos cards' : 'Pausar animação dos cards'
        }
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {paused ? (
            <path d="m9 5 10 7-10 7V5Z" fill="currentColor" />
          ) : (
            <path d="M9 5v14M16 5v14" stroke="currentColor" strokeWidth="3" />
          )}
        </svg>
      </button>
    </div>
  );
}
