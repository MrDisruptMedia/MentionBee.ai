/** Canonical public origin for MentionBee marketing site (apex, no www). */
import { MENTIONBEE_SITE_ORIGIN } from "@/lib/site-origin";

export const SITE_ORIGIN = MENTIONBEE_SITE_ORIGIN;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}

/** Non-www HTTPS canonical. Homepage has no trailing slash. */
export function canonicalUrl(path: string = "/"): string {
  if (!path || path === "/") return SITE_ORIGIN;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p.replace(/\/+$/, "")}`;
}
