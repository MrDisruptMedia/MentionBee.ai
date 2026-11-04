import assert from "node:assert/strict";
import test from "node:test";

import { kitaIndexRelatedArticle, kiIndexListings } from "./catalog";
import { kitaIndexDraft, rankingSpread, readingMinutesFromText } from "./zweisprachige-kitas-zuerich";
import { sitemapIncludesPath } from "../../app/sitemap";

test("der veröffentlichte Kita-Index behält die November-Zahlen", () => {
  assert.equal(kitaIndexDraft.providers[0]?.name, "KiddieLand");
  assert.equal(kitaIndexDraft.providers[0]?.recommendedCount, 54);
  assert.equal(kitaIndexDraft.providers[0]?.empfehlungsquote, 75);
  assert.equal(kitaIndexDraft.modelCount, 4);
  assert.equal(kitaIndexDraft.providers[0]?.modelsRecommending, 4);
  assert.equal(kitaIndexDraft.providers[0]?.modelNames, "Claude, ChatGPT, Gemini, Perplexity");
  assert.equal(
    kitaIndexDraft.providers.filter((row) => row.modelsRecommending === kitaIndexDraft.modelCount).length,
    11,
  );
  assert.equal(kitaIndexDraft.providers.filter((row) => row.recommendedCount > 0).length, 42);
  assert.equal(kitaIndexDraft.collectedLabel, "3. November 2026");
  assert.equal(kiIndexListings.length, 1);
  assert.equal(kiIndexListings[0]?.href, "/ki-index/zweisprachige-kitas-zuerich");
  assert.equal(kitaIndexRelatedArticle.href, "/blog/ki-suche-sichtbare-wettbewerber-wechseln");
  assert.equal(readingMinutesFromText(""), null);
  assert.equal(/Gesprächshistorie|persönliche Informationen/.test(kitaIndexDraft.methodology.join(" ")), false);
  assert.equal(sitemapIncludesPath("/ki-index"), true);
  assert.equal(sitemapIncludesPath("/ki-index/zweisprachige-kitas-zuerich"), true);
  assert.equal(kitaIndexDraft.spread.n, 42);
  assert.equal(kitaIndexDraft.spread.k, 11);
  assert.equal(kitaIndexDraft.spread.m, 31);
  assert.equal(kitaIndexDraft.spread.e, 25);
  assert.equal(
    kitaIndexDraft.spread.sentence,
    "31 der 42 empfohlenen Anbieter fehlen bei mindestens einem der vier KI-Systeme – 25 davon nennt nur ein einziges System. Welche Kitas man zu sehen bekommt, hängt also stark davon ab, welche KI man fragt.",
  );
  const withoutExclusive = rankingSpread(
    [{ modelsRecommending: 4 }, { modelsRecommending: 2 }].map((row, index) => ({
      rank: index + 1,
      id: String(index),
      name: String(index),
      href: null,
      recommendedCount: 1,
      empfehlungsquote: 1,
      barPercent: 1,
      modelsRecommending: row.modelsRecommending,
      modelNames: "",
    })),
    4,
  );
  assert.equal(withoutExclusive.e, 0);
  assert.equal(withoutExclusive.sentence.includes("davon nennt"), false);
});
