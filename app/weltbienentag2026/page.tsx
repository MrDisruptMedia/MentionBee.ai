import type { Metadata } from "next";

import { Weltbienentag2026Body } from "@/components/marketing/Weltbienentag2026Body";

const OG_PAGE_URL = "https://mentionbee.ai/weltbienentag2026";
const OG_IMAGE = "https://mentionbee.ai/og/weltbienentag-2026-v3.jpg";
const OG_TITLE = "11 Fakten über Bienen, die dich sprachlos machen werden";
const OG_DESCRIPTION =
  "Heute ist Weltbienentag – 11 faszinierende Fakten über Bienen und warum sie für unser Ökosystem fundamental sind.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentionbee.ai"),
  title: "11 Fakten über Bienen – Weltbienentag 2026 | MentionBee",
  description: OG_DESCRIPTION,
  alternates: {
    canonical: OG_PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: OG_PAGE_URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    locale: "de_DE",
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Bienen-Fakten zum Weltbienentag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: "Heute ist Weltbienentag – 11 faszinierende Fakten über Bienen.",
    images: [OG_IMAGE],
  },
};

export default function Weltbienentag2026Page() {
  return <Weltbienentag2026Body />;
}
