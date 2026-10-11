import type { articles } from '@/content/articles';
import { fritzServicePhotos } from '@/sections/about/fritz.images';
import { ResponsiveImage } from '@/components/media/responsive-image';
import './blog-article.css';
export function BlogArticle({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) {
  return (
    <article className="blog-article section">
      <header>
        <div className="blog-article-date">
          <span className="blog-article-date-circle" aria-hidden="true" />
          <span data-text-anim="">{article.date}</span>
        </div>
        <h1 data-title-anim="">
          {index === 0 ? (
            <>
              {article.title.split(': ')[0]}:
              <br />
              {article.title.split(': ')[1]}
            </>
          ) : (
            article.title
          )}
        </h1>
      </header>
      <div className="blog-article-image">
        <ResponsiveImage
          {...fritzServicePhotos[[4, 1, 5, 0][index]]}
          alt={fritzServicePhotos[[4, 1, 5, 0][index]].alt}
          eager
          sizes="90vw"
        />
      </div>
      <div className="blog-richtext">
        <h2 data-title-anim="">Por onde começar</h2>
        <p data-text-anim="">{article.summary}</p>
        <h2 data-title-anim="">{article.sections[0].title}</h2>
        <p data-text-anim="">{article.sections[0].text}</p>
        <blockquote>{article.highlight}</blockquote>
        <h2 data-title-anim="">{article.sections[1].title}</h2>
        <p data-text-anim="">{article.sections[1].text}</p>
        <div className="blog-article-secondary">
          <ResponsiveImage
            {...fritzServicePhotos[[2, 3, 0, 5][index]]}
            alt={fritzServicePhotos[[2, 3, 0, 5][index]].alt}
            sizes="70vw"
          />
        </div>
        <h2 data-title-anim="">{article.sections[2].title}</h2>
        <p data-text-anim="">{article.sections[2].text}</p>
      </div>
    </article>
  );
}
