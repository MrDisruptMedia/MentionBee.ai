import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleExperience } from "@/components/blog/ArticleExperience";
import { getPublicArticleBySlug, listPublicArticles } from "@/lib/blog";
import { getBlogImages } from "@/lib/blog-images";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listPublicArticles().map((a) => ({ slug: a.publicSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublicArticleBySlug(slug);
  if (!article) {
    return { robots: { index: false, follow: false } };
  }

  const canonical = absoluteUrl(article.canonicalPath);
  const title = article.title;
  const description = article.description;
  const images = getBlogImages(article.publicSlug);
  const socialImage = images
    ? {
        url: absoluteUrl(images.social.src),
        width: images.social.width,
        height: images.social.height,
      }
    : { url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 };

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "MentionBee",
      locale: "de_CH",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getPublicArticleBySlug(slug);
  if (!article) notFound();
  return <ArticleExperience article={article} />;
}
