import type { MetadataRoute } from "next";

import { PUBLISHED_ROUTES } from "@/content/published-routes";
import { STUDY_DATE_PUBLISHED } from "@/content/research/ai-visibility-2026";
import { getAuthorFromArticles, loadBlogIndex } from "@/lib/blog";
import { GLOSSARY_INDEX_PATH, glossaryTermPath } from "@/lib/glossary/canonical";
import { glossarySitemapEntries } from "@/lib/glossary/sitemap-entries";
import { listPublishedGlossaryEntries } from "@/lib/glossary/registry";
import { MENTIONBEE_SITE_ORIGIN } from "@/lib/site-origin";

function siteUrl(path: string): string {
  if (!path || path === "/") return MENTIONBEE_SITE_ORIGIN;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${MENTIONBEE_SITE_ORIGIN}${p}`;
}

function contentDate(raw: string | null | undefined): Date | undefined {
  if (!raw) return undefined;
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function latestContentDate(
  items: Array<{ updatedAt?: string | null; publishedAt?: string | null }>,
): Date | undefined {
  let latest: Date | undefined;
  for (const item of items) {
    const date = contentDate(item.updatedAt || item.publishedAt);
    if (date && (!latest || date > latest)) latest = date;
  }
  return latest;
}

function sitemapEntry(path: string, lastModified?: Date): MetadataRoute.Sitemap[number] {
  return lastModified ? { url: siteUrl(path), lastModified } : { url: siteUrl(path) };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blog = loadBlogIndex();
  const author = getAuthorFromArticles("olaf-kunz");

  const staticEntries: MetadataRoute.Sitemap = [
    sitemapEntry("/"),
    sitemapEntry("/free-report"),
    sitemapEntry("/report"),
    sitemapEntry("/sample-report"),
    sitemapEntry("/faq"),
    sitemapEntry("/blog", latestContentDate(blog.articles)),
    sitemapEntry("/studie/ai-visibility-2026", contentDate(STUDY_DATE_PUBLISHED)),
    sitemapEntry("/autor/olaf-kunz", latestContentDate(author?.articles ?? [])),
    sitemapEntry("/impressum"),
    sitemapEntry("/agb"),
    sitemapEntry("/datenschutzerklaerung"),
  ];

  const compareEntries: MetadataRoute.Sitemap = PUBLISHED_ROUTES.map((route) =>
    sitemapEntry(route.path, contentDate(route.publishedAt)),
  );

  const blogEntries: MetadataRoute.Sitemap = blog.articles.map((article) =>
    sitemapEntry(article.canonicalPath, contentDate(article.updatedAt || article.publishedAt)),
  );

  return [...staticEntries, ...compareEntries, ...blogEntries, ...glossarySitemapEntries()];
}

/** Used by Revenue OS production verification tests. */
export function sitemapIncludesPath(path: string): boolean {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (PUBLISHED_ROUTES.some((r) => r.path === normalized)) return true;
  if (normalized === "/blog" || normalized === "/autor/olaf-kunz") return true;
  if (loadBlogIndex().articles.some((a) => a.canonicalPath === normalized)) return true;
  if (normalized === GLOSSARY_INDEX_PATH) return true;
  if (listPublishedGlossaryEntries().some((e) => glossaryTermPath(e.slug) === normalized)) return true;
  return glossarySitemapEntries().some((entry) => entry.url === `${MENTIONBEE_SITE_ORIGIN}${normalized}`);
}
