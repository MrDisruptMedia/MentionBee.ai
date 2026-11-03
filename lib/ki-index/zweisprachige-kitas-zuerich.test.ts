import assert from "node:assert/strict";
import test from "node:test";

import { kitaIndexRelatedArticle, kiIndexListings } from "./catalog";
import { kitaIndexDraft, readingMinutesFromText } from "./zweisprachige-kitas-zuerich";
import { sitemapIncludesPath } from "../../app/sitemap";

test("der veröffentlichte Kita-Index behält die November-Zahlen", () => {
  assert.equal(kitaIndexDraft.providers[0]?.name, "KiddieLand");
  assert.equal(kitaIndexDraft.providers[0]?.recommendedCount, 54);
  assert.equal(kitaIndexDraft.providers[0]?.empfehlungsquote, 75);
  assert.equal(kitaIndexDraft.providers.filter((row) => row.recommendedCount > 0).length, 42);
  assert.equal(kitaIndexDraft.collectedLabel, "3. November 2026");
  assert.equal(kiIndexListings.length, 1);
  assert.equal(kiIndexListings[0]?.href, "/ki-index/zweisprachige-kitas-zuerich");
  assert.equal(kitaIndexRelatedArticle.href, "/blog/ki-suche-sichtbare-wettbewerber-wechseln");
  assert.equal(readingMinutesFromText(""), null);
  assert.equal(/Gesprächshistorie|persönliche Informationen/.test(kitaIndexDraft.methodology.join(" ")), false);
  assert.equal(sitemapIncludesPath("/ki-index"), true);
  assert.equal(sitemapIncludesPath("/ki-index/zweisprachige-kitas-zuerich"), true);
});
