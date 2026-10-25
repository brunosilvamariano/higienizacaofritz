'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { FritzIcon } from '@/components/ui/fritz-icon';
import { RoundLink } from '@/components/ui/round-link';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import { serviceDetails } from './service-catalog.content';
import './service-catalog.css';

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={back ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceCatalog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const service = serviceDetails[selected];
  function openService(index: number) {
    setSelected(index);
    dialog.current?.showModal();
    if (content.current) content.current.scrollTop = 0;
  }
  function changeService(direction: number) {
    setSelected(
      (current) =>
        (current + direction + serviceDetails.length) % serviceDetails.length,
    );
    if (content.current) content.current.scrollTop = 0;
  }
  return (
    <section
      id="servicos"
      className="service-catalog"
      aria-labelledby="service-catalog-title"
      tabIndex={-1}
    >
      <header className="service-catalog-heading tw:grid tw:items-end">
        <div>
          <SectionEyebrow>Serviços Fritz</SectionEyebrow>
          <TitleReveal
            id="service-catalog-title"
            text="O cuidado certo começa aqui."
            accent="começa aqui."
            leadAccent="cuidado certo"
          />
        </div>
        <p>
          Escolha um serviço e conheça o cuidado indicado para o seu tecido.
        </p>
      </header>
      <div className="service-gallery tw:grid">
        {serviceDetails.map((item, index) => (
          <motion.article
            id={item.id}
            key={item.id}
            className="service-gallery-card"
            aria-labelledby={`detail-${item.id}`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: reduced ? 0 : 0.65,
              delay: (index % 2) * 0.08,
            }}
          >
            <Image
              className="service-gallery-image"
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 90vw, (min-width: 1600px) 820px, 55vw"
            />
            <div className="service-gallery-top tw:flex tw:items-center tw:justify-between">
              <span>Serviço {String(index + 1).padStart(2, '0')}</span>
              <FritzIcon name={item.icon} />
            </div>
            <div className="service-gallery-copy">
              <h3 id={`detail-${item.id}`}>{item.title}</h3>
              <p>{item.introduction}</p>
              <span
                className="service-gallery-action tw:flex tw:items-center tw:justify-between"
                aria-hidden="true"
              >
                Conhecer o serviço
                <span className="service-gallery-arrow tw:grid tw:place-items-center">
                  <Arrow />
                </span>
              </span>
            </div>
            <button
              type="button"
              className="service-gallery-hit"
              aria-label={`Conhecer ${item.title.toLowerCase()}`}
              aria-haspopup="dialog"
              onClick={() => openService(index)}
            />
          </motion.article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="service-gallery-dialog"
        aria-labelledby="service-dialog-title"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            event.currentTarget.close();
          }
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            event.currentTarget.close();
        }}
      >
        <div className="service-dialog-toolbar tw:flex tw:items-center tw:justify-between">
          <span>Serviços Fritz</span>
          <button
            className="service-dialog-control tw:grid tw:place-items-center"
            type="button"
            aria-label="Fechar detalhes do serviço"
            onClick={() => dialog.current?.close()}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 6 12 12M6 18 18 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="service-dialog-scroll" ref={content}>
          <div className="service-dialog-layout tw:grid">
            <div className="service-dialog-photo">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 767px) 90vw, 420px"
              />
              <span
                className="service-dialog-icon tw:grid tw:place-items-center"
                aria-hidden="true"
              >
                <FritzIcon name={service.icon} />
              </span>
            </div>
            <div
              className="service-dialog-copy"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="service-dialog-kicker">
                Higienização e proteção
              </span>
              <h2 id="service-dialog-title">{service.title}</h2>
              <p className="service-dialog-introduction">
                {service.introduction}
              </p>
              <p>{service.description}</p>
              <ul>
                {service.notes.map((note) => (
                  <li key={note}>
                    <span aria-hidden="true">✓</span>
                    {note}
                  </li>
                ))}
              </ul>
              <RoundLink
                href={whatsappUrl(service.title.toLowerCase())}
                icon="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar ${service.title.toLowerCase()} pelo WhatsApp — abrir em nova aba`}
                data-track-contact={`pagina servicos ${service.id}`}
              >
                Consultar este serviço
              </RoundLink>
            </div>
          </div>
        </div>
        <nav
          className="service-dialog-navigation tw:flex tw:items-center tw:justify-between"
          aria-label="Navegar entre serviços"
        >
          <button
            type="button"
            className="service-dialog-direction tw:inline-flex tw:items-center"
            onClick={() => changeService(-1)}
            aria-label="Serviço anterior"
          >
            <Arrow back />
            <span>Anterior</span>
          </button>
          <span className="service-dialog-count">
            {String(selected + 1).padStart(2, '0')} /{' '}
            {String(serviceDetails.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="service-dialog-direction tw:inline-flex tw:items-center"
            onClick={() => changeService(1)}
            aria-label="Próximo serviço"
          >
            <span>Próximo</span>
            <Arrow />
          </button>
        </nav>
      </dialog>
    </section>
  );
}
