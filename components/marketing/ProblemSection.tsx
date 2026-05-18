import { EyeOff, MessageCircle, Zap } from "lucide-react";

const tiles = [
  {
    Icon: MessageCircle,
    title: "Kaufentscheidungen beginnen zunehmend in AI-Assistenten.",
    body: "Nutzer fragen KI nach Lösungen, Empfehlungen und Vergleichen – noch bevor sie Google nutzen.",
  },
  {
    Icon: Zap,
    title: "KI nennt oft nur wenige Marken pro Antwort.",
    body: "Wenn du nicht dabei bist, existierst du für viele potenzielle Kunden schlicht nicht.",
  },
  {
    Icon: EyeOff,
    title: "Viele Unternehmen wissen nicht, ob sie sichtbar sind.",
    body: "Es fehlt an Transparenz über AI-Sichtbarkeit, Erwähnungen und Empfehlungen im Wettbewerbsumfeld.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Kunden fragen heute KI. Wirst du genannt?
        </h2>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" role="list">
          {tiles.map((tile) => {
            const Icon = tile.Icon;
            return (
              <li
                key={tile.title}
                className="flex flex-col rounded-2xl border border-zinc-200/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
              >
                <Icon className="size-8 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-mention-dark">
                  {tile.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mention-gray">{tile.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
