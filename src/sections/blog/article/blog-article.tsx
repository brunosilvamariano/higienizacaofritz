import type { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
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
          {...projects[index].images.capa}
          alt={`${projects[index].category} — estudo conceitual`}
          eager
          sizes="90vw"
        />
      </div>
      <div className="blog-richtext">
        <DemoNote>
          Imagens de estudos conceituais para inspirar seu planejamento.
        </DemoNote>
        <h2 data-title-anim="">Por onde começar</h2>
        <p data-text-anim="">{article.summary}</p>
        <h2 data-title-anim="">{article.sections[0].title}</h2>
        <p data-text-anim="">{article.sections[0].text}</p>
        <blockquote>{article.highlight}</blockquote>
        <h2 data-title-anim="">{article.sections[1].title}</h2>
        <p data-text-anim="">{article.sections[1].text}</p>
        <div className="blog-article-secondary">
          <ResponsiveImage
            {...projects[index].images.detalhe}
            alt={`${projects[index].category} — estudo conceitual`}
            sizes="70vw"
          />
        </div>
        <h2 data-title-anim="">{article.sections[2].title}</h2>
        <p data-text-anim="">{article.sections[2].text}</p>
      </div>
    </article>
  );
}
