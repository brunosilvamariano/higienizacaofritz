'use client';

import { useState } from 'react';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { TitleReveal } from '@/animations/title-reveal';
import { serviceAreas } from '@/content/service-areas';
import { faqItems } from './faq.content';
import './faq.css';

export function Faq({ compact = false }: { compact?: boolean }) {
  const items = compact
    ? faqItems.filter((item) =>
        ['atendimento', 'tecido', 'impermeabilizacao', 'secagem'].includes(
          item.id,
        ),
      )
    : faqItems;
  const [openId, setOpenId] = useState<string | null>(items[0].id);

  return (
    <section
      className="faq section"
      id="duvidas"
      aria-labelledby="faq-title"
      tabIndex={-1}
    >
      <div className="faq-inner">
        <div className="faq-topline tw:flex tw:items-center tw:justify-center">
          <SectionEyebrow align="center">Perguntas frequentes</SectionEyebrow>
        </div>
        <div className="faq-introduction">
          <span className="faq-watermark" aria-hidden="true">
            Cuidado
          </span>
          <TitleReveal
            id="faq-title"
            text="Dúvidas antes de agendar?"
            accent="agendar?"
            leadAccent="Dúvidas"
          />
          <p>
            Do orçamento aos cuidados após o atendimento, veja o que você
            precisa saber.
          </p>
        </div>
        <div className="faq-list tw:min-w-0">
          {items.map((item, index) => {
            const expanded = openId === item.id;
            return (
              <div className="faq-item" key={item.id} data-open={expanded}>
                <h3>
                  <button
                    className="faq-trigger tw:grid tw:items-center tw:w-full tw:text-left"
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setOpenId(null);
                        return;
                      }
                      const nextIndex =
                        event.key === 'ArrowDown'
                          ? (index + 1) % items.length
                          : event.key === 'ArrowUp'
                            ? (index - 1 + items.length) % items.length
                            : event.key === 'Home'
                              ? 0
                              : event.key === 'End'
                                ? items.length - 1
                                : null;
                      if (nextIndex !== null) {
                        event.preventDefault();
                        document
                          .getElementById(`faq-trigger-${items[nextIndex].id}`)
                          ?.focus();
                      }
                    }}
                  >
                    <span className="faq-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="faq-question">{item.question}</span>
                    <span
                      className="faq-mark tw:grid tw:place-items-center"
                      aria-hidden="true"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-answer tw:grid"
                  id={`faq-answer-${item.id}`}
                  aria-hidden={!expanded}
                  inert={!expanded}
                >
                  <div className="faq-answer-clip tw:overflow-hidden">
                    <div className="faq-answer-content">
                      {item.id === 'atendimento' ? (
                        <>
                          <ul
                            className="faq-cities"
                            aria-label="Cidades atendidas"
                          >
                            {serviceAreas.map((city) => (
                              <li key={city.id}>{city.name}</li>
                            ))}
                          </ul>
                          <p className="faq-area-note">
                            <strong>Informe seu bairro</strong> para consultar a
                            disponibilidade de atendimento.
                          </p>
                        </>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
