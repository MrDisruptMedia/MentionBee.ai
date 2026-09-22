import type { GlossaryEntry, GlossaryRegistryEntry } from "@/content/glossary/types";
import { glossaryUiCopy } from "@/content/glossary/ui-copy";
import {
  GLOSSARY_INDEX_PATH,
  glossaryCanonicalUrl,
  glossaryTermPath,
} from "@/lib/glossary/canonical";

export function glossaryIndexJsonLd(entries: GlossaryRegistryEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: glossaryUiCopy.indexH1,
    description: glossaryUiCopy.indexLead,
    url: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
    inLanguage: "de",
    hasDefinedTerm: entries.map((entry) => ({
      "@type": "DefinedTerm",
      name: entry.term,
      description: entry.shortDefinition,
      url: glossaryCanonicalUrl(entry.canonicalPath),
      inDefinedTermSet: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
    })),
  };
}

export function glossaryTermJsonLd(entry: GlossaryEntry) {
  const termUrl = glossaryCanonicalUrl(glossaryTermPath(entry.slug));
  const definedTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    url: termUrl,
    inLanguage: "de",
    inDefinedTermSet: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
    ...(entry.abbreviation ? { alternateName: [entry.abbreviation, ...entry.aliases] } : entry.aliases.length > 0
      ? { alternateName: entry.aliases }
      : {}),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: glossaryUiCopy.breadcrumbHome,
        item: glossaryCanonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: glossaryUiCopy.breadcrumbGlossary,
        item: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entry.term,
        item: termUrl,
      },
    ],
  };

  return [definedTerm, breadcrumb];
}
