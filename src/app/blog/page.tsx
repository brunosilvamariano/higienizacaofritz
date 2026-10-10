import { BlogOpeningMotion } from '@/sections/blog/listing/blog-opening-motion';
import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { BlogListing } from '@/sections/blog/listing/blog-listing';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = {
  title: 'Ideias sobre móveis planejados — Fritz',
  description:
    'Leia sobre cozinhas, quartos, espaços compactos e como avaliar um orçamento de móveis planejados.',
  alternates: { canonical: '/blog' },
};
export default function BlogPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper blog-page"
      tabIndex={-1}
    >
      <BlogOpeningMotion />
      <PageOpening
        caption="Ideias para sua casa"
        title="Inspiração e escolhas para o seu espaço."
      />
      <div
        className="reference-divider blog-opening-divider"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((line) => (
          <i key={line} />
        ))}
      </div>
      <BlogListing />
      <Contact />
    </main>
  );
}
