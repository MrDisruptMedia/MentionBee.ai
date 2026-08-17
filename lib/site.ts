/** Canonical public origin for MentionBee marketing site (apex, no www). */
import { MENTIONBEE_SITE_ORIGIN } from "@/lib/site-origin";

export const SITE_ORIGIN = MENTIONBEE_SITE_ORIGIN;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}
