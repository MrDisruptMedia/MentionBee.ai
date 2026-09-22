import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  GlossaryBreadcrumb,
  GlossaryRelatedArticles,
  GlossaryRelatedTerms,
} from "@/components/glossary/GlossaryChrome";
import { GlossaryOriginBadge } from "@/components/glossary/GlossaryOriginBadge";
import { getGlossaryAuthor } from "@/content/glossary/authors";
import { glossaryUiCopy } from "@/content/glossary/ui-copy";
import { glossaryCanonicalUrl, glossaryTermPath } from "@/lib/glossary/canonical";
import { formatGlossaryDate } from "@/lib/glossary/display";
import { glossaryTermJsonLd } from "@/lib/glossary/jsonld";
import {
  getPublishedGlossaryBySlug,
  listPublishedGlossaryEntries,
  resolveRelatedTerms,
} from "@/lib/glossary/registry";
import { renderGlossaryMarkdown } from "@/lib/glossary/render-markdown";

export const dynamicParams = false;

export function generateStaticParams() {
  return listPublishedGlossaryEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPublishedGlossaryBySlug(slug);
  if (!entry) {
    return { robots: { index: false, follow: false } };
  }
  const canonical = glossaryCanonicalUrl(glossaryTermPath(entry.slug));
  return {
    title: entry.seoTitle,
    description: entry.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: entry.seoTitle,
      description: entry.metaDescription,
      url: canonical,
      locale: "de_CH",
      type: "article",
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPublishedGlossaryBySlug(slug);
  if (!entry) notFound();

  const related = resolveRelatedTerms(entry);
  const author = getGlossaryAuthor(entry.authorId);
  const updated = formatGlossaryDate(entry.updatedAt);
  const jsonLd = glossaryTermJsonLd(entry);
  const bodyHtml = renderGlossaryMarkdown(entry.markdownBody);
  const aliases = entry.aliases.filter((alias) => alias.toLowerCase() !== entry.term.toLowerCase());

  return (
    <>
      {jsonLd.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <article className="mx-auto w-full max-w-3xl px-4 pb-20 pt-24 md:pt-28">
        <GlossaryBreadcrumb term={entry.term} />
        <header className="mt-6">
          <GlossaryOriginBadge origin={entry.termOrigin} />
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            {entry.term}
          </h1>
          {entry.abbreviation ? (
            <p className="mt-2 text-sm font-medium text-mention-gray">
              {glossaryUiCopy.abbreviationLabel}: {entry.abbreviation}
            </p>
          ) : null}
          <p className="mt-6 text-lg leading-relaxed text-mention-dark">{entry.shortDefinition}</p>
          {aliases.length > 0 ? (
            <p className="mt-3 text-sm text-mention-gray">
              {glossaryUiCopy.aliasesLabel}: {aliases.join(" · ")}
            </p>
          ) : null}
          <p className="mt-4 text-sm text-mention-gray">
            {author ? `${author.name}` : glossaryUiCopy.authorRoleFallback}
            {updated ? ` · ${glossaryUiCopy.updatedLabel} ${updated}` : null}
          </p>
        </header>

        <div
          className="glossary-body mt-10"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <GlossaryRelatedTerms terms={related.map((item) => ({ slug: item.slug, term: item.term }))} />
        <GlossaryRelatedArticles articles={entry.relatedArticles} />
      </article>
    </>
  );
}
