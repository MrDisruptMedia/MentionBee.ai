/**
 * Editorial classification for Glossary V1 candidates.
 * A = central MentionBee / buyer concept
 * B = useful supporting concept
 * C = too generic / weak relevance for this glossary
 *
 * Report-app labels (PKI, MSS, visibility classes) stay aligned in wording
 * but are not a runtime dependency. Source:
 * AI-Visibility-Report/lib/i18n/report-terminology.ts
 */
export const glossaryCandidateClassification = {
  published: {
    AI_VISIBILITY: { grade: "A", reason: "Editorial center of MentionBee." },
    GENERATIVE_ENGINE_OPTIMIZATION: { grade: "A", reason: "Buyer-facing practice term next to AI Visibility." },
    AI_SEARCH: { grade: "B", reason: "Context for how customers find companies via AI." },
    AI_RECOMMENDATION: { grade: "A", reason: "Core buyer outcome." },
    MENTION: { grade: "A", reason: "Needed to separate presence from recommendation." },
    MENTION_VS_RECOMMENDATION: { grade: "A", reason: "Canonical MentionBee distinction." },
    AI_VISIBILITY_AUDIT: { grade: "A", reason: "Product-relevant buyer decision." },
    AI_VISIBILITY_SCORE: { grade: "A", reason: "Product metric; must be marked MentionBee-specific." },
    ASA: { grade: "A", reason: "MentionBee measurement layer; must not look like an industry standard." },
    SHARE_OF_VOICE: { grade: "B", reason: "Established metric applied to AI answers." },
    PROMPT: { grade: "B", reason: "Needed to explain measurement and buyer questions." },
    LARGE_LANGUAGE_MODEL: { grade: "B", reason: "Minimum model literacy without encyclopedia drift." },
    ENTITY: { grade: "B", reason: "Connects GEO, schema and wrong-context mentions." },
    STRUCTURED_DATA: { grade: "B", reason: "Practical GEO/trust signal." },
    SCHEMA_ORG: { grade: "B", reason: "Vocabulary behind structured data." },
    EEAT: { grade: "B", reason: "Trust frame; article covers application." },
    LLMS_TXT: { grade: "B", reason: "Emerging GEO file; article covers evidence limits." },
    JACCARD_SIMILARITY: { grade: "B", reason: "Used in MentionBee methodology; keep technical but short." },
    AI_CITATION: { grade: "B", reason: "Sources in AI answers vs mention/recommendation." },
  },
  deferred: {
    RETRIEVAL_AUGMENTED_GENERATION: {
      grade: "C",
      reason: "Generic AI architecture. Citation/AI Search cover the buyer-relevant part. Draft only in V1.",
    },
    PKI: {
      grade: "C",
      reason: "Internal module code. Public report label is Inhalte & Verständlichkeit.",
    },
    MSS: {
      grade: "C",
      reason: "Internal module code. Public report label is Externe Marktsignale.",
    },
    DIRECTLY_RECOMMENDED: {
      grade: "C",
      reason: "Visibility class covered under KI-Empfehlung / Erwähnung vs. Empfehlung.",
    },
  },
} as const;
