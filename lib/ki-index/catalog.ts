import { kitaIndexDraft } from "@/lib/ki-index/zweisprachige-kitas-zuerich";

export const KI_INDEX_HERO_ALT =
  "Illustration von Kita-Gebäuden in Zürich mit Antwortkarten von ChatGPT, Claude, Gemini und Perplexity.";

export type KiIndexListing = {
  slug: string;
  href: string;
  title: string;
  description: string;
  collectedLabel: string;
  image: {
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  };
};

const KITA_HERO_SRC = "/images/ki-index/zweisprachige-kitas-zuerich-hero.webp";
const KITA_HERO_SRC_SET = `/images/ki-index/zweisprachige-kitas-zuerich-hero-640.webp 640w, ${KITA_HERO_SRC} 1024w`;

/** Veröffentlichte Beiträge, die im Index verlinkt werden. Titel und Pfad stammen aus dem Content-Bestand. */
const WETTBEWERBER_PATH = "/blog/ki-suche-sichtbare-wettbewerber-wechseln";

export const kitaIndexRelatedArticle = {
  publicPath: WETTBEWERBER_PATH,
  href: WETTBEWERBER_PATH,
  title: "KI verändert das Wettbewerbsfeld von Unternehmen deutlich – schneller, als viele denken",
} as const;

export const kiIndexListings: KiIndexListing[] = [
  {
    slug: "zweisprachige-kitas-zuerich",
    href: "/ki-index/zweisprachige-kitas-zuerich",
    title: kitaIndexDraft.title,
    description:
      "Sechs Fragen an ChatGPT, Claude, Gemini und Perplexity zu deutsch-englischen Kinderbetreuungsangeboten in Zürich. Ausgewertet wurden 72 Antworten.",
    collectedLabel: kitaIndexDraft.collectedLabel,
    image: {
      src: KITA_HERO_SRC,
      srcSet: KITA_HERO_SRC_SET,
      width: 1024,
      height: 576,
      alt: KI_INDEX_HERO_ALT,
    },
  },
];
