import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { GLOSSARY_INDEX_PATH, glossaryCanonicalUrl, glossaryTermPath } from "./canonical";
import { glossaryIndexJsonLd, glossaryTermJsonLd } from "./jsonld";
import {
  getPublishedGlossaryBySlug,
  groupPublishedGlossaryByLetter,
  listPublishedGlossaryEntries,
  loadAllGlossaryEntries,
  toGlossaryRegistryEntry,
} from "./registry";
import { renderGlossaryMarkdown } from "./render-markdown";
import { validateGlossaryWorkspace } from "./validate";

describe("glossary V1", () => {
  it("has no validation errors", () => {
    const issues = validateGlossaryWorkspace().filter((i) => i.severity === "error");
    assert.equal(issues.length, 0, JSON.stringify(issues, null, 2));
  });

  it("publishes unique slugs and conceptKeys and hides drafts", () => {
    const all = loadAllGlossaryEntries();
    const published = listPublishedGlossaryEntries();
    const draft = all.find((e) => e.status === "draft");
    assert.ok(draft, "expected unpublished RAG draft");
    assert.equal(getPublishedGlossaryBySlug(draft.slug), null);
    assert.ok(!published.some((e) => e.slug === draft.slug));
    assert.equal(new Set(all.map((e) => e.slug)).size, all.length);
    assert.equal(new Set(all.map((e) => e.conceptKey)).size, all.length);
    assert.ok(published.length >= 15 && published.length <= 20);
    const mentionVsRec = published.find((e) => e.conceptKey === "MENTION_VS_RECOMMENDATION");
    assert.equal(mentionVsRec?.termOrigin, "emerging");
    const score = published.find((e) => e.conceptKey === "AI_VISIBILITY_SCORE");
    assert.equal(score?.termOrigin, "mentionbee");
    const asa = published.find((e) => e.conceptKey === "ASA");
    assert.equal(asa?.termOrigin, "mentionbee");
    assert.equal(getPublishedGlossaryBySlug("retrieval-augmented-generation"), null);
  });

  it("groups A–Z without empty letters and uses canonical URLs", () => {
    const groups = groupPublishedGlossaryByLetter();
    assert.ok(groups.length > 0);
    for (const group of groups) {
      assert.ok(group.entries.length > 0);
    }
    const sample = listPublishedGlossaryEntries()[0];
    assert.ok(sample);
    assert.equal(glossaryTermPath(sample.slug), `${GLOSSARY_INDEX_PATH}/${sample.slug}`);
    assert.equal(
      glossaryCanonicalUrl(glossaryTermPath(sample.slug)),
      `https://mentionbee.ai${GLOSSARY_INDEX_PATH}/${sample.slug}`,
    );
  });

  it("emits DefinedTermSet / DefinedTerm / BreadcrumbList JSON-LD", () => {
    const published = listPublishedGlossaryEntries();
    const index = glossaryIndexJsonLd(published.map(toGlossaryRegistryEntry));
    assert.equal(index["@type"], "DefinedTermSet");
    assert.ok(Array.isArray(index.hasDefinedTerm));
    assert.equal(index.hasDefinedTerm.length, published.length);

    const [term, breadcrumb] = glossaryTermJsonLd(published[0]);
    assert.equal(term["@type"], "DefinedTerm");
    assert.equal(breadcrumb["@type"], "BreadcrumbList");
    assert.equal("itemListElement" in breadcrumb ? breadcrumb.itemListElement.length : 0, 3);
  });

  it("renders a safe markdown subset", () => {
    const html = renderGlossaryMarkdown("## Titel\n\nText mit **fett** und *kursiv*.\n\n- eins\n");
    assert.match(html, /<h2>/);
    assert.match(html, /<strong>fett<\/strong>/);
    assert.match(html, /<em>kursiv<\/em>/);
    assert.match(html, /<li>/);
  });
});
