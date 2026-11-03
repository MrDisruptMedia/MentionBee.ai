import type { Metadata } from "next";

import { KiIndexOverview } from "@/components/ki-index/KiIndexOverview";
import { KI_INDEX_HERO_ALT } from "@/lib/ki-index/catalog";
import { absoluteUrl } from "@/lib/site";

const title = "KI-Index";
const description =
  "Welche Unternehmen empfehlen KI-Systeme? Unsere KI-Indizes zeigen, welche Anbieter bei ausgewählten Fragen zu einer Branche und Region besonders häufig empfohlen werden.";
const canonical = absoluteUrl("/ki-index");
const image = {
  url: absoluteUrl("/images/ki-index/zweisprachige-kitas-zuerich-hero.webp"),
  width: 1024,
  height: 576,
  alt: KI_INDEX_HERO_ALT,
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: canonical,
    title,
    description,
    siteName: "MentionBee",
    locale: "de_CH",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image.url],
  },
};

export default function KiIndexPage() {
  return <KiIndexOverview />;
}
