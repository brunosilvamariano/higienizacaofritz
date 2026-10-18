'use client';

import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { HoverLabel } from '@/components/ui/hover-label';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { ServiceVideo } from './service-video';
import { servicesContent } from './services.content';
import { serviceVideoPosters } from './services.videos';
import './services-projects.css';

const serviceIcons = {
  estofados: 'sofa',
  colchoes: 'bed-flat',
  tapetes: 'rug',
  impermeabilizacao: 'shield-droplet',
} as const;

function getTrackTravel(row: HTMLElement, viewport: HTMLElement) {
  return Math.max(
    0,
    row.getBoundingClientRect().width - viewport.getBoundingClientRect().width,
  );
}

export function ServicesProjects() {
  const runway = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const seek = useRef<((progress: number) => void) | null>(null);
  const reduced = useReducedMotion();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const viewport = frame.current;
    const row = track.current;
    const content = sticky.current;
    if (!viewport || !row || !content) return;
    const media = row.querySelector<HTMLElement>('.service-project-media');
    const heading = content.querySelector<HTMLElement>(
      '.service-projects-heading',
    );
    if (!media || !heading) return;
    let disposed = false;
    let measurement = 0;
    let layoutWidth = window.innerWidth;
    let layoutHeight = window.innerHeight;
    const measure = () => {
      if (disposed) return;
      if (window.innerWidth !== layoutWidth || window.innerWidth >= 768) {
        layoutWidth = window.innerWidth;
        layoutHeight = window.innerHeight;
      }
      runway.current?.style.setProperty(
        '--service-viewport-height',
        `${layoutHeight}px`,
      );
      // Budget the video after measuring real text wrapping, rather than
      // disabling the reference animation when the typography needs more room.
      const copyHeight =
        content.scrollHeight -
        media.getBoundingClientRect().height -
        Number.parseFloat(getComputedStyle(heading).marginBottom) +
        60;
      const preferredMediaHeight = Math.floor(layoutHeight - 42 - copyHeight);
      const gapReduction = Math.min(
        32,
        Math.max(0, 320 - preferredMediaHeight),
      );
      const headingGap = `${60 - gapReduction}px`;
      if (
        content.style.getPropertyValue('--service-heading-gap') !== headingGap
      )
        content.style.setProperty('--service-heading-gap', headingGap);
      const availableMediaHeight = preferredMediaHeight + gapReduction;
      const fits = availableMediaHeight >= 320;
      const mediaLimit = fits ? `${availableMediaHeight}px` : '9999px';
      if (
        content.style.getPropertyValue('--service-media-limit') !== mediaLimit
      )
        content.style.setProperty('--service-media-limit', mediaLimit);
      runway.current?.style.setProperty(
        '--service-content-height',
        `${content.offsetHeight}px`,
      );
      runway.current?.style.setProperty(
        '--service-mobile-travel',
        `${Math.max(420, getTrackTravel(row, viewport) * 0.65)}px`,
      );
      setPinned(!reduced && fits && row.scrollWidth > viewport.clientWidth + 1);
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(measurement);
      measurement = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(viewport);
    observer.observe(content);
    observer.observe(row);
    window.addEventListener('resize', scheduleMeasure);
    void document.fonts.ready.then(scheduleMeasure);
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(measurement);
      observer.disconnect();
      window.removeEventListener('resize', scheduleMeasure);
      runway.current?.style.removeProperty('--service-viewport-height');
      runway.current?.style.removeProperty('--service-content-height');
      runway.current?.style.removeProperty('--service-mobile-travel');
      content.style.removeProperty('--service-media-limit');
      content.style.removeProperty('--service-heading-gap');
    };
  }, [reduced]);

  useEffect(() => {
    const region = runway.current;
    const row = track.current;
    const viewport = frame.current;
    if (!region || !row || !viewport || !pinned) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    if (frame.current) frame.current.scrollLeft = 0;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia(region);
        media.add(
          { mobile: '(width < 768px)', desktop: '(width >= 768px)' },
          (context) => {
            const mobile = Boolean(context.conditions?.mobile);
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: region,
                start: mobile ? 'clamp(top 20px)' : 'clamp(top bottom)',
                end: mobile
                  ? () =>
                      `clamp(bottom ${(sticky.current?.offsetHeight ?? 0) + 20}px)`
                  : 'clamp(bottom top)',
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
            timeline.to({}, { duration: 1 }, 0);
            timeline.fromTo(
              row,
              { x: 0, xPercent: 0 },
              {
                x: () => -getTrackTravel(row, viewport),
                duration: mobile ? 0.88 : 0.25,
                ease: 'none',
              },
              mobile ? 0.06 : 0.35,
            );
            seek.current = (value) => timeline.progress(value);
          },
        );
        cleanup = () => {
          seek.current = null;
          media.revert();
        };
        ScrollTrigger.refresh();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [pinned]);

  function revealFocusedCard(event: FocusEvent<HTMLElement>) {
    if (!pinned || !runway.current || !frame.current || !track.current) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>(
      '.service-project-card',
    );
    if (!card) return;
    frame.current.scrollLeft = 0;
    const bounds = card.getBoundingClientRect();
    const viewport = frame.current.getBoundingClientRect();
    if (bounds.left >= viewport.left - 2 && bounds.right <= viewport.right + 2)
      return;
    const distance = getTrackTravel(track.current, frame.current);
    if (!distance) return;
    const travel = Math.min(distance, card.offsetLeft);
    const mobile = window.innerWidth < 768;
    const progress = mobile
      ? 0.06 + (0.88 * travel) / distance
      : 0.35 + (0.25 * travel) / distance;
    const top = runway.current.getBoundingClientRect().top + window.scrollY;
    const scrollTop = mobile
      ? top -
        20 +
        progress *
          (runway.current.offsetHeight - (sticky.current?.offsetHeight ?? 0))
      : top -
        window.innerHeight +
        progress * (runway.current.offsetHeight + window.innerHeight);
    window.scrollTo({
      // Enter the final hold fully, even when browser scroll coordinates round.
      top: travel === distance ? Math.ceil(scrollTop) : scrollTop,
      behavior: 'instant',
    });
    seek.current?.(progress);
  }

  return (
    <section
      id="servicos"
      className="services-projects"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <SectionEyebrow className="service-projects-tag section">
        Higienização e proteção
      </SectionEyebrow>
      <div
        ref={runway}
        className="service-projects-runway"
        data-pinned={pinned}
      >
        <div ref={sticky} className="service-projects-sticky">
          <div className="service-projects-content section">
            <div className="service-projects-heading">
              <TitleReveal id="services-title" text={servicesContent.title} />
              <p>{servicesContent.introduction}</p>
            </div>
            <section
              ref={frame}
              className="service-projects-frame"
              aria-label="Serviços de higienização e impermeabilização"
              onFocusCapture={revealFocusedCard}
              onScroll={() => {
                if (pinned && frame.current && frame.current.scrollLeft !== 0)
                  frame.current.scrollLeft = 0;
              }}
            >
              <div ref={track} className="service-projects-track tw:flex">
                {servicesContent.items.map((item) => (
                  <article className="service-project-card" key={item.id}>
                    <div className="service-project-media">
                      <ServiceVideo
                        id={item.id}
                        title={item.title}
                        poster={serviceVideoPosters[item.id].src}
                      />
                      <div
                        className="service-project-badge-pocket"
                        aria-hidden="true"
                      >
                        <span className="service-project-badge tw:flex tw:items-center tw:justify-center">
                          <FritzIcon name={serviceIcons[item.id]} />
                        </span>
                      </div>
                      <div className="service-project-copy">
                        <h3>{item.cardTitle}</h3>
                        <p className="service-project-description">
                          {item.cardText}
                        </p>
                      </div>
                      <div className="service-project-action-pocket">
                        <a
                          className="service-project-contact pill-link"
                          href={whatsappUrl(item.title.toLowerCase())}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Consultar ${item.title.toLowerCase()} pelo WhatsApp — abrir em nova aba`}
                          data-track-contact={`servicos ${item.id}`}
                        >
                          <HoverLabel variant="primary">
                            Pedir orçamento
                          </HoverLabel>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
