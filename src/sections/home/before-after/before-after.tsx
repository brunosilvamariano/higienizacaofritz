'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { RoundLink } from '@/components/ui/round-link';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { TitleReveal } from '@/animations/title-reveal';
import { whatsappUrl } from '@/config/contact';
import { comparisonCases } from './before-after.content';
import './before-after.css';

function ComparisonAction({
  item,
}: {
  item: (typeof comparisonCases)[number];
}) {
  return (
    <div className="comparison-project-action">
      <RoundLink
        className="comparison-project-contact"
        icon="whatsapp"
        href={whatsappUrl(item.title.toLowerCase())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Solicitar orçamento para ${item.title.toLowerCase()} pelo WhatsApp — abrir em nova aba`}
        data-track-contact={`antes e depois ${item.id}`}
      >
        Pedir orçamento
      </RoundLink>
    </div>
  );
}

export function BeforeAfter({ compact = false }: { compact?: boolean }) {
  const preview = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = comparisonCases[activeIndex];
  function movePreview(direction: number) {
    setActiveIndex(
      (index) =>
        (index + direction + comparisonCases.length) % comparisonCases.length,
    );
  }
  return (
    <section
      id="antes-e-depois"
      className={`before-after${compact ? ' before-after-four' : ''}`}
      aria-labelledby="comparison-title"
      tabIndex={-1}
    >
      <div className="before-after-heading">
        <div>
          <SectionEyebrow>Antes e depois</SectionEyebrow>
          <TitleReveal
            id="comparison-title"
            text="O cuidado em cada detalhe."
            accent="cada detalhe."
          />
        </div>
        <p>
          {compact
            ? 'Cada tecido tem seus detalhes. Explore os comparativos e amplie as imagens para observar de perto.'
            : 'Observe os detalhes de cada superfície.'}
        </p>
      </div>
      <div className="comparison-collection">
        {comparisonCases.map((item, index) => (
          <article
            className="comparison-project"
            key={item.id}
            aria-labelledby={`comparison-${item.id}`}
          >
            <div className="comparison-project-heading">
              <h3 id={`comparison-${item.id}`}>{item.title}</h3>
              <span>
                {compact ? String(index + 1).padStart(2, '0') : 'Higienização'}
              </span>
            </div>
            <div className="comparison-project-photo">
              {compact ? (
                <button
                  type="button"
                  className="comparison-preview-trigger"
                  aria-label={`Ampliar comparativo de ${item.title.toLowerCase()}`}
                  aria-haspopup="dialog"
                  onClick={() => {
                    setActiveIndex(index);
                    preview.current?.showModal();
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`Comparativo ilustrativo de ${item.title.toLowerCase()}: antes à esquerda e depois à direita.`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1100px) 45vw, 24vw"
                  />
                  <span className="comparison-preview-hint" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M5 9V5h4m6 0h4v4m0 6v4h-4m-6 0H5v-4" />
                    </svg>
                    <span className="comparison-preview-hint-label">
                      Ampliar
                    </span>
                  </span>
                </button>
              ) : (
                <Image
                  src={item.image}
                  alt={
                    'Comparativo ilustrativo de ' +
                    item.title.toLowerCase() +
                    ': antes à esquerda e depois à direita.'
                  }
                  sizes={
                    compact
                      ? '(max-width: 767px) 90vw, (max-width: 1100px) 45vw, 24vw'
                      : '(max-width: 767px) 90vw, (min-width: 1600px) 800px, 52vw'
                  }
                />
              )}
              <div className="comparison-project-labels" aria-hidden="true">
                <span>Antes</span>
                <span>Depois</span>
              </div>
              {!compact && <ComparisonAction item={item} />}
            </div>
            <p className="comparison-project-detail">{item.detail}</p>
            {compact && <ComparisonAction item={item} />}
          </article>
        ))}
      </div>
      {compact && (
        <dialog
          className="comparison-dialog"
          ref={preview}
          aria-labelledby="comparison-preview-title"
          aria-describedby="comparison-preview-description"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) preview.current?.close();
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              movePreview(event.key === 'ArrowLeft' ? -1 : 1);
            }
          }}
        >
          <div className="comparison-dialog-inner">
            <header className="comparison-dialog-heading tw:flex tw:items-center tw:justify-between">
              <div>
                <p className="comparison-dialog-kicker">Antes e depois</p>
                <h3
                  className="comparison-dialog-title"
                  id="comparison-preview-title"
                >
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                className="comparison-dialog-close tw:grid tw:place-items-center"
                onClick={() => preview.current?.close()}
                aria-label="Fechar comparativo"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
              </button>
            </header>
            <Image
              className="comparison-dialog-image"
              src={active.image}
              alt={`Comparativo ilustrativo de ${active.title.toLowerCase()}: antes à esquerda e depois à direita.`}
              sizes="(max-width: 767px) 92vw, 1000px"
            />
            <div
              className="comparison-dialog-labels tw:flex tw:justify-between"
              aria-hidden="true"
            >
              <span>Antes</span>
              <span>Depois</span>
            </div>
            <div className="comparison-dialog-footer">
              <p
                className="comparison-dialog-description"
                id="comparison-preview-description"
              >
                {active.detail}
              </p>
              <div className="comparison-dialog-navigation tw:flex tw:items-center">
                <button
                  type="button"
                  onClick={() => movePreview(-1)}
                  aria-label="Comparativo anterior"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m14 6-6 6 6 6" />
                  </svg>
                </button>
                <span className="comparison-dialog-position" aria-live="polite">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(comparisonCases.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => movePreview(1)}
                  aria-label="Próximo comparativo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m10 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
      {!compact && (
        <p className="comparison-gallery-note">
          Comparativos ilustrativos de higienização.
        </p>
      )}
      <svg
        className="before-after-wave"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="before-after-wave-pattern"
            width="96"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0H96V16Q72 25 48 16T0 16Z"
              fill="var(--comparison-surface)"
            />
            <path
              d="M0 15Q24 6 48 15T96 15"
              fill="none"
              stroke="#fff"
              strokeWidth="1.2"
            />
            <path
              d="M0 16Q24 7 48 16T96 16"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="32" fill="url(#before-after-wave-pattern)" />
      </svg>
    </section>
  );
}
