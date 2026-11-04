import assert from "node:assert/strict";
import test from "node:test";

import { kitaIndexRelatedArticle, kiIndexListings } from "./catalog";
import {
  collectionWindowSentence,
  germanRoughDuration,
  kitaIndexDraft,
  rankingSpread,
  readingMinutesFromText,
} from "./zweisprachige-kitas-zuerich";
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
  assert.equal(kitaIndexDraft.methodology.length, 3);
  assert.equal(
    germanRoughDuration("2026-11-03T09:25:38.287Z", "2026-11-03T09:30:36.508Z"),
    "rund 5 Minuten",
  );
  assert.equal(
    kitaIndexDraft.methodology[0],
    "Am 3. November 2026 haben wir vier KI-Systemen – Claude (claude-sonnet-4-6), ChatGPT (gpt-5-search-api), Gemini (gemini-2.5-flash) und Perplexity (sonar) – die sechs Fragen oben gestellt, jede dreimal. Jede der 72 Abfragen war ein eigener Aufruf über die Schnittstelle des Anbieters, mit Websuche und ohne Gesprächsverlauf: Das System wusste bei keiner Antwort, was es vorher geantwortet hatte. Die Abfragen liefen innerhalb von rund 5 Minuten, teilweise gleichzeitig.",
  );
  assert.equal(
    kitaIndexDraft.methodology[1],
    "Als Empfehlung zählt, wenn ein System eine Kita als passende Antwort auf die Frage nennt, auch als Teil einer Liste. Wird sie nur erwähnt, etwa mit einem Vorbehalt, zählt das nicht. Pro Antwort zählt jede Marke höchstens einmal. Verschiedene Schreibweisen und Standorte derselben Marke haben wir zusammengeführt. Vier Nennungen, die «Akidemy / globegarden» in einem Atemzug nannten, ohne klar zu trennen, haben wir keiner der beiden Marken angerechnet. Die Empfehlungsquote ist der Anteil der 72 Antworten, in denen eine Kita empfohlen wurde.",
  );
  assert.equal(
    kitaIndexDraft.methodology[2],
    "Die drei Durchläufe zeigen, wie stark die Antworten auf dieselbe Frage schwanken – nicht, wie sie sich über Wochen verändern. Das zeigt erst der monatliche Vergleich. In den Chat-Apps derselben Anbieter kann dieselbe Frage zudem anders beantwortet werden, etwa weil dort Einstellungen oder frühere Gespräche mitspielen.",
  );
  assert.equal(
    collectionWindowSentence("2026-11-03T09:25:38.287Z", "2026-11-03T09:30:36.508Z", false),
    "Die Abfragen liefen innerhalb von rund 5 Minuten.",
  );
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
