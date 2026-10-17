'use client';

import { useState } from 'react';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { HoverLabel } from '@/components/ui/hover-label';
import { whatsappUrl } from '@/config/contact';
import { faqItems } from './faq.content';
import './faq.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  return (
    <section
      className="faq tw:grid section"
      id="duvidas"
      aria-labelledby="faq-title"
      tabIndex={-1}
    >
      <div className="faq-introduction">
        <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
        <h2 id="faq-title">
          Dúvidas antes de <span>agendar?</span>
        </h2>
        <p>
          Do orçamento aos cuidados após o atendimento, veja o que você precisa
          saber.
        </p>
        <a
          className="pill-link"
          href={whatsappUrl('uma dúvida sobre os serviços da Fritz')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tirar uma dúvida com a Fritz pelo WhatsApp — abrir em nova aba"
        >
          <HoverLabel variant="primary">Tirar uma dúvida</HoverLabel>
        </a>
      </div>
      <div className="faq-list tw:min-w-0">
        {faqItems.map((item, index) => {
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
                >
                  <span className="faq-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.question}</span>
                  <span className="faq-mark tw:relative" aria-hidden="true">
                    <i />
                    <i />
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
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
