import Link from "next/link";

import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import type { PublicArticle } from "@/content/blog/types";

export function LatestPostsSection({ articles }: { articles: PublicArticle[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Neu im Blog
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
            Wissen, Analysen und praktische Tipps rund um AI Visibility.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3" role="list">
          {articles.map((article, index) => (
            <li key={article.publicSlug}>
              <BlogArticleCard
                publicSlug={article.publicSlug}
                canonicalPath={article.canonicalPath}
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
                contentTypeLabel={article.contentTypeLabel}
                priority={index === 0}
              />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-base font-semibold text-mention-dark underline underline-offset-3 transition-colors hover:text-mention-gray"
          >
            Alle Artikel ansehen
          </Link>
        </p>
      </div>
    </section>
  );
}
