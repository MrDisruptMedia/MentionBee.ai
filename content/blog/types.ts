/**
 * PublicArticle — ready-to-render blog content for the marketing site.
 * Produced by the engine PublicArticle materializer (Phase 1: one-shot copy).
 */

export type PublicArticleAuthor = {
  id: string;
  name: string;
  slug: string;
  role?: string;
  shortBio?: string;
  profileImage?: string | null;
};

export type PublicArticleTag = {
  id: string;
  label: string;
  slug?: string;
};

export type PublicArticleHero = {
  status?: string;
  src?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
};

export type PublicArticleSource = {
  title: string;
  publisher?: string;
  url: string;
  displayMode?: string;
  sourceType?: string;
  sectionHint?: string;
};

export type PublicArticleRelated = {
  title: string;
  publicPath: string;
  excerpt?: string;
};

export type PublicArticleTocEntry = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type PublicArticle = {
  schemaVersion: 1;
  contentId: string;
  editorialSlug: string;
  publicSlug: string;
  canonicalPath: string;
  title: string;
  h1: string;
  description: string;
  markdownBody: string;
  bodyHtml: string;
  lead: string | null;
  readerHash: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt: string | null;
  language: "de";
  contentTypeLabel: string | null;
  author: PublicArticleAuthor;
  tags: PublicArticleTag[];
  hero: PublicArticleHero | null;
  sources: PublicArticleSource[];
  related: PublicArticleRelated[];
  toc: PublicArticleTocEntry[];
};

export type PublicArticleIndexEntry = {
  publicSlug: string;
  canonicalPath: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string | null;
  contentTypeLabel: string | null;
  tags: PublicArticleTag[];
};

export type PublicArticleIndex = {
  schemaVersion: 1;
  generatedAt: string;
  articles: PublicArticleIndexEntry[];
};
