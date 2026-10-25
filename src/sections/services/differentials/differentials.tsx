'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { RoundLink } from '@/components/ui/round-link';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { WhatsAppIcon } from '@/components/ui/social-icons';
import { whatsappUrl } from '@/config/contact';
import { benefitsContent } from '@/sections/home/benefits/benefits.content';
import './differentials.css';

const icons = ['shield-check', 'sofa', 'calendar-check'] as const;

function DifferentialCard({ index }: { index: number }) {
  const target = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'center center'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const y = useTransform(progress, [0, 1], [70, 0]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);
  const rotateY = useTransform(progress, [0, 1], [12, 0]);
  const rotateZ = useTransform(progress, [0, 1], [2, 0]);
  const item = benefitsContent.items[index];
  return (
    <li className="fritz-differential-row" ref={target}>
      <span
        className="fritz-differential-marker tw:grid tw:place-items-center"
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <motion.div
        className="fritz-differential-frame"
        style={reduced ? undefined : { y, scale, rotateY, rotateZ }}
      >
        <article
          className="fritz-differential-card"
          aria-labelledby={`differential-${item.id}`}
        >
          <div className="fritz-differential-top tw:flex tw:items-center tw:justify-between">
            <span>Motivo {String(index + 1).padStart(2, '0')}</span>
            {index === 2 ? <WhatsAppIcon /> : <FritzIcon name={icons[index]} />}
          </div>
          <h3 id={`differential-${item.id}`}>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      </motion.div>
    </li>
  );
}

export function Differentials() {
  const list = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: list,
    offset: ['start center', 'end center'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  return (
    <section
      className="fritz-differentials"
      id="por-que-escolher"
      aria-labelledby="differentials-title"
      tabIndex={-1}
    >
      <div className="fritz-differentials-layout tw:grid tw:items-start">
        <div className="fritz-differentials-intro">
          <SectionEyebrow>Por que escolher o Fritz</SectionEyebrow>
          <TitleReveal
            id="differentials-title"
            text="Seu estofado merece esse cuidado."
            accent="esse cuidado."
          />
          <p>
            Orientação sobre o tecido, praticidade e uma conversa direta em cada
            atendimento.
          </p>
          <RoundLink
            href={whatsappUrl()}
            icon="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com o Fritz sobre o atendimento pelo WhatsApp — abrir em nova aba"
            data-track-contact="diferenciais servicos"
          >
            Falar com o Fritz
          </RoundLink>
        </div>
        <ol className="fritz-differentials-list" ref={list}>
          <li className="fritz-differentials-line" aria-hidden="true">
            <motion.span style={{ scaleY: reduced ? 1 : progress }} />
          </li>
          {benefitsContent.items.map((item, index) => (
            <DifferentialCard key={item.id} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
