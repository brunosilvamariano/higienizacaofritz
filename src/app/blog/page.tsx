import '@/sections/home/home-colors.css';
import '@/sections/blog/blog-colors.css';
import { BlogOpeningMotion } from '@/sections/blog/listing/blog-opening-motion';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { BlogListing } from '@/sections/blog/listing/blog-listing';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = pageMetadata(
  'Cuidados com estofados — Blog Fritz',
  'Informações sobre higienização, impermeabilização e cuidados com estofados. Saiba como solicitar seu orçamento à Fritz.',
  '/blog',
);
export default function BlogPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper blog-page home-palette"
      tabIndex={-1}
    >
      <BlogOpeningMotion />
      <PageOpening
        caption="Dicas da Fritz"
        title="Cuidado com estofados, informação para sua rotina."
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
