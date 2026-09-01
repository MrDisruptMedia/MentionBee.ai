import type { Metadata } from "next";
import Link from "next/link";

import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import { listPublicArticles } from "@/lib/blog";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | MentionBee",
  description: "Artikel zu AI Visibility, ChatGPT und AI Search.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    title: "MentionBee Blog",
    description: "Artikel zu AI Visibility, ChatGPT und AI Search.",
    siteName: "MentionBee",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentionBee Blog",
    description: "Artikel zu AI Visibility, ChatGPT und AI Search.",
  },
};

export default function BlogIndexPage() {
  const articles = listPublicArticles();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">Blog</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          AI Visibility &amp; AI Search
        </h1>
        <p className="mt-3 text-lg text-mention-gray">
          Praktische Artikel dazu, wie Marken in ChatGPT, Claude, Gemini und Perplexity sichtbar
          werden — und was wirklich hilft.
        </p>
      </header>

      {articles.length === 0 ? (
        <p className="mx-auto mt-10 max-w-2xl text-center text-mention-gray">
          Noch keine veröffentlichten Artikel.
        </p>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {articles.map((article) => (
            <li key={article.publicSlug}>
              <BlogArticleCard
                publicSlug={article.publicSlug}
                canonicalPath={article.canonicalPath}
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
                contentTypeLabel={article.contentTypeLabel}
              />
            </li>
          ))}
        </ul>
      )}

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-mention-gray">
        Mehr erfahren auf{" "}
        <Link href="/" className="font-medium text-mention-dark underline decoration-primary">
          {SITE_ORIGIN.replace("https://", "")}
        </Link>
        .
      </p>
    </div>
  );
}
