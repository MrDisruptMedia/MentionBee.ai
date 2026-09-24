import type { MetadataRoute } from "next";

import { GLOSSARY_INDEX_PATH, glossaryCanonicalUrl, glossaryTermPath } from "@/lib/glossary/canonical";
import { listPublishedGlossaryEntries } from "@/lib/glossary/registry";

export function glossarySitemapEntries(): MetadataRoute.Sitemap {
  const published = listPublishedGlossaryEntries();
  const index: MetadataRoute.Sitemap[number] = {
    url: glossaryCanonicalUrl(GLOSSARY_INDEX_PATH),
    lastModified: published.reduce<Date | undefined>((latest, entry) => {
      const raw = entry.updatedAt ?? entry.publishedAt;
      if (!raw) return latest;
      const date = new Date(raw);
      return !latest || date > latest ? date : latest;
    }, undefined),
  };

  const terms: MetadataRoute.Sitemap = published.map((entry) => ({
    url: glossaryCanonicalUrl(glossaryTermPath(entry.slug)),
    lastModified: entry.updatedAt
      ? new Date(entry.updatedAt)
      : entry.publishedAt
        ? new Date(entry.publishedAt)
        : undefined,
  }));

  return [index, ...terms];
}
