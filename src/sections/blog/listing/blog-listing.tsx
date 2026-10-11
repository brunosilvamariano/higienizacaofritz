import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import { articles } from '@/content/articles';
import { fritzServicePhotos } from '@/sections/about/fritz.images';
import { ResponsiveImage } from '@/components/media/responsive-image';
import './blog-listing.css';
export function BlogListing() {
  return (
    <section
      className="blog-listing section"
      aria-label="Artigos sobre o cuidado com estofados"
    >
      {articles.map((article, index) => (
        <article key={article.slug} className="blog-row">
          <div className="blog-row-inner">
            <time data-text-anim="">{article.date}</time>
            <div className="blog-row-right">
              <Link href={`/blog/${article.slug}`} className="blog-row-image">
                <ResponsiveImage
                  {...fritzServicePhotos[[4, 1, 5, 0][index]]}
                  alt={fritzServicePhotos[[4, 1, 5, 0][index]].alt}
                  sizes="65vw"
                />
              </Link>
              <div className="blog-row-copy">
                <Link href={`/blog/${article.slug}`}>
                  <h2 data-title-anim="">{article.title}</h2>
                </Link>
                <Link className="pill-link" href={`/blog/${article.slug}`}>
                  <HoverLabel variant="v2">Ler artigo</HoverLabel>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
