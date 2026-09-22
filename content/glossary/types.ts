/**
 * Glossary V1 content model (publication layer).
 * Knowledge identity = conceptKey. UI labels live in ui-copy.ts.
 */

export const GLOSSARY_SCHEMA_VERSION = 1 as const;
export const GLOSSARY_CONTENT_TYPE = "glossary" as const;
export const GLOSSARY_LOCALE_DE = "de" as const;

/** established = industry-standard; emerging = used but not settled; mentionbee = product-specific. */
export type GlossaryTermOrigin = "established" | "emerging" | "mentionbee";

export type GlossaryPublicationStatus = "published" | "draft";

export type GlossaryRelatedArticle = {
  title: string;
  path: string;
};

export type GlossarySource = {
  title: string;
  url?: string;
  publisher?: string;
  note?: string;
};

export type GlossaryEntry = {
  schemaVersion: typeof GLOSSARY_SCHEMA_VERSION;
  contentType: typeof GLOSSARY_CONTENT_TYPE;
  locale: typeof GLOSSARY_LOCALE_DE;
  conceptKey: string;
  slug: string;
  term: string;
  shortTerm?: string;
  abbreviation?: string;
  aliases: string[];
  shortDefinition: string;
  termOrigin: GlossaryTermOrigin;
  markdownBody: string;
  seoTitle: string;
  metaDescription: string;
  relatedConceptKeys: string[];
  relatedArticles: GlossaryRelatedArticle[];
  sources?: GlossarySource[];
  status: GlossaryPublicationStatus;
  publishedAt: string | null;
  updatedAt: string | null;
  authorId: string;
};

/** Slim registry row for sitemap, index, ContentEngine lookup. */
export type GlossaryRegistryEntry = {
  conceptKey: string;
  slug: string;
  term: string;
  abbreviation?: string;
  aliases: string[];
  shortDefinition: string;
  canonicalPath: string;
  relatedConceptKeys: string[];
  relatedArticlePaths: string[];
  termOrigin: GlossaryTermOrigin;
  status: GlossaryPublicationStatus;
  publishedAt: string | null;
  updatedAt: string | null;
};

export type GlossaryRegistryFile = {
  schemaVersion: 1;
  locale: typeof GLOSSARY_LOCALE_DE;
  generatedAt: string;
  source: "mentionbee-website/content/glossary";
  entries: GlossaryRegistryEntry[];
};
