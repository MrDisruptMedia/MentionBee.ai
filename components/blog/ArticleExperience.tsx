import "./article-body.css";

import Image from "next/image";
import Link from "next/link";

import type { PublicArticle } from "@/content/blog/types";
import { getBlogImages } from "@/lib/blog-images";
import { buildBlogPostingJsonLd, formatDeDate } from "@/lib/blog-seo";

export function ArticleExperience({ article }: { article: PublicArticle }) {
  const jsonLd = buildBlogPostingJsonLd(article);
  const images = getBlogImages(article.publicSlug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-article-root mx-auto w-full min-w-0 max-w-6xl px-4 py-10 md:py-14">
        <article className="mx-auto w-full min-w-0 max-w-[42rem]">
          <header className="mb-8 flex flex-col">
            <div className="order-1">
              {article.contentTypeLabel ? (
                <p className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-gray-900 uppercase">
                  {article.contentTypeLabel}
                </p>
              ) : null}
              {article.tags.length > 0 ? (
                <p className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-mention-gray uppercase">
                  {article.tags.map((t) => (
                    <span key={t.id}>{t.label}</span>
                  ))}
                </p>
              ) : null}
            </div>
            <h1 className="order-2 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
              {article.h1}
            </h1>
            {article.lead ? (
              <p className="order-4 mt-7 text-lg leading-relaxed text-mention-gray md:order-3 md:mt-4 md:text-xl">
                {article.lead}
              </p>
            ) : null}
            <div className="order-5 mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mention-gray md:order-4">
              <span>
                Von{" "}
                <Link
                  href={`/autor/${article.author.slug}`}
                  className="font-medium text-mention-dark no-underline hover:text-mention-gray"
                >
                  {article.author.name}
                </Link>
              </span>
              <span>{formatDeDate(article.publishedAt)}</span>
              {article.updatedAt && article.updatedAt !== article.publishedAt ? (
                <span>Aktualisiert {formatDeDate(article.updatedAt)}</span>
              ) : null}
              <span>{article.readingMinutes} Min. Lesezeit</span>
            </div>
            {images ? (
              <div className="relative order-3 mt-6 aspect-video w-full min-w-0 overflow-hidden rounded-xl bg-mention-light md:order-5">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt ?? images.alt}
                  width={images.hero.width}
                  height={images.hero.height}
                  sizes="(max-width: 768px) 100vw, 42rem"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            ) : null}
          </header>

          {article.toc.length > 0 ? (
            <nav
              id="inhalt"
              aria-label="Inhaltsverzeichnis"
              className="mb-toc-nav mb-8 scroll-mt-24 rounded-xl border border-zinc-200 bg-mention-light px-4 py-4"
            >
              <p className="mb-toc-label mb-2 text-sm font-semibold tracking-wide text-mention-gray uppercase">
                Inhalt
              </p>
              <ol className="mb-toc-list m-0 list-decimal space-y-1.5 pl-5 text-sm">
                {article.toc.map((h) => (
                  <li key={h.id} className="text-sm leading-snug">
                    <a
                      href={`#${h.id}`}
                      className="mb-toc-link text-sm font-medium text-mention-dark no-underline"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div
            className="mb-article-body"
            data-reader-hash={article.readerHash}
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />

          {article.sources.length > 0 ? (
            <section className="mt-10 border-t border-zinc-200 pt-6" aria-label="Quellen">
              <h2 className="!text-xl !font-semibold">Quellen und weiterführende Informationen</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mention-gray">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-medium text-mention-dark underline decoration-primary underline-offset-2"
                    >
                      {s.publisher ? `${s.publisher}: ` : ""}
                      {s.title}
                    </a>
                    {s.sectionHint ? (
                      <span className="text-mention-gray"> · Bezug: {s.sectionHint}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <aside
            className="mt-10 rounded-2xl border border-zinc-200 bg-mention-light px-6 py-7"
            aria-label="Kostenlosen Report anfordern"
          >
            <h2 className="!m-0 !border-0 !p-0 !text-xl !font-bold text-mention-dark">
              Finde heraus, ob KI deine Marke empfiehlt.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-mention-gray md:text-base">
              In 2 Minuten anfordern – Ergebnis per E-Mail.
            </p>
            <Link
              href="/free-report"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 no-underline shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark hover:shadow-md"
            >
              Kostenlosen Report anfordern →
            </Link>
          </aside>

          <section className="mt-10 border-t border-zinc-200 pt-8">
            <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">Autor</p>
            <h2 className="!mt-2 !text-xl !font-semibold">{article.author.name}</h2>
            {article.author.role ? (
              <p className="text-sm text-mention-gray">{article.author.role}</p>
            ) : null}
            {article.author.shortBio ? (
              <p className="mt-3 text-sm leading-relaxed text-mention-dark md:text-base">
                {article.author.shortBio}
              </p>
            ) : null}
            <Link
              href={`/autor/${article.author.slug}`}
              className="mt-3 inline-block text-sm font-medium text-mention-dark underline decoration-primary underline-offset-2"
            >
              Mehr von {article.author.name}
            </Link>
          </section>

          {article.related.length > 0 ? (
            <section className="mt-10 border-t border-zinc-200 pt-8">
              <h2 className="!text-xl !font-semibold">Das könnte dich auch interessieren</h2>
              <ul className="mt-4 space-y-4">
                {article.related.map((r) => (
                  <li key={r.publicPath}>
                    <Link
                      href={r.publicPath}
                      className="text-base font-semibold text-mention-dark no-underline hover:text-mention-gray"
                    >
                      {r.title}
                    </Link>
                    {r.excerpt ? (
                      <p className="mt-1 text-sm leading-relaxed text-mention-gray">{r.excerpt}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </div>
    </>
  );
}
