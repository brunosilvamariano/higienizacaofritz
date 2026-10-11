import '@/sections/home/home-colors.css';
import { pageMetadata } from '@/config/metadata';
import { notFound } from 'next/navigation';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
const pages = {
  estilos: {
    title: 'Guia de estilos',
    text: 'Bebas Neue nos títulos e DM Sans no corpo. Gelo azulado, azul Fritz, azul escuro e azul suave formam a paleta da marca.',
  },
  licencas: {
    title: 'Licenças e origens',
    text: 'Bebas Neue e DM Sans são distribuídas sob SIL Open Font License, incluída junto aos arquivos locais. O site utiliza fotos fornecidas para os serviços, registros publicados nas avaliações da Fritz e o vídeo enviado pela empresa.',
  },
  alteracoes: {
    title: 'Registro de alterações',
    text: '11 de outubro de 2026: atualização das páginas da Fritz, aplicação da paleta azul e gelo, revisão de conteúdo, integração do vídeo da empresa e configuração das imagens de compartilhamento.',
  },
} as const;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in pages))
    return {
      title: 'Página não encontrada',
      robots: { index: false, follow: false },
    };
  const page = pages[slug as keyof typeof pages];
  return {
    ...pageMetadata(page.title, page.text, `/informacoes/${slug}`),
    robots: { index: false, follow: true },
  };
}
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export default async function Information({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page = pages[slug as keyof typeof pages];
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper home-palette"
      tabIndex={-1}
    >
      <PageOpening caption="Informações da Fritz" title={page.title} />
      <section className="section tw:max-w-[1000px] tw:mx-auto tw:text-[20px] tw:leading-relaxed">
        <p>{page.text}</p>
      </section>
    </main>
  );
}
