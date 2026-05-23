import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Check, ListChecks, Search } from "lucide-react";

import { PaidReportForm } from "@/components/forms/PaidReportForm";
import { ReportPriceBadges } from "@/components/marketing/ReportPriceBadges";

export const metadata: Metadata = {
  title: "AI Visibility Deep-Dive | MentionBee",
  description:
    "Einmaliger Audit deiner Sichtbarkeit in KI-Antworten: Wettbewerbsvergleich, Ursachenanalyse und priorisierter 30-Tage-Maßnahmenplan. Lieferung in 24–48h.",
};

const featureBullets = [
  "5–6 kaufnahe Suchanfragen deiner Branche",
  "Analyse über 4 KI-Systeme (ChatGPT, Perplexity, Gemini, Claude)",
  "Wettbewerbsvergleich gegen bis zu 3 Anbieter",
  "Ursachenanalyse: Content, Tech SEO, Schema, UX & mehr",
  "25 gewichtete Maßnahmen in 3 Kategorien",
  "Schritt-für-Schritt Umsetzungsanleitungen",
  "Teilbarer Report-Link für dein Team",
  "Lieferung in 24–48h per E-Mail",
] as const;

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
      {/* Hero */}
      <header className="mx-auto max-w-3xl text-center">
        <p className="mx-auto mb-6 w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
          Einmaliger Audit · Keine Agentur nötig
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl lg:text-5xl">
          AI Visibility Deep-Dive
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-mention-gray sm:text-xl">
          Der vollständige Audit deiner Sichtbarkeit in KI-Antworten – mit Wettbewerbsvergleich,
          Ursachenanalyse und priorisiertem 30-Tage-Maßnahmenplan.
        </p>
        <ReportPriceBadges variant="hero" />
        <p className="mt-3 text-sm text-mention-gray">
          Einführungspreis · Einmalig · Lieferung in 24–48h
        </p>
      </header>

      {/* Was du bekommst */}
      <section className="mt-16 border-t border-zinc-100 pt-16">
        <h2 className="sr-only">Was du bekommst</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <Search className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              Vollständige KI-Analyse
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              5–6 kaufnahe Suchanfragen deiner Branche – getestet über ChatGPT, Perplexity, Gemini und
              Claude.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <BarChart2 className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              Wettbewerbsvergleich
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              Bis zu 3 Wettbewerber im direkten Vergleich. Du siehst genau wo du stehst und wer dich
              aussticht.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <ListChecks className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              25 priorisierte Maßnahmen
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              Konkrete Empfehlungen für Content, Tech SEO, Schema, UX und mehr – mit
              Umsetzungsanleitung.
            </p>
          </article>
        </div>
      </section>

      {/* Leistungen + Bestellung */}
      <section className="mt-16 border-t border-zinc-100 pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
              Im Deep-Dive enthalten:
            </h2>
            <ul className="mt-6 flex flex-col gap-3" role="list">
              {featureBullets.map((line) => (
                <li key={line} className="flex gap-3 text-mention-dark">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-100">
            <h2 className="font-heading text-xl font-semibold text-mention-dark">Jetzt bestellen</h2>
            <ReportPriceBadges variant="aside" />
            <p className="mt-2 text-sm text-mention-gray">
              Einmalig · Lieferung in 24–48h · Keine Agentur nötig
            </p>
            <hr className="my-6 border-zinc-200" />
            <PaidReportForm />
            <p className="mt-6 text-xs leading-relaxed text-mention-gray">
              Mit dem Absenden akzeptierst du unsere{" "}
              <Link href="/agb" className="font-medium text-primary underline underline-offset-2">
                AGB
              </Link>{" "}
              und{" "}
              <Link
                href="/datenschutzerklaerung"
                className="font-medium text-primary underline underline-offset-2"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <p className="mt-4 text-center text-sm text-mention-gray" aria-label="Sichere Zahlung via Stripe">
              🔒 Sichere Zahlung via Stripe
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
