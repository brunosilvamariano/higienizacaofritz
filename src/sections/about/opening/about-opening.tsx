import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import './about-opening.css';
export function AboutOpening() {
  return (
    <PageOpening
      id="about-title"
      caption="Por dentro da Fritz"
      title={
        <>
          <span data-about-title-text="">Móveis planejados que dão forma </span>
          <span className="reference-inline-image">
            <ResponsiveImage
              {...projects[0].images.detalhe}
              alt="Detalhe de acabamento de móveis planejados"
              sizes="150px"
            />
          </span>
          <span data-about-title-text="">ao seu jeito de viver.</span>
        </>
      }
    />
  );
}
