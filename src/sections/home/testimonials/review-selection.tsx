'use client';

import Image from 'next/image';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { TitleReveal } from '@/animations/title-reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { GoogleIcon, GoogleWord } from '@/components/ui/social-icons';
import { RoundLink } from '@/components/ui/round-link';
import { googleReviews } from '@/content/google-reviews';
import './review-selection.css';

type Review = (typeof googleReviews.items)[number];
const rows = [0, 5, 10].map((start) =>
  googleReviews.items.slice(start, start + 5),
);

function QuoteMark() {
  return (
    <svg
      className="review-dialog-quote"
      viewBox="0 0 48 36"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 36V20C0 8 6 2 18 0v6C11 8 8 12 8 18h10v18H0Zm28 0V20C28 8 34 2 46 0v6c-7 2-10 6-10 12h10v18H28Z" />
    </svg>
  );
}

export function ReviewSelection() {
  const section = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [selected, setSelected] = useState<Review | null>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    let intersects = false;
    const update = () => setVisible(intersects && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersects = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (!selected || !element) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.dataset.state = 'opening';
    element.showModal();
    return () => {
      if (closingTimer.current) clearTimeout(closingTimer.current);
      document.body.style.overflow = overflow;
      if (element.open) element.close();
    };
  }, [selected]);

  function closeReview() {
    const element = dialog.current;
    if (!element?.open || element.dataset.state === 'closing') return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.close();
      return;
    }
    element.dataset.state = 'closing';
    closingTimer.current = setTimeout(() => element.close(), 240);
  }

  return (
    <section
      ref={section}
      id="avaliacoes"
      className="review-selection"
      aria-labelledby="review-selection-title"
      tabIndex={-1}
    >
      <div className="review-selection-heading">
        <SectionEyebrow align="center">Avaliações de clientes</SectionEyebrow>
        <TitleReveal
          id="review-selection-title"
          text="Quem recebeu esse cuidado conta."
          accent="conta."
          leadAccent="cuidado"
        />
        <p>
          Experiências de quem já chamou o Fritz, publicadas no <GoogleWord />.
        </p>
      </div>
      <div
        className="review-ribbons"
        data-running={visible && !paused && !selected}
      >
        {rows.map((reviews, row) => (
          <div className="review-ribbon-window" key={reviews[0].name}>
            <div
              className="review-ribbon-track"
              style={
                {
                  '--review-duration': `${[56, 64, 60][row]}s`,
                } as CSSProperties
              }
            >
              {[0, 1].map((copy) => (
                <div
                  className="review-ribbon-group tw:flex tw:items-center"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {reviews.map((review) => (
                    <button
                      type="button"
                      className="review-capsule tw:flex tw:items-center"
                      key={review.name}
                      tabIndex={copy === 1 ? -1 : 0}
                      aria-label={`Ler avaliação de ${review.name}`}
                      aria-haspopup="dialog"
                      aria-controls="fritz-review-dialog"
                      onPointerDown={(event) => {
                        if (copy === 1) event.preventDefault();
                      }}
                      onClick={() => setSelected(review)}
                    >
                      <Image src={review.image} alt="" width={56} height={56} />
                      <span className="review-capsule-copy">
                        <span className="review-capsule-name">
                          {review.name}
                        </span>
                        <span className="review-capsule-source">
                          Avaliação no <GoogleWord />
                        </span>
                      </span>
                      <svg
                        className="review-capsule-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        aria-hidden="true"
                      >
                        <path d="m8 16 8-8M8 8h8v8" />
                      </svg>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="review-selection-footer tw:flex tw:items-center tw:justify-between">
        <div className="review-selection-hint tw:flex tw:items-center">
          <button
            type="button"
            className="review-motion-toggle tw:grid tw:place-items-center"
            aria-label={
              paused
                ? 'Retomar movimento das avaliações'
                : 'Pausar movimento das avaliações'
            }
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {paused ? (
                <path d="m9 5 10 7-10 7V5Z" />
              ) : (
                <path d="M9 5v14M15 5v14" />
              )}
            </svg>
          </button>
          <p>Escolha um cliente para ler o relato.</p>
        </div>
        <RoundLink
          className="concise-secondary-link"
          icon="google"
          href={googleReviews.readReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver mais avaliações do Fritz no Google — abrir em nova aba"
        >
          Ver mais avaliações
        </RoundLink>
      </div>
      <dialog
        ref={dialog}
        id="fritz-review-dialog"
        className="review-dialog"
        aria-labelledby="fritz-review-author"
        aria-describedby="fritz-review-text"
        onCancel={(event) => {
          event.preventDefault();
          closeReview();
        }}
        onClose={() => setSelected(null)}
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) closeReview();
        }}
      >
        {selected && (
          <div className="review-dialog-inner">
            <button
              className="review-dialog-close tw:grid tw:place-items-center"
              type="button"
              onClick={closeReview}
              aria-label="Fechar avaliação"
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
            <div className="review-dialog-top tw:flex tw:items-center tw:justify-between">
              <span
                className="review-selection-stars"
                role="img"
                aria-label="5 de 5 estrelas"
              >
                ★★★★★
              </span>
              <span className="review-google-badge tw:flex tw:items-center">
                <GoogleIcon />
                <GoogleWord />
              </span>
            </div>
            <QuoteMark />
            <blockquote id="fritz-review-text">{selected.text}</blockquote>
            <div className="review-dialog-author tw:flex tw:items-center">
              <Image src={selected.image} alt="" width={52} height={52} />
              <div>
                <h3 id="fritz-review-author">{selected.name}</h3>
                <p>
                  Trecho de avaliação no <GoogleWord />
                </p>
              </div>
            </div>
            <a
              className="review-dialog-source tw:flex tw:items-center tw:justify-between"
              href={selected.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ler no <GoogleWord />
              <span className="tw:sr-only">
                {' '}
                — abrir perfil do cliente em nova aba
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m6 18 12-12M6 6h12v12" />
              </svg>
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
