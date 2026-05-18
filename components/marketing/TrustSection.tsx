import Link from "next/link";

const points = [
  {
    icon: "🔍",
    title: "Klare Methodik",
    body: "Unser Vorgehen ist öffentlich und nachvollziehbar dokumentiert.",
  },
  {
    icon: "👤",
    title: "Keine Account-Erstellung nötig",
    body: "Du brauchst kein Konto – erhalte deinen Report direkt per E-Mail.",
  },
  {
    icon: "🔒",
    title: "DSGVO-bewusste Ergebnisse",
    body: "Wir verarbeiten nur die Daten, die für die Analyse notwendig sind – ohne Tracking.",
  },
  {
    icon: "✅",
    title: "Nachvollziehbare Ergebnisse",
    body: "Jede Aussage im Report ist belegt und transparent aufbereitet.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Transparent analysiert. Ohne Login. DSGVO-bewusst.
          </h2>
          <Link
            href="/#methodik"
            className="shrink-0 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Mehr zur Methodik →
          </Link>
        </div>

        <ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          role="list"
        >
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-zinc-200/60 bg-white/90 p-6 shadow-sm"
            >
              <span className="text-2xl" aria-hidden>
                {p.icon}
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold text-mention-dark">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mention-gray">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
