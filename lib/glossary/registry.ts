import fs from "node:fs";
import path from "node:path";

import { KNOWN_PUBLIC_ARTICLE_PATHS } from "@/content/glossary/known-articles";
import {
  GLOSSARY_CONTENT_TYPE,
  GLOSSARY_LOCALE_DE,
  GLOSSARY_SCHEMA_VERSION,
  type GlossaryEntry,
  type GlossaryRegistryEntry,
  type GlossaryRegistryFile,
} from "@/content/glossary/types";
import { glossaryTermPath } from "@/lib/glossary/canonical";

const ENTRIES_DIR = path.join(process.cwd(), "content/glossary/entries");

function isGlossaryEntry(value: unknown): value is GlossaryEntry {
  if (!value || typeof value !== "object") return false;
  const rec = value as Partial<GlossaryEntry>;
  return (
    rec.schemaVersion === GLOSSARY_SCHEMA_VERSION &&
    rec.contentType === GLOSSARY_CONTENT_TYPE &&
    rec.locale === GLOSSARY_LOCALE_DE &&
    typeof rec.conceptKey === "string" &&
    typeof rec.slug === "string" &&
    typeof rec.term === "string" &&
    typeof rec.shortDefinition === "string" &&
    typeof rec.markdownBody === "string"
  );
}

let cache: GlossaryEntry[] | null = null;

export function clearGlossaryCache(): void {
  cache = null;
}

export function loadAllGlossaryEntries(): GlossaryEntry[] {
  if (cache) return cache;
  if (!fs.existsSync(ENTRIES_DIR)) {
    cache = [];
    return cache;
  }
  const files = fs.readdirSync(ENTRIES_DIR).filter((name) => name.endsWith(".json"));
  const entries: GlossaryEntry[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(ENTRIES_DIR, file), "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!isGlossaryEntry(parsed)) {
      throw new Error(`Invalid glossary entry: ${file}`);
    }
    const expectedName = `${parsed.slug}.json`;
    if (file !== expectedName) {
      throw new Error(`Glossary filename "${file}" must match slug "${expectedName}"`);
    }
    entries.push(parsed);
  }
  cache = entries;
  return entries;
}

export function listPublishedGlossaryEntries(): GlossaryEntry[] {
  return loadAllGlossaryEntries()
    .filter((e) => e.status === "published")
    .sort((a, b) => a.term.localeCompare(b.term, "de"));
}

export function getPublishedGlossaryBySlug(slug: string): GlossaryEntry | null {
  return listPublishedGlossaryEntries().find((e) => e.slug === slug) ?? null;
}

export function getGlossaryByConceptKey(conceptKey: string): GlossaryEntry | null {
  return loadAllGlossaryEntries().find((e) => e.conceptKey === conceptKey) ?? null;
}

export function toGlossaryRegistryEntry(entry: GlossaryEntry): GlossaryRegistryEntry {
  return {
    conceptKey: entry.conceptKey,
    slug: entry.slug,
    term: entry.term,
    ...(entry.abbreviation ? { abbreviation: entry.abbreviation } : {}),
    aliases: entry.aliases,
    shortDefinition: entry.shortDefinition,
    canonicalPath: glossaryTermPath(entry.slug),
    relatedConceptKeys: entry.relatedConceptKeys,
    relatedArticlePaths: entry.relatedArticles.map((a) => a.path),
    termOrigin: entry.termOrigin,
    status: entry.status,
    publishedAt: entry.publishedAt,
    updatedAt: entry.updatedAt,
  };
}

export function buildGlossaryRegistryFile(): GlossaryRegistryFile {
  const entries = listPublishedGlossaryEntries().map(toGlossaryRegistryEntry);
  const generatedAt =
    entries
      .map((e) => e.updatedAt || e.publishedAt || "")
      .filter(Boolean)
      .sort()
      .at(-1) || "2026-09-22T12:00:00.000Z";
  return {
    schemaVersion: 1,
    locale: GLOSSARY_LOCALE_DE,
    generatedAt,
    source: "mentionbee-website/content/glossary",
    entries,
  };
}

export function groupPublishedGlossaryByLetter(
  entries: GlossaryEntry[] = listPublishedGlossaryEntries(),
): Array<{ letter: string; entries: GlossaryEntry[] }> {
  const map = new Map<string, GlossaryEntry[]>();
  for (const entry of entries) {
    const first = entry.term.trim().charAt(0);
    const letter = /[0-9]/.test(first) ? "#" : first.toLocaleUpperCase("de-DE");
    const list = map.get(letter) ?? [];
    list.push(entry);
    map.set(letter, list);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "de"))
    .map(([letter, group]) => ({ letter, entries: group }));
}

export function resolveRelatedTerms(entry: GlossaryEntry): GlossaryEntry[] {
  const published = listPublishedGlossaryEntries();
  return entry.relatedConceptKeys
    .map((key) => published.find((e) => e.conceptKey === key))
    .filter((e): e is GlossaryEntry => e !== undefined && e.slug !== entry.slug);
}

export function isKnownPublicArticlePath(articlePath: string): boolean {
  return KNOWN_PUBLIC_ARTICLE_PATHS.includes(articlePath);
}
