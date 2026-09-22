import type { Metadata } from "next";

import Link from "next/link";

import { GlossaryAzNav, GlossaryBreadcrumb } from "@/components/glossary/GlossaryChrome";
import { glossaryUiCopy } from "@/content/glossary/ui-copy";
import { GLOSSARY_INDEX_PATH, glossaryCanonicalUrl, glossaryTermPath } from "@/lib/glossary/canonical";
import { glossaryIndexJsonLd } from "@/lib/glossary/jsonld";
import {
  groupPublishedGlossaryByLetter,
  listPublishedGlossaryEntries,
  toGlossaryRegistryEntry,
} from "@/lib/glossary/registry";

export const metadata: Metadata = {
  title: glossaryUiCopy.indexSeoTitle,
  description: glossaryUiCopy.indexMetaDescription,
  alternates: { canonical: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH) },
  robots: { index: true, follow: true },
  openGraph: {
    title: glossaryUiCopy.indexSeoTitle,
    description: glossaryUiCopy.indexMetaDescription,
    url: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
    locale: "de_CH",
    type: "website",
  },
};

export default function GlossaryIndexPage() {
  const published = listPublishedGlossaryEntries();
  const groups = groupPublishedGlossaryByLetter(published);
  const jsonLd = glossaryIndexJsonLd(published.map(toGlossaryRegistryEntry));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-zinc-200/80 bg-white pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto w-full max-w-3xl px-4">
          <GlossaryBreadcrumb />
          <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            {glossaryUiCopy.indexH1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-mention-gray">{glossaryUiCopy.indexLead}</p>
          <div className="mt-8">
            <GlossaryAzNav letters={groups.map((group) => group.letter)} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
        {published.length === 0 ? (
          <p className="text-mention-gray">{glossaryUiCopy.emptyIndex}</p>
        ) : (
          groups.map((group) => (
            <section key={group.letter} id={`letter-${group.letter}`} className="mb-8 scroll-mt-28 last:mb-0">
              <h2 className="font-heading text-2xl font-semibold text-mention-dark">{group.letter}</h2>
              <ul className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
                {group.entries.map((entry) => (
                  <li key={entry.slug} className="px-5 py-4">
                    <Link
                      href={glossaryTermPath(entry.slug)}
                      className="block text-mention-dark no-underline hover:text-primary"
                    >
                      <p className="font-heading text-lg font-semibold">
                        {entry.term}
                        {entry.abbreviation ? (
                          <span className="ml-2 text-sm font-medium text-mention-gray">
                            {entry.abbreviation}
                          </span>
                        ) : null}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mention-gray">{entry.shortDefinition}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </>
  );
}
