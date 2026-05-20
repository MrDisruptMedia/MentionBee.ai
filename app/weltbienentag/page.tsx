import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";

import { WeltbienentagClient } from "./WeltbienentagClient";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "11 Fakten über Bienen – Weltbienentag 2025 | MentionBee",
  description:
    "Wer nicht erwähnt wird, existiert nicht. 11 faszinierende Bienen-Fakten + warum 1% unserer Einnahmen an Bienen.ch geht.",
  openGraph: {
    title: "11 Fakten über Bienen – Weltbienentag 2025 | MentionBee",
    description:
      "Wer nicht erwähnt wird, existiert nicht. 11 faszinierende Bienen-Fakten + warum 1% unserer Einnahmen an Bienen.ch geht.",
    url: "https://mentionbee.ai/weltbienentag",
    type: "article",
    locale: "de_DE",
  },
};

export default function WeltbienentagPage() {
  return <WeltbienentagClient fontClassName={`${playfair.variable} ${sourceSerif4.variable}`} />;
}
