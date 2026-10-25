'use client';

import Image from 'next/image';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import processImage from '@/assets/images/pages/home/services/video-covers/estofados.jpg';
import { TitleReveal } from '@/animations/title-reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { RoundLink } from '@/components/ui/round-link';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { whatsappUrl } from '@/config/contact';
import { processSteps } from './process.content';
import './process.css';

const stepIcons = ['photo', 'calendar-check', 'spray', 'shield-check'] as const;

export function Process() {
  const panel = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(
    () => new Set(processSteps.map((step) => step.id)),
  );
  useEffect(() => {
    const element = photo.current;
    if (!element) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches) {
        element.style.removeProperty('--process-parallax-y');
        return;
      }
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      const progress = Math.max(
        0,
        Math.min(1, (innerHeight - bounds.top) / (innerHeight + bounds.height)),
      );
      element.style.setProperty(
        '--process-parallax-y',
        `${((progress - 0.5) * 120).toFixed(2)}px`,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      element.style.removeProperty('--process-parallax-y');
    };
  }, []);
  useEffect(() => {
    const element = panel.current;
    if (!element) return;
    element.dataset.ready = 'true';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.revealed = 'true';
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      delete element.dataset.ready;
      delete element.dataset.revealed;
    };
  }, []);
  function toggle(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  return (
    <section
      id="processo"
      className="process-steps"
      aria-labelledby="process-title"
      tabIndex={-1}
    >
      <div className="process-steps-heading">
        <div>
          <SectionEyebrow className="process-steps-eyebrow">
            Como funciona
          </SectionEyebrow>
          <TitleReveal
            id="process-title"
            text="Do primeiro contato ao cuidado final."
            accent="cuidado final."
          />
        </div>
        <p className="process-steps-intro">
          Uma conversa para começar. Depois, o Fritz orienta você em cada etapa
          do atendimento.
        </p>
      </div>
      <figure className="process-journey-photo" ref={photo}>
        <div className="process-journey-photo-image">
          <Image
            src={processImage}
            alt="Extração durante o cuidado com o tecido de um sofá."
            fill
            sizes="100vw"
          />
        </div>
        <figcaption>
          <span>Em cada detalhe</span>
          <strong>O cuidado acontece aqui.</strong>
        </figcaption>
      </figure>
      <div className="process-journey" ref={panel}>
        <div className="process-journey-body">
          <ol className="process-steps-list tw:grid">
            {processSteps.map((step, index) => {
              const open = expanded.has(step.id);
              return (
                <li
                  key={step.id}
                  className="process-step"
                  data-open={open}
                  style={
                    {
                      '--process-delay': `${index * 120}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="process-step-number" aria-hidden="true">
                    <FritzIcon name={stepIcons[index]} />
                  </span>
                  <div className="process-step-copy">
                    <span className="process-step-label">
                      Etapa {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>
                      <button
                        type="button"
                        className="process-step-toggle"
                        aria-expanded={open}
                        aria-controls={`process-${step.id}`}
                        aria-label={`${open ? 'Recolher' : 'Expandir'} etapa ${index + 1}: ${step.title}`}
                        onClick={() => toggle(step.id)}
                      >
                        {step.title}
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="m7 10 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </h3>
                    <div
                      id={`process-${step.id}`}
                      className="process-step-description"
                      inert={!open}
                    >
                      <p>{step.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="process-journey-footer tw:flex tw:items-center tw:justify-between">
          <p>
            <span className="process-journey-dot" aria-hidden="true" />
            Comece enviando uma foto do seu estofado.
          </p>
          <RoundLink
            icon="whatsapp"
            className="process-journey-contact"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Começar orçamento com o Fritz pelo WhatsApp — abrir em nova aba"
            data-track-contact="processo orçamento"
          >
            Falar com o Fritz
          </RoundLink>
        </div>
      </div>
    </section>
  );
}
