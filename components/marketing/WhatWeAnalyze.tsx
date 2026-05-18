import { BarChart2, ListChecks, Radio, Star } from "lucide-react";

const blocks = [
  {
    Icon: Radio,
    title: "KI-Erwähnungen",
    subtitle: "Wird deine Marke genannt?",
    body: "Wir prüfen, ob und wie häufig deine Marke in Antworten von führenden KI-Systemen vorkommt.",
  },
  {
    Icon: Star,
    title: "Empfehlungs-Score",
    subtitle: "Wirst du empfohlen oder nur erwähnt?",
    body: "Wir bewerten, ob die Nennung eine aktive Empfehlung oder nur eine neutrale Erwähnung ist.",
  },
  {
    Icon: BarChart2,
    title: "Wettbewerbslücke",
    subtitle: "Welche Wettbewerber erscheinen stattdessen?",
    body: "Erhalte einen klaren Vergleich, wer auftaucht – und in welchen Themenfeldern.",
  },
  {
    Icon: ListChecks,
    title: "Maßnahmenplan",
    subtitle: "Was kannst du konkret verbessern?",
    body: "Du erhältst konkrete, priorisierte Empfehlungen und Maßnahmen zur gezielten Steigerung.",
  },
] as const;

export function WhatWeAnalyze() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Was MentionBee analysiert
        </h2>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8" role="list">
          {blocks.map((block) => {
            const Icon = block.Icon;
            return (
              <li
                key={block.title}
                className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8"
              >
                <Icon className="size-8 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold text-mention-dark">{block.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{block.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-mention-gray">{block.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
