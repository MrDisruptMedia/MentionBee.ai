import Link from "next/link";

import { glossaryUiCopy } from "@/content/glossary/ui-copy";
import { GLOSSARY_INDEX_PATH, glossaryTermPath } from "@/lib/glossary/canonical";

export function GlossaryBreadcrumb({ term }: { term?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mention-gray">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="text-mention-dark/80 hover:text-primary">
            {glossaryUiCopy.breadcrumbHome}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          {term ? (
            <Link href={GLOSSARY_INDEX_PATH} className="text-mention-dark/80 hover:text-primary">
              {glossaryUiCopy.breadcrumbGlossary}
            </Link>
          ) : (
            <span className="text-mention-dark">{glossaryUiCopy.breadcrumbGlossary}</span>
          )}
        </li>
        {term ? (
          <>
            <li aria-hidden="true">/</li>
            <li className="text-mention-dark">{term}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}

export function GlossaryAzNav({ letters }: { letters: string[] }) {
  if (letters.length === 0) return null;
  return (
    <nav aria-label={glossaryUiCopy.azNavLabel} className="flex flex-wrap gap-2">
      {letters.map((letter) => (
        <a
          key={letter}
          href={`#letter-${encodeURIComponent(letter)}`}
          className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold text-mention-dark hover:border-primary hover:bg-mention-light"
        >
          {letter}
        </a>
      ))}
    </nav>
  );
}

export function GlossaryRelatedTerms({
  terms,
}: {
  terms: Array<{ slug: string; term: string }>;
}) {
  if (terms.length === 0) return null;
  return (
    <section className="mt-12">
      <h2 className="font-heading text-xl font-semibold text-mention-dark">
        {glossaryUiCopy.relatedTermsHeading}
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {terms.map((item) => (
          <li key={item.slug}>
            <Link
              href={glossaryTermPath(item.slug)}
              className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-mention-dark hover:border-primary hover:bg-mention-light"
            >
              {item.term}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GlossaryRelatedArticles({
  articles,
}: {
  articles: Array<{ title: string; path: string }>;
}) {
  if (articles.length === 0) return null;
  return (
    <nav className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6" aria-label={glossaryUiCopy.relatedArticlesHeading}>
      <h2 className="font-heading text-lg font-semibold text-mention-dark">
        {glossaryUiCopy.relatedArticlesHeading}
      </h2>
      <ul className="mt-4 space-y-2">
        {articles.map((article) => (
          <li key={article.path}>
            <Link
              href={article.path}
              className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
