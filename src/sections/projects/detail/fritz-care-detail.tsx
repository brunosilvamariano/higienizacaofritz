import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import type { Project } from '@/content/projects';
import { whatsappUrl } from '@/config/contact';
import { ResponsiveImage } from '@/components/media/responsive-image';
import './project-detail.css';
import { ProjectDetailMotion } from './project-detail-motion';
export function FritzCareDetail({ project }: { project: Project }) {
  return (
    <>
      <ProjectDetailMotion />
      <section className="project-opening section">
        <div className="project-tags">
          {project.features.slice(0, 2).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <h1 data-title-anim="">
          {project.title} — {project.category}
        </h1>
        <div className="project-meta">
          <div>
            <strong>Fritz</strong>
            <p>{project.title}</p>
          </div>
          <div>
            <strong>Peças</strong>
            <p>{project.category}</p>
          </div>
          <div>
            <strong>Serviços</strong>
            <p>Higienização e impermeabilização</p>
          </div>
          <div>
            <strong>Tipo</strong>
            <p>Atendimento sob consulta</p>
          </div>
          <Link
            className="pill-link"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverLabel variant="v2">Solicitar orçamento</HoverLabel>
          </Link>
        </div>
      </section>
      <div className="project-cover">
        <ResponsiveImage
          {...project.images.capa}
          alt="Registro real de estofados e atendimento da Fritz"
          eager
          sizes="100vw"
        />
      </div>
      <section className="project-story section">
        <h2 data-title-anim="">Cuidado para sua rotina</h2>
        <div>
          <p className="project-lead" data-text-anim="">
            {project.introduction}
          </p>
          <p data-text-anim="">{project.description}</p>
        </div>
      </section>
      <section
        className="project-showcase section"
        aria-label="Fotos reais da Fritz"
      >
        <div>
          <ResponsiveImage
            {...project.images.angulo}
            alt={`${project.category} — ${project.title}`}
            sizes="43vw"
          />
        </div>
        <div>
          <ResponsiveImage
            {...project.images.meio}
            alt={`${project.category} — ${project.title}`}
            sizes="43vw"
          />
        </div>
      </section>
      <section className="project-overview section">
        <div>
          <h2 data-title-anim="">Como começar seu atendimento</h2>
          <p data-text-anim="">{project.description}</p>
        </div>
        <div className="project-overview-stats">
          {[
            { value: '01', label: 'Envie fotos dos estofados' },
            { value: '02', label: 'Informe quantidade e dimensões' },
            { value: '03', label: 'Consulte o serviço indicado' },
            { value: '04', label: 'Combine o atendimento e os cuidados' },
          ].map((item) => (
            <div key={item.value}>
              <strong className="project-counter">
                <span className="tw:sr-only">{item.value}</span>
                {item.value
                  .replace('%', '')
                  .split('')
                  .map((digit, position) => (
                    <span
                      className="project-counter-window"
                      // biome-ignore lint/suspicious/noArrayIndexKey: Fixed digit columns keep their positions throughout the counter animation.
                      key={`${position}-${digit}`}
                      aria-hidden="true"
                    >
                      <span
                        className="project-counter-strip"
                        data-digit={digit}
                        style={{
                          transform: `translateY(-${Number(digit) * 10}%)`,
                        }}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                          <span key={number}>{number}</span>
                        ))}
                      </span>
                    </span>
                  ))}
                <span aria-hidden="true">{''}</span>
              </strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="project-panorama">
        <ResponsiveImage
          {...project.images.detalhe}
          alt="Detalhe de assento de sofá compartilhado por cliente da Fritz"
          sizes="100vw"
        />
      </div>
      <section className="project-quote section" aria-label="Cuidado da Fritz">
        {['Cuidado', 'com as peças', 'da sua', 'rotina'].map((line) => (
          <div className="project-quote-line" key={line}>
            <p>{line}</p>
            <span className="project-quote-mask" aria-hidden="true" />
          </div>
        ))}
      </section>
      <section className="project-result section">
        <div>
          <h2 data-title-anim="">Vamos cuidar do seu estofado?</h2>
          <p data-text-anim="">{project.description}</p>
          <Link className="pill-link" href="/projetos">
            <HoverLabel variant="v2">Ver registros da Fritz</HoverLabel>
          </Link>
        </div>
        <div className="project-result-gallery">
          {(['capa', 'angulo', 'detalhe'] as const).map((view) => (
            <div key={view}>
              <ResponsiveImage
                {...project.images[view]}
                alt={`${project.category} — ${view}`}
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
