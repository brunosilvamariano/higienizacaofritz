import '@/sections/home/home-colors.css';
import '@/sections/projects/projects-colors.css';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { ProjectGallery } from '@/sections/projects/gallery/project-gallery';
import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = pageMetadata(
  'Registros da Fritz',
  'Fotos e registros de estofados e atendimentos da Fritz. Conheça nosso cuidado e solicite seu orçamento.',
  '/projetos',
);
export default function ProjectsPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper projects-page home-palette"
      tabIndex={-1}
    >
      <ProjectGallery />
      <Contact />
    </main>
  );
}
