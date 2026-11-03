import type { Metadata } from "next";

import { KitaIndexDraft } from "@/components/ki-index/KitaIndexDraft";
import { KI_INDEX_HERO_ALT } from "@/lib/ki-index/catalog";
import { kitaIndexDraft } from "@/lib/ki-index/zweisprachige-kitas-zuerich";
import { absoluteUrl } from "@/lib/site";

const canonical = absoluteUrl("/ki-index/zweisprachige-kitas-zuerich");
const image = {
  url: absoluteUrl("/images/ki-index/zweisprachige-kitas-zuerich-hero.webp"),
  width: 1024,
  height: 576,
  alt: KI_INDEX_HERO_ALT,
};

export const metadata: Metadata = {
  title: kitaIndexDraft.title,
  description: kitaIndexDraft.lead,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: canonical,
    title: kitaIndexDraft.title,
    description: kitaIndexDraft.lead,
    siteName: "MentionBee",
    locale: "de_CH",
    publishedTime: kitaIndexDraft.collectedAt,
    authors: ["Olaf Kunz"],
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: kitaIndexDraft.title,
    description: kitaIndexDraft.lead,
    images: [image.url],
  },
};

export default function ZweisprachigeKitasZuerichIndexPage() {
  return <KitaIndexDraft />;
}
