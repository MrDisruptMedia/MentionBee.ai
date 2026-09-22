import { MENTIONBEE_SITE_ORIGIN } from "@/lib/site-origin";

export const GLOSSARY_INDEX_PATH = "/ai-glossar";

export function glossaryTermPath(slug: string): string {
  return `${GLOSSARY_INDEX_PATH}/${slug}`;
}

export function glossaryCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${MENTIONBEE_SITE_ORIGIN}${normalized}`;
}
