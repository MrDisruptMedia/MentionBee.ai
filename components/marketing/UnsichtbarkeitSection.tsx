import { ListX, SearchX, TrendingUp } from "lucide-react";

const tiles = [
  {
    Icon: ListX,
    title: "Du fehlst in der Shortlist",
    body: "KI-Antworten nennen oft nur 3–5 Anbieter pro Frage. Wenn du fehlst, bist du aus dem Rennen – bevor der Nutzer auch nur deine Website besucht.",
  },
  {
    Icon: TrendingUp,
    title: "Wettbewerber besetzen deine Kategorie",
    body: "Wenn andere Marken häufiger empfohlen werden, prägen sie die Wahrnehmung deiner Zielgruppe – unabhängig von deinem Google-Ranking.",
  },
  {
    Icon: SearchX,
    title: "SEO ≠ AI Visibility",
    body: "Du kannst auf Seite 1 bei Google stehen und trotzdem in KI-Antworten komplett fehlen. Zwei verschiedene Spiele – zwei verschiedene Regeln.",
  },
] as const;

export function UnsichtbarkeitSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-dark py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Was passiert, wenn du nicht sichtbar bist?
        </h2>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" role="list">
          {tiles.map((tile) => {
            const Icon = tile.Icon;
            return (
              <li
                key={tile.title}
                className="rounded-xl border border-white/20 bg-white/10 p-6"
              >
                <Icon className="size-8 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{tile.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{tile.body}</p>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-semibold text-primary">
          Wenn KI deine Wettbewerber empfiehlt und dich nicht nennt, verlierst du Nachfrage – bevor jemand deine
          Website besucht.
        </p>
      </div>
    </section>
  );
}
