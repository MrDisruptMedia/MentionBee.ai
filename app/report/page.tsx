import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Check, ListChecks, Search } from "lucide-react";

import { PaidReportForm } from "@/components/forms/PaidReportForm";
import { ReportPriceBadges } from "@/components/marketing/ReportPriceBadges";
import { TrackFunnelView } from "@/components/analytics/TrackFunnelView";
import { FUNNEL_EVENTS } from "@/lib/analytics/data-layer";

export const metadata: Metadata = {
  title: "AI Visibility Audit | MentionBee",
  description:
    "Einmaliger AI Visibility Audit: 3–5 kaufnahe Fragen über ChatGPT, Claude, Gemini und Perplexity, bis zu 3 Wettbewerber, 68+ Signale und 10 priorisierte Massnahmen. Innerhalb von 24 Stunden.",
};

const featureBullets = [
  "3–5 kaufnahe Fragen für dein Unternehmen und deinen Markt",
  "Analyse über 4 KI-Systeme (ChatGPT · Claude · Gemini · Perplexity)",
  "Wettbewerbsvergleich gegen bis zu 3 Anbieter",
  "68+ Website-, Trust- und Marktsignale",
  "10 priorisierte Massnahmen",
  "Individueller Online-Report per E-Mail-Link",
  "Teilbarer Report-Link für dein Team",
  "Innerhalb von 24 Stunden",
] as const;

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
      <TrackFunnelView event={FUNNEL_EVENTS.VIEW_PAID_REPORT} />
      {/* Hero */}
      <header className="mx-auto max-w-3xl text-center">
        <p className="mx-auto mb-6 w-fit rounded-full border border-zinc-200/90 bg-mention-light px-3 py-1 text-xs font-semibold tracking-wide text-mention-dark uppercase">
          AI Visibility Audit · Einmalig · Kein Abo
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl lg:text-5xl">
          AI Visibility Audit
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-mention-gray sm:text-xl">
          Der vollständige Audit deiner Sichtbarkeit in KI-Antworten – mit Wettbewerbsvergleich,
          Ursachenanalyse und priorisierten Massnahmen.
        </p>
        <ReportPriceBadges variant="hero" />
        <p className="mt-3 text-sm text-mention-gray">
          Einmalig · Kein Abo · Innerhalb von 24 Stunden
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
              3–5 kaufnahe Fragen – getestet über ChatGPT, Claude, Gemini und Perplexity.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <BarChart2 className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              Wettbewerbsvergleich
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              Bis zu 3 Wettbewerber im direkten Vergleich. Du siehst genau, wo du stehst und wer dich
              aussticht.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <ListChecks className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              10 priorisierte Massnahmen
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              Konkrete nächste Schritte – priorisiert danach, womit du sinnvollerweise anfangen
              solltest.
            </p>
          </article>
        </div>
      </section>

      {/* Leistungen + Bestellung */}
      <section className="mt-16 border-t border-zinc-100 pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
              Im Audit enthalten:
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
              Einmalig · Kein Abo · Innerhalb von 24 Stunden
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
