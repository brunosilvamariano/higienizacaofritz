'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import professional from '@/assets/images/pages/home/about-fritz/profissional.webp';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { HoverLabel } from '@/components/ui/hover-label';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { contact, whatsappUrl } from '@/config/contact';
import { googleReviews } from '@/content/google-reviews';
import { GoogleIcon, WhatsAppIcon } from '@/components/ui/social-icons';
import './about-fritz.css';

const aboutTitle =
  'Por trás de cada cuidado existe alguém que respeita a sua casa.';

export function AboutFritz() {
  const reduced = useReducedMotion();
  const region = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = region.current;
    if (!element || reduced) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.fromTo(
            '.about-fritz-word',
            { color: '#a2a9b1' },
            {
              color: (_index: number, target: HTMLElement) =>
                getComputedStyle(element)
                  .getPropertyValue(
                    target.dataset.accent === 'true' ? '--brand' : '--ink',
                  )
                  .trim(),
              stagger: 0.12,
              ease: 'none',
              scrollTrigger: {
                trigger: element.querySelector('.about-fritz-heading'),
                start: 'top 85%',
                end: 'bottom 40%',
                scrub: 0.5,
              },
            },
          );
          gsap.fromTo(
            '.about-fritz-photo',
            { y: 0, scale: 0.96 },
            {
              y: 0,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'center 55%',
                scrub: 0.65,
              },
            },
          );
        }, element);
        cleanup = () => context.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [reduced]);
  return (
    <section
      ref={region}
      id="sobre-a-fritz"
      className="about-fritz section"
      aria-labelledby="about-fritz-title"
      tabIndex={-1}
    >
      <div className="about-fritz-editorial">
        <div className="about-fritz-kicker">
          <SectionEyebrow align="center">Sobre o Fritz</SectionEyebrow>
        </div>
        <div className="about-fritz-heading">
          <h2 id="about-fritz-title" aria-label={aboutTitle}>
            {aboutTitle.split(' ').map((word) => (
              <span
                className="about-fritz-word"
                key={word}
                data-accent={word === 'sua' || word === 'casa.'}
                aria-hidden="true"
              >
                {word}{' '}
              </span>
            ))}
          </h2>
        </div>
        <aside className="about-fritz-note" aria-label="Atendimento Fritz">
          <div className="about-fritz-note-text">
            <h3>Mais de 3 anos de experiência.</h3>
            <p>
              Somos especialistas em higienização de estofados. Nossa missão é
              devolver a vida aos seus móveis.
            </p>
          </div>
          <span className="about-fritz-note-rule" aria-hidden="true" />
          <nav
            className="about-fritz-socials"
            aria-label="Redes e contato do Fritz"
          >
            <span className="about-fritz-note-icon" aria-hidden="true">
              <FritzIcon name="shield-check" />
            </span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do Fritz — abrir em nova aba"
              data-track-contact="sobre whatsapp"
            >
              <span className="tw:sr-only">WhatsApp</span>
              <WhatsAppIcon />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Fritz — abrir em nova aba"
            >
              <span className="tw:sr-only">Instagram</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href={googleReviews.profile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do Fritz no Google — abrir em nova aba"
            >
              <span className="tw:sr-only">Google</span>
              <GoogleIcon />
            </a>
          </nav>
        </aside>
        <figure className="about-fritz-portrait">
          <div className="about-fritz-photo">
            <Image
              src={professional}
              alt="Fritz com uniforme, luvas e equipamento de higienização."
              sizes="(max-width: 767px) 85vw, (max-width: 1100px) 45vw, 460px"
            />
          </div>
        </figure>
        <div className="about-fritz-copy">
          <h3>Técnica e cuidado em cada detalhe.</h3>
          <p>
            Aliamos técnicas avançadas, equipamentos de última geração e
            produtos biodegradáveis para cuidar dos seus móveis e da saúde da
            sua família.
          </p>
          <a
            href={whatsappUrl('higienização e proteção dos meus estofados')}
            className="pill-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com o Fritz pelo WhatsApp — abrir em nova aba"
            data-track-contact="sobre a fritz home"
          >
            <HoverLabel variant="primary">Conversar com o Fritz</HoverLabel>
          </a>
        </div>
      </div>
    </section>
  );
}
