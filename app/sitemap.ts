import type { MetadataRoute } from "next";

import { PUBLISHED_ROUTES } from "@/content/published-routes";
import { MENTIONBEE_SITE_ORIGIN } from "@/lib/site-origin";

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: `${MENTIONBEE_SITE_ORIGIN}`, changeFrequency: "weekly", priority: 1 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/free-report`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/report`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/sample-report`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/faq`, changeFrequency: "monthly", priority: 0.75 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/impressum`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/agb`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${MENTIONBEE_SITE_ORIGIN}/datenschutzerklaerung`, changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicEntries: MetadataRoute.Sitemap = PUBLISHED_ROUTES.map((route) => ({
    url: `${MENTIONBEE_SITE_ORIGIN}${route.path.startsWith("/") ? route.path : `/${route.path}`}`,
    lastModified: route.publishedAt ? new Date(route.publishedAt) : now,
    changeFrequency: route.changeFrequency ?? "monthly",
    priority: route.priority ?? 0.7,
  }));

  return [...STATIC_ROUTES.map((e) => ({ ...e, lastModified: now })), ...dynamicEntries];
}

/** Used by Revenue OS production verification tests. */
export function sitemapIncludesPath(path: string): boolean {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return PUBLISHED_ROUTES.some((r) => r.path === normalized);
}
