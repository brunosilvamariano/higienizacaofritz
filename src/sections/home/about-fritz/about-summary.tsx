'use client';

import Image from 'next/image';
import { type CSSProperties, useEffect, useRef } from 'react';
import professional from '@/assets/images/shared/professional/desktop.webp';
import { RoundLink } from '@/components/ui/round-link';
import { contact, whatsappUrl } from '@/config/contact';
import { googleReviews } from '@/content/google-reviews';
import { GoogleIcon, InstagramIcon } from '@/components/ui/social-icons';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import './about-summary.css';

const title = 'Por trás de cada cuidado existe alguém que respeita a sua casa.';
const socialLinks = [
  { name: 'instagram', label: 'Instagram', href: contact.instagram },
  { name: 'facebook', label: 'Facebook', href: contact.facebook },
  { name: 'linktree', label: 'Linktree', href: contact.linktree },
  {
    name: 'google',
    label: 'Avaliações no Google',
    href: googleReviews.readReviewsUrl,
  },
] as const;

// Facebook/Linktree: Simple Icons (CC0), fontes registradas no brief da seção.
function AboutSocialIcon({
  name,
}: {
  name: (typeof socialLinks)[number]['name'];
}) {
  if (name === 'instagram') return <InstagramIcon />;
  if (name === 'google') return <GoogleIcon />;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={name === 'facebook' ? '#0866ff' : '#42e661'}
    >
      <path
        d={
          name === 'facebook'
            ? 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'
            : 'm13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z'
        }
      />
    </svg>
  );
}

export function AboutSummary() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = section.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const elements = Array.from(
      element.querySelectorAll<HTMLElement>('[data-about-reveal]'),
    );
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      elements.forEach((item) => {
        item.removeAttribute('data-about-state');
      });
      if (reduced.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).dataset.aboutState = 'entered';
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
      );
      elements.forEach((item) => {
        item.dataset.aboutState = 'pending';
        observer?.observe(item);
      });
    };
    setup();
    reduced.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      reduced.removeEventListener('change', setup);
      elements.forEach((item) => {
        item.removeAttribute('data-about-state');
      });
    };
  }, []);
  return (
    <section
      ref={section}
      id="sobre-a-fritz"
      className="about-summary"
      aria-labelledby="about-summary-title"
      tabIndex={-1}
    >
      <div className="about-summary-heading">
        <SectionEyebrow className="about-summary-eyebrow">
          Sobre o Fritz
        </SectionEyebrow>
        <h2
          id="about-summary-title"
          aria-label={title}
          data-about-reveal="heading"
        >
          {title.split(' ').map((word, index) => (
            <span
              className="about-summary-word-wrap"
              key={word}
              aria-hidden="true"
            >
              <span
                className="about-summary-word"
                style={
                  { '--about-word-delay': `${index * 42}ms` } as CSSProperties
                }
              >
                {word}
              </span>{' '}
            </span>
          ))}
        </h2>
      </div>
      <div className="about-summary-body">
        <figure className="about-summary-photo" data-about-reveal="photo">
          <Image
            className="about-summary-image-blur"
            src={professional}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 767px) 90vw, 36vw"
          />
          <div className="about-summary-photo-window">
            <Image
              src={professional}
              alt="Fritz cuidando de um estofado com escova e borrifador."
              fill
              sizes="(max-width: 767px) 90vw, 36vw"
            />
          </div>
        </figure>
        <div className="about-summary-copy" data-about-reveal="copy">
          <p>
            Somos especialistas em higienização de estofados. Nossa missão é
            devolver a vida aos seus móveis, com orientação sobre o serviço e os
            cuidados com o tecido.
          </p>
          <RoundLink
            href={whatsappUrl()}
            icon="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com o Fritz pelo WhatsApp — abrir em nova aba"
            data-track-contact="sobre resumo whatsapp"
          >
            Falar com o Fritz
          </RoundLink>
        </div>
        <nav
          className="about-summary-support"
          aria-label="Redes sociais e avaliações do Fritz"
          data-about-reveal="support"
        >
          <div className="about-summary-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                className="about-summary-social"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={`${social.label} do Fritz — abrir em nova aba`}
              >
                <span className="tw:sr-only">{social.label}</span>
                <span className="about-summary-social-icon" aria-hidden="true">
                  <AboutSocialIcon name={social.name} />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
