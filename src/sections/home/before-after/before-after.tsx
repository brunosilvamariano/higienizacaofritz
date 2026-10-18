'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { HoverLabel } from '@/components/ui/hover-label';
import { TitleReveal } from '@/animations/title-reveal';
import { whatsappUrl } from '@/config/contact';
import { comparisonCases } from './before-after.content';
import './before-after.css';

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = (index + 1) % comparisonCases.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (index + comparisonCases.length - 1) % comparisonCases.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = comparisonCases.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <section
      id="antes-e-depois"
      className="before-after section"
      aria-labelledby="comparison-title"
      tabIndex={-1}
    >
      <div className="before-after-heading">
        <div>
          <SectionEyebrow>Antes e depois</SectionEyebrow>
          <TitleReveal
            id="comparison-title"
            text="O cuidado em cada detalhe."
          />
        </div>
        <p>
          <span className="before-after-desktop-hint">
            Selecione um card para ver os detalhes da comparação.
          </span>
          <span className="before-after-mobile-hint">
            Veja o antes e depois em cada comparação.
          </span>
        </p>
      </div>
      <div className="before-after-cards tw:flex">
        {comparisonCases.map((item, index) => (
          <article
            className="before-after-card"
            data-active={active === index}
            key={item.id}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setActive(index);
            }}
            onFocusCapture={() => setActive(index)}
          >
            <Image
              className="before-after-photo"
              src={item.image}
              alt={`Comparativo ilustrativo de ${item.title.toLowerCase()}: antes à esquerda e depois à direita.`}
              fill
              sizes="(max-width: 767px) 100vw, (min-width: 1600px) 640px, 44vw"
            />
            <span className="before-after-divider" aria-hidden="true" />
            <div
              className="before-after-labels tw:flex tw:items-center tw:justify-between"
              aria-hidden="true"
            >
              <span>Antes</span>
              <span>Depois</span>
            </div>
            <div className="before-after-copy">
              <h3>{item.title}</h3>
              <div className="before-after-detail">
                <p>{item.detail}</p>
              </div>
            </div>
            <button
              type="button"
              className="before-after-trigger"
              ref={(element) => {
                buttons.current[index] = element;
              }}
              aria-label={`Ampliar comparativo de ${item.title.toLowerCase()}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              onKeyDown={(event) => navigate(event, index)}
            />
          </article>
        ))}
      </div>
      <div className="before-after-footer tw:flex tw:items-center tw:justify-between">
        <p>Comparativos ilustrativos de higienização.</p>
        <a
          href={whatsappUrl('higienização de estofados')}
          className="pill-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar atendimento pelo WhatsApp — abrir em nova aba"
          data-track-contact="antes e depois"
        >
          <HoverLabel variant="primary">Consultar atendimento</HoverLabel>
        </a>
      </div>
      <svg
        className="before-after-wave"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="before-after-wave-pattern"
            width="60"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 8Q15 -1 30 8T60 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill="url(#before-after-wave-pattern)" />
      </svg>
    </section>
  );
}
