'use client';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { TitleReveal } from '@/animations/title-reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { useState, useEffect } from 'react';
import { processSteps } from './process.content';
import { ProcessBanner } from './process-banner';
import './process.css';

const stepIcons = ['photo', 'calendar-check', 'spray', 'shield-check'] as const;

function StepArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg
      className={`process-step-arrow process-step-arrow-${vertical ? 'vertical' : 'horizontal'}`}
      viewBox={vertical ? '0 0 40 120' : '0 0 120 40'}
      preserveAspectRatio={vertical ? 'none' : 'xMidYMid meet'}
      fill="none"
      aria-hidden="true"
    >
      <g transform={vertical ? 'translate(40 0) rotate(90)' : undefined}>
        <circle cx="6" cy="28" r="4" />
        <path d="M12 26C40 5 78 5 109 23" strokeDasharray="4 5" />
        <path d="m101 14 9 10-13 2" />
      </g>
    </svg>
  );
}

export function Process() {
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(
    () => new Set(processSteps.map((step) => step.id)),
  );
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width:991px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
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
      className="process-steps section"
      aria-labelledby="process-title"
      tabIndex={-1}
    >
      <div className="process-steps-heading">
        <SectionEyebrow align="center" className="process-steps-eyebrow">
          Como funciona
        </SectionEyebrow>
        <TitleReveal id="process-title" text="Do orçamento ao cuidado final" />
        <p className="process-steps-intro" data-text-anim="">
          Saiba como solicitar higienização ou impermeabilização de estofados
          com a Fritz.
        </p>
      </div>
      <ol className="process-steps-list tw:grid">
        {processSteps.map((step, index) => {
          const open = compact || expanded.has(step.id);
          return (
            <li key={step.id} className="process-step" data-open={open}>
              <div
                className="process-step-icon tw:flex tw:items-center tw:justify-center"
                aria-hidden="true"
              >
                <FritzIcon name={stepIcons[index]} />
              </div>
              {index < processSteps.length - 1 && (
                <>
                  <StepArrow />
                  <StepArrow vertical />
                </>
              )}
              <div className="process-step-copy">
                <div className="process-step-label tw:flex tw:items-center tw:justify-center">
                  <span>Etapa {String(index + 1).padStart(2, '0')}</span>
                  <button
                    type="button"
                    className="process-step-toggle tw:flex tw:items-center tw:justify-center"
                    aria-expanded={open}
                    aria-controls={`process-${step.id}`}
                    aria-label={`${open ? 'Fechar' : 'Abrir'} etapa ${index + 1}: ${step.title}`}
                    onClick={() => toggle(step.id)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 9 7 7 7-7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </button>
                </div>
                <h3>{step.title}</h3>
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
      <ProcessBanner />
    </section>
  );
}
