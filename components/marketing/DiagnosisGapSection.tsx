import Link from "next/link";

export function DiagnosisGapSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Nicht empfohlen. Und jetzt?
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-mention-gray sm:text-lg">
          <p>Vielleicht kennt die KI dein Unternehmen nicht gut genug.</p>
          <p>
            Vielleicht ist online nicht eindeutig genug dokumentiert, wofür du stehst und für wen dein
            Angebot relevant ist.
          </p>
          <p>Vielleicht sind deine Wettbewerber zu wichtigen Themen besser sichtbar.</p>
          <p>
            Oder vielleicht war diese eine Antwort schlicht nicht aussagekräftig genug, um daraus
            überhaupt eine Schlussfolgerung zu ziehen.
          </p>
          <p className="pt-2 text-mention-dark">
            Genau hier setzt der AI Visibility Audit von MentionBee an.
          </p>
          <p>
            Statt aus einzelnen KI-Antworten vorschnelle Schlüsse zu ziehen, untersucht MentionBee deine
            Sichtbarkeit strukturiert – und sucht nach den Stellen, an denen du sinnvoll ansetzen
            kannst.
          </p>
        </div>

        <Link
          href="/report"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
        >
          Meine Sichtbarkeit prüfen →
        </Link>
      </div>
    </section>
  );
}
