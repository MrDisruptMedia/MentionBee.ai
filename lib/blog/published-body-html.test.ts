import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { renderPublicArticleHtml } from "../../../AI-Visibility-Report/lib/revenue-os/content-publishing/enhance-article-html";

const blogDir = path.resolve(import.meta.dirname, "../../content/blog");

type PublishedArticle = {
  editorialSlug: string;
  publicSlug: string;
  markdownBody: string;
  bodyHtml: string;
  lead: string | null;
  sources: unknown[];
};

describe("published blog HTML matches the current renderer", () => {
  const files = readdirSync(blogDir).filter(
    (name) => name.endsWith(".json") && name !== "index.json" && name !== "image-manifest.json",
  );

  for (const name of files) {
    const article = JSON.parse(readFileSync(path.join(blogDir, name), "utf8")) as PublishedArticle;
    it(article.publicSlug, () => {
      // Lead, slug, and sources are the values the publisher already stored.
      // The one-argument call re-derives the lead and does not match published HTML.
      const rendered = renderPublicArticleHtml(article.markdownBody, {
        sourceSlug: article.editorialSlug,
        hideBodySources: article.sources.length > 0,
        promotedLead: article.lead,
      }).html;
      assert.equal(rendered, article.bodyHtml, article.publicSlug);
    });
  }
});
