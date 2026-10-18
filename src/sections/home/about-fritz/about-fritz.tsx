'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import professional from '@/assets/images/pages/home/about-fritz/profissional.webp';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { HoverLabel } from '@/components/ui/hover-label';
import { whatsappUrl } from '@/config/contact';
import './about-fritz.css';

function CareSymbol() {
  return (
    <span className="about-fritz-symbol" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" focusable="false" aria-hidden="true">
        <path
          d="M24 5c-4 7-14 17-14 25a14 14 0 0 0 28 0C38 22 28 12 24 5Z"
          fill="currentColor"
        />
        <path
          d="M16 29c0 5 3 8 7 9"
          stroke="white"
          strokeOpacity=".8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
export function AboutFritz() {
  const reduced = useReducedMotion();
  const region = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = region.current;
    if (!element || reduced) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      document.fonts.ready,
    ]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const heading = element.querySelector<HTMLElement>(
        '.about-fritz-heading',
      );
      const runway = element.querySelector<HTMLElement>('.about-fritz-scroll');
      const scene = element.querySelector<HTMLElement>('.about-fritz-scene');
      const stage = element.querySelector<HTMLElement>(
        '.about-fritz-visual-stage',
      );
      const slot = element.querySelector<HTMLElement>(
        '.about-fritz-photo-slot',
      );
      const photo = element.querySelector<HTMLElement>('.about-fritz-photo');
      const image = photo?.querySelector('img');
      if (!heading || !runway || !scene || !stage || !slot || !photo || !image)
        return;
      let context: ReturnType<typeof gsap.context> | undefined;
      const setup = () => {
        context?.revert();
        stage.style.removeProperty('--about-photo-height');
        const anchor = element.querySelector<HTMLElement>(
          '.about-fritz-portrait-anchor',
        );
        if (!anchor) return;
        const preferredHeight = stage.offsetHeight;
        const otherContentHeight = scene.offsetHeight - preferredHeight;
        const stickyTop = window.innerWidth < 768 ? 72 : 80;
        const availableHeight =
          window.innerHeight - stickyTop - otherContentHeight - 16;
        stage.style.setProperty(
          '--about-photo-height',
          `${Math.min(preferredHeight, Math.max(180, availableHeight))}px`,
        );
        const from = anchor.getBoundingClientRect();
        const to = slot.getBoundingClientRect();
        const headingHeight = heading.offsetHeight;
        const stageHeight = stage.offsetHeight;
        context = gsap.context(() => {
          gsap.set(heading, { minHeight: headingHeight });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: runway,
              start: 'top 65%',
              end: () => `top ${window.innerWidth < 768 ? 72 : 80}px`,
              scrub: 0.65,
            },
          });
          timeline.fromTo(
            photo,
            {
              x: from.left - to.left,
              y: from.top - to.top,
              scale: from.width / to.width,
              borderRadius: '45%',
            },
            { y: 0, duration: 0.32, ease: 'sine.inOut' },
            0,
          );
          timeline.to(
            photo,
            {
              x: 0,
              scale: 1,
              borderRadius: '0%',
              duration: 0.88,
              ease: 'sine.inOut',
            },
            0.12,
          );
          timeline.fromTo(
            image,
            { scale: 3.1 },
            {
              scale: 1,
              duration: 0.88,
              ease: 'sine.inOut',
            },
            0.12,
          );
          timeline.fromTo(
            anchor,
            { width: from.width, marginLeft: '0.07em', marginRight: '0.07em' },
            {
              width: 0,
              marginLeft: 0,
              marginRight: 0,
              duration: 0.4,
              ease: 'sine.inOut',
            },
            0.12,
          );
          timeline.fromTo(
            stage,
            { height: 0 },
            { height: stageHeight, duration: 1, ease: 'sine.inOut' },
            0,
          );
        }, element);
      };
      setup();
      let refresh = 0;
      let layoutWidth = window.innerWidth;
      const onResize = () => {
        if (window.innerWidth < 768 && window.innerWidth === layoutWidth)
          return;
        layoutWidth = window.innerWidth;
        cancelAnimationFrame(refresh);
        refresh = requestAnimationFrame(() => {
          setup();
          ScrollTrigger.refresh();
        });
      };
      window.addEventListener('resize', onResize);
      cleanup = () => {
        cancelAnimationFrame(refresh);
        window.removeEventListener('resize', onResize);
        context?.revert();
        stage.style.removeProperty('--about-photo-height');
      };
      ScrollTrigger.refresh();
    });
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
      <div className="about-fritz-bubbles" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((bubble) => (
          <span key={bubble} className="about-fritz-bubble" />
        ))}
      </div>
      <div className="about-fritz-scroll">
        <div className="about-fritz-scene">
          <div className="about-fritz-heading tw:mx-auto tw:text-center">
            <SectionEyebrow align="center">Sobre o Fritz</SectionEyebrow>
            <h2 id="about-fritz-title" data-title-anim="">
              Por trás de cada cuidado <CareSymbol /> existe alguém que respeita{' '}
              <span
                className="about-fritz-portrait-anchor"
                aria-hidden="true"
              />{' '}
              a sua casa.
            </h2>
          </div>

          <div className="about-fritz-visual-stage tw:relative">
            <figure className="about-fritz-visual tw:relative tw:mx-auto">
              <div className="about-fritz-photo-slot tw:relative tw:mx-auto">
                <div className="about-fritz-photo">
                  <Image
                    src={professional}
                    alt="Profissional do Fritz com uniforme, luvas e equipamento de higienização."
                    sizes="(max-width: 559px) 90vw, 460px"
                    className="tw:h-full tw:w-full"
                  />
                </div>
              </div>
            </figure>
          </div>
          <div className="about-fritz-copy tw:mx-auto tw:flex tw:flex-col tw:items-center tw:text-center">
            <p data-text-anim="">
              O cuidado começa na conversa. Pelo WhatsApp, você fala com o
              Fritz, envia fotos e recebe orientação sobre higienização ou
              proteção. Depois, combina o atendimento e conhece os cuidados após
              o serviço.
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
      </div>
    </section>
  );
}
