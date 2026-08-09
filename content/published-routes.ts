/**
 * Revenue OS maintains this registry when publishing allowlisted content.
 * Sitemap reads from here — do not edit manually during autonomous runs.
 */
export type PublishedRoute = {
  path: string;
  changeFrequency?: "weekly" | "monthly" | "yearly";
  priority?: number;
  publishedAt?: string;
};

export const PUBLISHED_ROUTES: PublishedRoute[] = [];
