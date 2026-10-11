import '@/sections/home/home-colors.css';
import '@/sections/projects/projects-colors.css';
import type { Metadata } from 'next';
import { ProjectGallery } from '@/sections/projects/gallery/project-gallery';
import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = {
  title: 'Registros da Fritz — Higienização e impermeabilização',
  description:
    'Conheça registros reais da Fritz e solicite seu orçamento de higienização e impermeabilização de estofados.',
  alternates: { canonical: '/projetos' },
  openGraph: {
    title: 'O cuidado da Fritz na prática',
    description: 'Fotos reais de estofados e atendimentos da Fritz.',
    url: '/projetos',
  },
};
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
