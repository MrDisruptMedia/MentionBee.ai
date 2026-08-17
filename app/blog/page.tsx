import type { Metadata } from "next";
import Link from "next/link";

import { loadBlogIndex } from "@/lib/blog";
import { formatDeDate } from "@/lib/blog-seo";
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
  const index = loadBlogIndex();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">Blog</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          AI Visibility &amp; AI Search
        </h1>
        <p className="mt-3 text-lg text-mention-gray">
          Praktische Artikel dazu, wie Marken in ChatGPT, Claude, Gemini und Perplexity sichtbar
          werden — und was wirklich hilft.
        </p>
      </header>

      {index.articles.length === 0 ? (
        <p className="mx-auto mt-10 max-w-2xl text-mention-gray">Noch keine veröffentlichten Artikel.</p>
      ) : (
        <ul className="mx-auto mt-10 max-w-2xl space-y-8">
          {index.articles.map((a) => (
            <li key={a.publicSlug} className="border-b border-zinc-200 pb-8 last:border-0">
              {a.contentTypeLabel ? (
                <p className="mb-2 text-xs font-semibold tracking-wide text-mention-gray uppercase">
                  {a.contentTypeLabel}
                </p>
              ) : null}
              <Link
                href={a.canonicalPath}
                className="font-heading text-xl font-semibold text-mention-dark no-underline hover:text-mention-gray sm:text-2xl"
              >
                {a.title}
              </Link>
              <p className="mt-2 text-sm text-mention-gray">{formatDeDate(a.publishedAt)}</p>
              {a.description ? (
                <p className="mt-2 text-base leading-relaxed text-mention-gray">{a.description}</p>
              ) : null}
              {a.tags.length > 0 ? (
                <p className="mt-3 flex flex-wrap gap-2 text-xs text-mention-gray">
                  {a.tags.map((t) => (
                    <span
                      key={t.id}
                      className="rounded-full bg-mention-light px-2.5 py-1 font-medium"
                    >
                      {t.label}
                    </span>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      <p className="mx-auto mt-12 max-w-2xl text-sm text-mention-gray">
        Mehr erfahren auf{" "}
        <Link href="/" className="font-medium text-mention-dark underline decoration-primary">
          {SITE_ORIGIN.replace("https://", "")}
        </Link>
        .
      </p>
    </div>
  );
}
