import '@/sections/home/home-colors.css';
import '@/sections/projects/detail/fritz-care-colors.css';
import { FritzCareDetail } from '@/sections/projects/detail/fritz-care-detail';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { Contact } from '@/sections/home/contact/contact';

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Projeto não encontrado' };
  return pageMetadata(
    `${project.title} — ${project.category}`,
    `${project.introduction} Consulte a Fritz sobre higienização e impermeabilização e solicite seu orçamento.`,
    `/projetos/${slug}`,
  );
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper project-page home-palette fritz-care-page"
      tabIndex={-1}
    >
      <FritzCareDetail project={project} />
      <Contact />
    </main>
  );
}
