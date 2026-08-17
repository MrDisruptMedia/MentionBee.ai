import { SITE_ORIGIN, absoluteUrl } from "@/lib/site";
import type { PublicArticle } from "@/content/blog/types";

export function buildBlogPostingJsonLd(article: PublicArticle): Record<string, unknown> {
  const url = absoluteUrl(article.canonicalPath);
  const authorUrl = absoluteUrl(`/autor/${article.author.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "MentionBee",
            item: SITE_ORIGIN,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.h1,
            item: url,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: article.h1,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        inLanguage: "de-CH",
        author: {
          "@type": "Person",
          name: article.author.name,
          url: authorUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "MentionBee",
          url: SITE_ORIGIN,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/mentionbee-logo-transparent.png"),
          },
        },
        articleBody: article.markdownBody,
        keywords: article.tags.map((t) => t.label).join(", "),
      },
    ],
  };
}

export function formatDeDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("de-CH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}
