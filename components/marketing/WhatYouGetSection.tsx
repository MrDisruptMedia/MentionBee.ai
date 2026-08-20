import Link from "next/link";

import { ReportScoreExcerpt } from "@/components/marketing/ReportScoreExcerpt";

const specs = [
  {
    title: "3–5 kaufnahe Fragen",
    body: "Individuell für dein Unternehmen und deinen Markt ausgewählt – und über alle vier KI-Systeme hinweg getestet.",
  },
  {
    title: "4 führende KI-Systeme",
    body: "ChatGPT · Claude · Gemini · Perplexity — so basiert deine Analyse nicht auf einer einzelnen Antwort oder einem einzelnen KI-System.",
  },
  {
    title: "Bis zu 3 Wettbewerber im direkten Vergleich",
    body: "Du siehst, welche Wettbewerber bei denselben Fragen auftauchen – und wo sich relevante Unterschiede zeigen.",
  },
  {
    title: "68+ Website-, Trust- und Marktsignale",
    body: "MentionBee untersucht zusätzlich Inhalte, technische Voraussetzungen, Nutzererlebnis, Vertrauenssignale und deine externe digitale Präsenz.",
  },
  {
    title: "10 priorisierte Massnahmen",
    body: "Du erhältst nicht nur Befunde, sondern konkrete nächste Schritte – priorisiert danach, womit du sinnvollerweise anfangen solltest.",
  },
  {
    title: "Innerhalb von 24 Stunden",
    body: "Du erhältst deinen individuellen Online-Report per E-Mail-Link. Kein Projekt über mehrere Wochen, kein Abo.",
  },
] as const;

export function WhatYouGetSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Ein individueller Report, mit dem du weiterarbeiten kannst.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mention-gray sm:text-lg">
            Nach dem AI Visibility Audit erhältst du deinen individuellen MentionBee-Report.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {specs.map((spec) => (
            <li
              key={spec.title}
              className="rounded-2xl border border-zinc-200/80 bg-mention-light/40 p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-mention-dark">{spec.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mention-gray">{spec.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <ReportScoreExcerpt />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sample-report"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark"
          >
            Beispielreport ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
