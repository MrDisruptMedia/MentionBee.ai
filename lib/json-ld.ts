import { SITE_ORIGIN } from "@/lib/site";
import type { PublicPricing } from "@/lib/public-pricing";

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const AUDIT_SERVICE_ID = `${SITE_ORIGIN}/report#audit`;
export const AUDIT_SERVICE_URL = `${SITE_ORIGIN}/report`;

export function organizationNode() {
  return {
    "@type": "Organization" as const,
    "@id": ORGANIZATION_ID,
    name: "MentionBee",
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/mentionbee-logo-transparent.png`,
    description:
      "MentionBee bietet AI Visibility Audits an. Die Audits untersuchen die Sichtbarkeit von Unternehmen in KI-Systemen wie ChatGPT, Claude, Gemini und Perplexity sowie relevante Website-, Trust- und Marktsignale. Das Ergebnis ist ein individueller Online-Report mit priorisierten Massnahmen.",
    email: "hello@mentionbee.ai",
    foundingLocation: {
      "@type": "Place" as const,
      address: {
        "@type": "PostalAddress" as const,
        streetAddress: "Wieslergasse 2",
        addressLocality: "Zürich",
        postalCode: "8049",
        addressCountry: "CH",
      },
    },
    sameAs: ["https://www.linkedin.com/company/mentionbee"],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite" as const,
    "@id": WEBSITE_ID,
    url: SITE_ORIGIN,
    name: "MentionBee",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function siteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function auditServiceJsonLd(pricing: PublicPricing) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": AUDIT_SERVICE_ID,
    name: "AI Visibility Audit",
    url: AUDIT_SERVICE_URL,
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Einmaliger AI Visibility Audit: Analyse der Sichtbarkeit in ChatGPT, Claude, Gemini und Perplexity sowie relevanter Website-, Trust- und Marktsignale. Das Ergebnis ist ein individueller Online-Report mit 10 priorisierten Massnahmen. Kein Abo. Lieferung innerhalb von 24 Stunden.",
    offers: {
      "@type": "Offer",
      url: AUDIT_SERVICE_URL,
      price: pricing.deepDivePrice,
      priceCurrency: pricing.currency,
      availability: "https://schema.org/InStock",
      seller: { "@id": ORGANIZATION_ID },
    },
  };
}

export const MEMS_REVIEW_QUOTE =
  "„Der Report offenbarte den dringenden Handlungsbedarf für unseren Webauftritt. Daraufhin haben wir unsere Website neu gestaltet – seitdem erhalten wir messbar mehr verwertbare Anfragen.“";

export function memsReviewJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: MEMS_REVIEW_QUOTE,
    author: {
      "@type": "Person",
      name: "Markus Nägele",
      affiliation: {
        "@type": "Organization",
        name: "MEMS AG",
      },
    },
    itemReviewed: { "@id": AUDIT_SERVICE_ID },
  };
}
