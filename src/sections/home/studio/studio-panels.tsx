'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { studioContent } from './studio.content';
import { studioImages } from './studio.images';
import { WhatsAppIcon } from '@/components/ui/social-icons';
import { whatsappUrl } from '@/config/contact';
export function StudioPanels() {
  const track = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const [limits, setLimits] = useState({ start: 0, end: 0, top: 0 });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [limits.start, limits.end]);
  useEffect(() => {
    const element = strip.current,
      region = track.current;
    if (!element || !region) return;
    const measure = () => {
      const compact = window.innerWidth <= 991;
      setLimits({
        start: compact ? element.scrollWidth * 0.07 : window.innerWidth * 0.5,
        // Align the last card inside the viewport with the section's 5% inset.
        end: Math.min(0, region.clientWidth * 0.95 - element.scrollWidth),
        top: Math.min(
          compact ? window.innerHeight * 0.18 : 0,
          window.innerHeight - element.offsetHeight,
        ),
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(region);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={track} className="studio-track" data-animated={!reduced}>
      <div
        className="studio-sticky"
        style={{ top: reduced ? undefined : limits.top }}
      >
        <motion.div
          ref={strip}
          className="studio-strip tw:flex"
          style={{ x: reduced ? 0 : x }}
        >
          {studioContent.items.map((item) => (
            <article
              className="studio-card"
              key={item.id}
              aria-label={`${item.id} — ${item.title}`}
            >
              <div className="studio-card-heading">
                <span
                  className="studio-card-tag"
                  style={{
                    background: `var(--home-timeline-color, ${item.color})`,
                  }}
                >
                  {item.title}
                </span>
                <span className="studio-card-number" aria-hidden="true">
                  {item.id}
                </span>
              </div>
              <p>{item.text}</p>
              <div className="studio-card-image">
                {item.image ? (
                  <ResponsiveImage
                    eager
                    priority="auto"
                    unoptimized
                    {...studioImages[item.image]}
                    sizes="(min-width:992px) 480px,300px"
                  />
                ) : (
                  <a
                    className="studio-conclusion"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-contact="orcamento diferenciais"
                    aria-label="Solicitar orçamento à Fritz pelo WhatsApp"
                  >
                    <span className="studio-conclusion-caption">
                      <WhatsAppIcon /> Pelo WhatsApp
                    </span>
                    <span className="studio-conclusion-action">
                      <span className="studio-conclusion-title">
                        Solicitar
                        <br />
                        orçamento
                      </span>
                      <span
                        className="studio-conclusion-arrow"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M5 12h14m-6-6 6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
