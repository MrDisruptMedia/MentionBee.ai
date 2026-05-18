const blocks = [
  {
    icon: "🔍",
    title: "AI Mentions",
    subtitle: "Wird deine Marke genannt?",
    body: "Wir prüfen, ob und wie häufig deine Marke in Antworten von führenden KI-Systemen vorkommt.",
  },
  {
    icon: "⭐",
    title: "Recommendation Score",
    subtitle: "Wirst du empfohlen oder nur erwähnt?",
    body: "Wir bewerten, ob die Nennung eine aktive Empfehlung oder nur eine neutrale Erwähnung ist.",
  },
  {
    icon: "📊",
    title: "Competitor Gap",
    subtitle: "Welche Wettbewerber erscheinen stattdessen?",
    body: "Erhalte einen klaren Vergleich, wer auftaucht – und in welchen Themenfeldern.",
  },
  {
    icon: "🎯",
    title: "Action Plan",
    subtitle: "Was kannst du konkret verbessern?",
    body: "Du erhältst konkrete, priorisierte Empfehlungen und Massnahmen zur gezielten Steigerung.",
  },
] as const;

export function WhatWeAnalyze() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Was MentionBee analysiert
        </h2>

        <ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
          role="list"
        >
          {blocks.map((block) => (
            <li
              key={block.title}
              className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8"
            >
              <span className="text-2xl" aria-hidden>
                {block.icon}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-mention-dark">
                {block.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{block.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-mention-gray">{block.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
