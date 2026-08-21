import Link from "next/link";

import type { PublicArticle } from "@/content/blog/types";
import { formatDeDate } from "@/lib/blog-seo";

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
          {articles.map((article) => {
            const showHero = Boolean(article.hero?.src && article.hero.status === "APPROVED");

            return (
              <li key={article.publicSlug}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
                  {showHero && article.hero?.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.hero.src}
                      alt={article.hero.alt || ""}
                      className="h-40 w-full object-cover"
                      width={article.hero.width || undefined}
                      height={article.hero.height || undefined}
                    />
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-mention-gray">{formatDeDate(article.publishedAt)}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-mention-dark">
                      <Link
                        href={article.canonicalPath}
                        className="text-mention-yellow-text transition-colors hover:text-mention-yellow-text-hover"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    {article.description ? (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-mention-gray">
                        {article.description}
                      </p>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-base font-semibold text-mention-yellow-text underline underline-offset-3 transition-colors hover:text-mention-yellow-text-hover"
          >
            Alle Artikel ansehen
          </Link>
        </p>
      </div>
    </section>
  );
}
