'use client';

import { useEffect, useRef } from 'react';

import { TitleReveal } from '@/animations/title-reveal';
import { RoundLink } from '@/components/ui/round-link';
import { FritzIcon, type FritzIconName } from '@/components/ui/fritz-icon';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import Image from 'next/image';
import cleaningImage from '@/assets/images/shared/services/sofas/desktop.webp';
import { servicesContent } from './services.content';
import './services-projects.css';

function ServiceMarker({ name }: { name: FritzIconName }) {
  return (
    <span className="service-project-marker" aria-hidden="true">
      <FritzIcon name={name} />
    </span>
  );
}

function ServiceStepIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {index === 0 ? (
        <>
          <circle cx="10.5" cy="10.5" r="5.5" />
          <path d="m15 15 5 5" />
        </>
      ) : index === 1 ? (
        <>
          <path d="M12 3S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />
          <path d="M9 14a3 3 0 0 0 3 3" />
        </>
      ) : (
        <path d="m11 16 7-12M4 16h11l3 5H2l2-5ZM16 7l4 2" />
      )}
    </svg>
  );
}

function ServiceContact({
  context,
  tracking,
}: {
  context: string;
  tracking: string;
}) {
  return (
    <RoundLink
      className="service-project-contact"
      icon="whatsapp"
      href={whatsappUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Consultar ${context} pelo WhatsApp — abrir em nova aba`}
      data-track-contact={tracking}
    >
      Consultar atendimento
    </RoundLink>
  );
}

export function ServicesProjects() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const track = section.current?.querySelector<HTMLElement>(
      '.service-projects-track',
    );
    if (!track) return;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>('.service-project-card'),
    );
    const query = matchMedia(
      '(max-width: 767px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)',
    );
    const progress = cards.map(() => 0);
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!query.matches) return;
      const trackBounds = track.getBoundingClientRect();
      const trackTop = trackBounds.top;
      const gap = Number.parseFloat(getComputedStyle(track).rowGap) || 0;
      const header =
        Number.parseFloat(
          getComputedStyle(track).getPropertyValue('--header-height'),
        ) || 76;
      const heights = cards.map((card) => card.offsetHeight);
      const lastPin = header + 12 + (cards.length - 1) * 12;
      const release = Math.max(
        0,
        lastPin - (trackBounds.bottom - heights[heights.length - 1]),
      );
      let nextOffset = 0;
      let moving = false;
      const targets = cards.map((_, index) => {
        nextOffset += heights[index] + gap;
        if (index === cards.length - 1) return 0;
        const pin = header + 12 + index * 12;
        const covered = Math.max(
          0,
          Math.min(
            1,
            (pin + heights[index] - trackTop - nextOffset) /
              Math.max(1, heights[index] - 12),
          ),
        );
        return covered * covered * (3 - 2 * covered);
      });
      cards.forEach((card, index) => {
        // Preserve the stepped tops when the shared sticky container releases.
        const pin = header + 12 + index * 12;
        const constrainedTop = Math.min(
          pin,
          trackBounds.bottom - heights[index],
        );
        const releaseOffset = Math.min(0, pin - release - constrainedTop);
        card.style.setProperty('--service-stack-release', `${releaseOffset}px`);
        const difference = targets[index] - progress[index];
        progress[index] =
          Math.abs(difference) < 0.0005
            ? targets[index]
            : progress[index] + difference * 0.18;
        if (Math.abs(difference) >= 0.0005) moving = true;
        card.style.setProperty(
          '--service-stack-progress',
          progress[index].toFixed(5),
        );
      });
      if (moving) frame = requestAnimationFrame(update);
    };
    const schedule = () => {
      if (!frame && query.matches) frame = requestAnimationFrame(update);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      cards.forEach((card, index) => {
        progress[index] = 0;
        card.style.removeProperty('--service-stack-progress');
        card.style.removeProperty('--service-stack-release');
      });
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(track);
    cards.forEach((card) => {
      observer.observe(card);
    });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    query.addEventListener('change', reset);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      query.removeEventListener('change', reset);
      cards.forEach((card) => {
        card.style.removeProperty('--service-stack-progress');
        card.style.removeProperty('--service-stack-release');
      });
    };
  }, []);
  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>('.service-project-card'),
    );
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      cards.forEach((card) => {
        delete card.dataset.reveal;
      });
      if (reduced.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).dataset.reveal = 'done';
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.15 },
      );
      cards.forEach((card, index) => {
        card.dataset.reveal = 'pending';
        card.style.setProperty('--service-reveal-delay', `${index * 120}ms`);
        observer?.observe(card);
      });
    };
    setup();
    reduced.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      reduced.removeEventListener('change', setup);
      cards.forEach((card) => {
        delete card.dataset.reveal;
        card.style.removeProperty('--service-reveal-delay');
      });
    };
  }, []);
  return (
    <section
      ref={section}
      id="servicos"
      className="services-projects"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <SectionEyebrow className="service-projects-tag section">
        Higienização e proteção
      </SectionEyebrow>
      <div className="service-projects-runway">
        <div className="service-projects-sticky">
          <div className="service-projects-content section">
            <div className="service-projects-heading">
              <TitleReveal
                id="services-title"
                text={servicesContent.title}
                accent="Fritz"
                leadAccent="Serviços"
              />
              <p>{servicesContent.introduction}</p>
            </div>
            <section
              className="service-projects-frame"
              aria-label="Serviços de higienização e impermeabilização"
            >
              <div className="service-projects-track tw:grid">
                <article className="service-project-card service-project-process">
                  <header className="service-project-card-heading tw:flex tw:justify-between">
                    <h3>
                      Serviços para
                      <br />
                      cada tecido.
                    </h3>
                    <ServiceMarker name="sofa" />
                  </header>
                  <ol className="service-project-steps">
                    {[
                      {
                        title: 'Estofados',
                        text: 'Sofás, poltronas e cadeiras',
                      },
                      {
                        title: 'Colchões',
                        text: 'Limpeza e cuidados de secagem',
                      },
                      { title: 'Tapetes', text: 'Por material e medidas' },
                    ].map((step, index) => (
                      <li key={step.title}>
                        <span className="service-project-step-icon">
                          <ServiceStepIcon index={index} />
                        </span>
                        <div>
                          <span className="service-project-step-title">
                            <small>{String(index + 1).padStart(2, '0')}</small>
                            <strong>{step.title}</strong>
                          </span>
                          <p>{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <span className="service-project-reveal" aria-hidden="true" />
                </article>
                <article className="service-project-card">
                  <header className="service-project-card-heading tw:flex tw:justify-between">
                    <h3>
                      Limpeza de
                      <br />
                      colchões.
                    </h3>
                    <ServiceMarker name="bed-flat" />
                  </header>
                  <div className="service-project-card-bottom">
                    <p className="service-project-description">
                      Limpeza de colchões com orientação sobre os cuidados de
                      secagem após o serviço.
                    </p>
                    <ServiceContact
                      context="higienização de colchões"
                      tracking="servicos colchoes"
                    />
                  </div>
                  <span className="service-project-reveal" aria-hidden="true" />
                </article>
                <figure className="service-project-card service-project-photo">
                  <div className="service-project-photo-media tw:absolute tw:inset-0">
                    <Image
                      src={cleaningImage}
                      alt="Extração durante a higienização de um sofá."
                      fill
                      sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 24vw"
                    />
                  </div>
                  <figcaption className="service-project-photo-copy">
                    <span className="service-project-photo-label">
                      Cuidado com o tecido
                    </span>
                    <h3>
                      Higienização
                      <br />
                      de estofados.
                    </h3>
                    <p>
                      Sofás, poltronas e cadeiras: limpeza do tecido para a sua
                      casa.
                    </p>
                  </figcaption>
                  <span className="service-project-reveal" aria-hidden="true" />
                </figure>
                <article className="service-project-card service-project-protection">
                  <header className="service-project-card-heading tw:flex tw:justify-between">
                    <h3>
                      Mais proteção
                      <br />
                      ao tecido.
                    </h3>
                    <ServiceMarker name="shield-droplet" />
                  </header>
                  <div className="service-project-card-bottom">
                    <p className="service-project-description">
                      Impermeabilização de estofados para proteção contra
                      líquidos, conforme o tecido.
                    </p>
                    <ServiceContact
                      context="impermeabilização de estofados"
                      tracking="servicos impermeabilizacao"
                    />
                  </div>
                  <span className="service-project-reveal" aria-hidden="true" />
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
