import '@/sections/home/home-colors.css';
import '@/sections/blog/blog-colors.css';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { notFound } from 'next/navigation';
import { articles } from '@/content/articles';
import { BlogArticle } from '@/sections/blog/article/blog-article';
import { Contact } from '@/sections/home/contact/contact';
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article)
    return {
      title: 'Artigo não encontrado',
      robots: { index: false, follow: false },
    };
  return pageMetadata(
    article.title,
    article.summary,
    `/blog/${slug}`,
    'article',
  );
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = articles.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper article-page home-palette"
      tabIndex={-1}
    >
      <BlogArticle article={articles[index]} index={index} />
      <Contact />
    </main>
  );
}
