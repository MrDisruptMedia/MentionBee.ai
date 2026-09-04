import { readFileSync, existsSync, readdirSync } from "fs";
import path from "path";
import type { PublicArticle, PublicArticleIndex } from "@/content/blog/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function loadBlogIndex(): PublicArticleIndex {
  const file = path.join(BLOG_DIR, "index.json");
  if (!existsSync(file)) {
    return { schemaVersion: 1, generatedAt: new Date(0).toISOString(), articles: [] };
  }
  return JSON.parse(readFileSync(file, "utf8")) as PublicArticleIndex;
}

/** Latest published posts from the public blog index (source of truth). */
export function getLatestPublishedArticles(limit: number): PublicArticle[] {
  const slugs = [...loadBlogIndex().articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit)
    .map((a) => a.publicSlug);

  return slugs
    .map((slug) => getPublicArticleBySlug(slug))
    .filter((article): article is PublicArticle => article !== null);
}

export function listPublicArticles(): PublicArticle[] {
  if (!existsSync(BLOG_DIR)) return [];
  return readdirSync(BLOG_DIR)
    .filter(
      (f) =>
        f.endsWith(".json") && f !== "index.json" && f !== "image-manifest.json",
    )
    .map((f) => JSON.parse(readFileSync(path.join(BLOG_DIR, f), "utf8")) as PublicArticle)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPublicArticleBySlug(publicSlug: string): PublicArticle | null {
  const file = path.join(BLOG_DIR, `${publicSlug}.json`);
  if (!existsSync(file)) return null;
  return JSON.parse(readFileSync(file, "utf8")) as PublicArticle;
}

export function getAuthorFromArticles(authorSlug: string): {
  author: PublicArticle["author"];
  articles: PublicArticle[];
} | null {
  const articles = listPublicArticles().filter((a) => a.author.slug === authorSlug);
  if (articles.length === 0) return null;
  return { author: articles[0].author, articles };
}

/** Default profile photo for known authors (marketing public path). */
export function authorProfileImageSrc(
  author: Pick<PublicArticle["author"], "slug" | "profileImage">,
): string | null {
  if (author.profileImage) return author.profileImage;
  if (author.slug === "olaf-kunz") return "/images/autor-olaf-kunz.png";
  return null;
}

export type RelatedArticleCardData = {
  publicSlug: string;
  canonicalPath: string;
  title: string;
  description?: string;
  publishedAt: string;
  contentTypeLabel: string | null;
};

/** Enrich related stubs with index fields needed for BlogArticleCard. */
export function resolveRelatedArticleCards(
  related: PublicArticle["related"],
): RelatedArticleCardData[] {
  const byPath = new Map(
    loadBlogIndex().articles.map((a) => [a.canonicalPath, a] as const),
  );
  const out: RelatedArticleCardData[] = [];
  for (const r of related) {
    const entry = byPath.get(r.publicPath);
    const publicSlug =
      entry?.publicSlug ||
      (r.publicPath.startsWith("/blog/")
        ? r.publicPath.slice("/blog/".length)
        : "");
    if (!publicSlug) continue;
    out.push({
      publicSlug,
      canonicalPath: r.publicPath,
      title: r.title || entry?.title || publicSlug,
      description: r.excerpt || entry?.description,
      publishedAt: entry?.publishedAt || new Date(0).toISOString(),
      contentTypeLabel: entry?.contentTypeLabel ?? null,
    });
  }
  return out;
}
