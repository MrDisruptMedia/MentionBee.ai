import type { Metadata } from "next";

import {
  AiVisibilityStudy2026Page,
  STUDY_CANONICAL_PATH,
  STUDY_PDF_PATH,
} from "@/components/research/AiVisibilityStudy2026Page";
import { ORGANIZATION_ID, organizationNode } from "@/lib/json-ld";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";

const PAGE_URL = absoluteUrl(STUDY_CANONICAL_PATH);
const OG_TITLE = "AI Visibility Study 2026: Das KI-Wettbewerbsfeld | MentionBee";
const OG_DESCRIPTION =
  "MentionBee analysiert 1’164 KI-Antworten von ChatGPT, Claude, Gemini und Perplexity. Die Studie zeigt, wie stark sich KI-Wettbewerbsfelder unterscheiden und verändern.";
const DATE_PUBLISHED = "2026-09-10";
const AUTHOR_URL = absoluteUrl("/autor/olaf-kunz");
const OG_IMAGE = absoluteUrl("/mentionbee-ai-visibility-study-2026-og.png");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    locale: "de_DE",
    siteName: "MentionBee",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_PUBLISHED,
    authors: [AUTHOR_URL],
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MentionBee AI Visibility Study 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

function studyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "Report"],
        "@id": `${PAGE_URL}#report`,
        headline: "Deine Wettbewerberliste ist nicht das KI-Wettbewerbsfeld",
        name: "MentionBee AI Visibility Study 2026",
        description: OG_DESCRIPTION,
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_PUBLISHED,
        inLanguage: "de-CH",
        isAccessibleForFree: true,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
        url: PAGE_URL,
        image: OG_IMAGE,
        author: {
          "@type": "Person",
          name: "Olaf Kunz",
          url: AUTHOR_URL,
          image: absoluteUrl("/images/autor-olaf-kunz.png"),
        },
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        encoding: {
          "@type": "MediaObject",
          contentUrl: absoluteUrl(STUDY_PDF_PATH),
          encodingFormat: "application/pdf",
          name: "mentionbee-ai-visibility-study-2026.pdf",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "MentionBee",
            item: SITE_ORIGIN,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "MentionBee AI Visibility Study 2026",
            item: PAGE_URL,
          },
        ],
      },
      organizationNode(),
    ],
  };
}

export default function AiVisibilityStudy2026Route() {
  const jsonLd = studyJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiVisibilityStudy2026Page />
    </>
  );
}
