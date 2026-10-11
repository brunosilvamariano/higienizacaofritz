import { ProjectOpeningMotion } from './project-opening-motion';
import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import { fritzGallery } from './fritz-gallery.content';
import { whatsappUrl } from '@/config/contact';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import './project-gallery.css';
export function ProjectGallery() {
  return (
    <>
      <ProjectOpeningMotion />
      <PageOpening
        id="collection-title"
        caption="O cuidado da Fritz na prática"
        title="Cuidado real com os seus estofados."
      >
        <Link
          className="pill-link"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverLabel variant="primary">Solicitar meu orçamento</HoverLabel>
        </Link>
      </PageOpening>
      <div
        className="project-ticker"
        style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
        aria-hidden="true"
      >
        <div>
          {[0, 1, 2].map((n) => (
            <span key={n}>
              Higienização ✳ Estofados ✳ Tapetes ✳ Impermeabilização ✳{' '}
            </span>
          ))}
        </div>
      </div>
      <div
        className="reference-divider reference-divider-orange"
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <section
        className="project-collection section"
        aria-labelledby="collection-heading"
      >
        <div className="reference-heading">
          <h2 id="collection-heading" data-title-anim="">
            Galeria da Fritz
          </h2>
          <span className="reference-badge" data-floating-badge="">
            Cuidado em cada detalhe
          </span>
        </div>
        <div className="collection-grid">
          {fritzGallery.map((project, index) => (
            <article key={project.id} className="collection-item">
              <Link
                className="project-card-image"
                href={whatsappUrl(project.title.toLowerCase())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ResponsiveImage
                  {...project.image}
                  alt={project.image.alt}
                  eager={index === 0}
                  sizes="(min-width:768px) 43vw,100vw"
                />
              </Link>
              <div className="project-card-caption">
                <Link
                  href={whatsappUrl(project.title.toLowerCase())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 data-title-anim="">{project.title}</h3>
                </Link>
                <div className="project-card-tags">
                  {project.tags.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <small className="demo-note">{project.text}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
