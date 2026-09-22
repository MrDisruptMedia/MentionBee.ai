import { writeFileSync } from "node:fs";
import path from "node:path";

import { KNOWN_PUBLIC_ARTICLE_PATHS } from "@/content/glossary/known-articles";
import type { GlossaryEntry } from "@/content/glossary/types";
import { loadBlogIndex } from "@/lib/blog";
import { GLOSSARY_INDEX_PATH, glossaryCanonicalUrl, glossaryTermPath } from "@/lib/glossary/canonical";
import {
  buildGlossaryRegistryFile,
  clearGlossaryCache,
  loadAllGlossaryEntries,
} from "@/lib/glossary/registry";

const CONCEPT_KEY_RE = /^[A-Z][A-Z0-9_]+$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type GlossaryValidationIssue = {
  severity: "error" | "warning";
  file?: string;
  message: string;
};

function fileLabel(entry: GlossaryEntry): string {
  return `${entry.slug}.json`;
}

export function validateGlossaryEntries(entries: GlossaryEntry[]): GlossaryValidationIssue[] {
  const issues: GlossaryValidationIssue[] = [];
  const slugs = new Map<string, string>();
  const keys = new Map<string, string>();
  const keySet = new Set(entries.map((e) => e.conceptKey));

  for (const entry of entries) {
    const file = fileLabel(entry);

    if (!CONCEPT_KEY_RE.test(entry.conceptKey)) {
      issues.push({ severity: "error", file, message: `Invalid conceptKey "${entry.conceptKey}"` });
    }
    if (!SLUG_RE.test(entry.slug)) {
      issues.push({ severity: "error", file, message: `Invalid slug "${entry.slug}"` });
    }

    const prevSlug = slugs.get(entry.slug);
    if (prevSlug) {
      issues.push({ severity: "error", file, message: `Duplicate slug "${entry.slug}" (also ${prevSlug})` });
    } else {
      slugs.set(entry.slug, file);
    }

    const prevKey = keys.get(entry.conceptKey);
    if (prevKey) {
      issues.push({
        severity: "error",
        file,
        message: `Duplicate conceptKey "${entry.conceptKey}" (also ${prevKey})`,
      });
    } else {
      keys.set(entry.conceptKey, file);
    }

    if (!entry.shortDefinition.trim()) {
      issues.push({ severity: "error", file, message: "Missing shortDefinition" });
    }
    if (!entry.markdownBody.trim()) {
      issues.push({ severity: "error", file, message: "Missing markdownBody" });
    }
    if (!entry.seoTitle.trim()) {
      issues.push({ severity: "error", file, message: "Missing seoTitle" });
    }
    if (!entry.metaDescription.trim()) {
      issues.push({ severity: "error", file, message: "Missing metaDescription" });
    }
    if (entry.metaDescription.length > 170) {
      issues.push({
        severity: "warning",
        file,
        message: `metaDescription is ${entry.metaDescription.length} chars (aim ≤160–170)`,
      });
    }

    const expectedPath = glossaryTermPath(entry.slug);
    const expectedCanonical = glossaryCanonicalUrl(expectedPath);
    if (!expectedCanonical.startsWith("https://mentionbee.ai/ai-glossar/")) {
      issues.push({ severity: "error", file, message: `Canonical mismatch: ${expectedCanonical}` });
    }

    if (entry.status === "published") {
      if (!entry.publishedAt) {
        issues.push({ severity: "error", file, message: "Published entry missing publishedAt" });
      }
    }

    if (entry.relatedConceptKeys.includes(entry.conceptKey)) {
      issues.push({ severity: "error", file, message: "relatedConceptKeys must not include self" });
    }
    for (const key of entry.relatedConceptKeys) {
      if (!keySet.has(key)) {
        issues.push({ severity: "error", file, message: `relatedConceptKey does not resolve: ${key}` });
      }
    }

    for (const article of entry.relatedArticles) {
      const known =
        KNOWN_PUBLIC_ARTICLE_PATHS.includes(article.path) ||
        loadBlogIndex().articles.some((a) => a.canonicalPath === article.path);
      if (!known) {
        issues.push({
          severity: "error",
          file,
          message: `relatedArticle path is not in known public articles: ${article.path}`,
        });
      }
    }

    if (/ß/.test(`${entry.term}${entry.shortDefinition}${entry.markdownBody}`)) {
      issues.push({ severity: "warning", file, message: "Contains ß; Swiss copy uses ss" });
    }
  }

  return issues;
}

export function validateGlossaryWorkspace(): GlossaryValidationIssue[] {
  clearGlossaryCache();
  return validateGlossaryEntries(loadAllGlossaryEntries());
}

export function writePublishedGlossaryRegistry(cwd: string = process.cwd()): string {
  clearGlossaryCache();
  const registry = buildGlossaryRegistryFile();
  const outPath = path.join(cwd, "content/glossary/registry.json");
  writeFileSync(outPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
  return outPath;
}

export function glossaryIndexCanonical(): string {
  return glossaryCanonicalUrl(GLOSSARY_INDEX_PATH);
}
