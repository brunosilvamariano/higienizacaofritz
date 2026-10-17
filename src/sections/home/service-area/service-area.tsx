'use client';

import { useRef, useState, type CSSProperties } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { TitleReveal } from '@/animations/title-reveal';
import { HoverLabel } from '@/components/ui/hover-label';
import { whatsappUrl } from '@/config/contact';
import { serviceAreas } from '@/content/service-areas';
import map from './service-area-map.json';
import './service-area.css';

const cities = map.cities.map((point) => ({
  ...point,
  name: serviceAreas.find(({ id }) => id === point.id)?.name ?? '',
}));

export function ServiceArea() {
  const section = useRef<HTMLElement>(null);
  const mapFrame = useRef<HTMLFieldSetElement>(null);
  const [selected, setSelected] = useState(cities[0].id);
  const city = cities.find((item) => item.id === selected) ?? cities[0];
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: mapFrame,
    offset: ['start end', 'end start'],
  });
  const shift = useTransform(scrollYProgress, [0, 1], ['84px', '-84px']);
  const served = new Set(cities.map((item) => item.id));

  return (
    <section
      ref={section}
      id="onde-atendemos"
      className="service-area section"
      aria-labelledby="service-area-title"
      tabIndex={-1}
    >
      <div className="service-area-layout tw:grid">
        <div className="service-area-heading">
          <SectionEyebrow>Onde a Fritz atende</SectionEyebrow>
          <TitleReveal
            id="service-area-title"
            text="Esse cuidado chega até você."
          />
          <p>
            De Joinville ao litoral catarinense, o cuidado da Fritz encontra o
            caminho até a sua casa.
          </p>
        </div>

        <motion.fieldset
          ref={mapFrame}
          className="service-area-map"
          aria-label="Mapa das cidades atendidas pela Fritz no litoral de Santa Catarina"
          style={{ '--area-map-shift': reduced ? '0px' : shift } as MotionStyle}
        >
          <div className="service-area-water-plane" aria-hidden="true" />
          <div className="service-area-compass" aria-hidden="true">
            <span>N</span>
            <i />
          </div>
          <span className="service-area-ocean" aria-hidden="true">
            Oceano
            <br />
            Atlântico
          </span>
          <div className="service-area-map-layer">
            <svg
              className="service-area-geography"
              viewBox={`0 0 ${map.width} ${map.height}`}
              aria-hidden="true"
              focusable="false"
            >
              <g>
                {map.paths.map((area) => (
                  <path
                    key={area.id}
                    d={area.d}
                    className="service-area-territory"
                    data-served={served.has(area.id)}
                    data-active={area.id === selected}
                  />
                ))}
              </g>
            </svg>
            {cities.map((item) => (
              <button
                key={item.id}
                className="service-area-point tw:flex tw:items-center tw:justify-center"
                type="button"
                aria-label={`Selecionar ${item.name}`}
                aria-pressed={item.id === selected}
                data-active={item.id === selected}
                data-west={item.id === cities[0].id}
                style={
                  {
                    '--point-x': `${(item.x / map.width) * 100}%`,
                    '--point-y': `${(item.y / map.height) * 100}%`,
                  } as CSSProperties
                }
                onClick={() => setSelected(item.id)}
              >
                <span className="service-area-dot" aria-hidden="true" />
                <span className="service-area-point-label" aria-hidden="true">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
          <div className="service-area-map-caption">
            <span />
            Cidades atendidas
            <span className="service-area-caption-hint">
              Clique em um ponto
            </span>
          </div>
        </motion.fieldset>

        <div className="service-area-details">
          <a
            href={whatsappUrl(`atendimento em ${city.name}`)}
            className="pill-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar atendimento em ${city.name} pelo WhatsApp — abrir em nova aba`}
            data-track-contact={`regiao ${city.name}`}
          >
            <span className="service-area-action-prefix">Atendimento em</span>
            <span className="service-area-action-size" aria-hidden="true">
              Balneário Barra do Sul
            </span>
            <HoverLabel variant="primary">{city.name}</HoverLabel>
          </a>
        </div>
      </div>
      <p className="service-area-credits">
        Geografia:{' '}
        <a
          href="https://servicodados.ibge.gov.br/api/docs/malhas?versao=3"
          target="_blank"
          rel="noopener noreferrer"
        >
          IBGE
        </a>{' '}
        · Pontos:{' '}
        <a
          href="https://github.com/kelvins/municipios-brasileiros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Municípios Brasileiros
        </a>
      </p>
    </section>
  );
}
