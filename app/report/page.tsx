import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Check, ListChecks, Search } from "lucide-react";

import { PaidReportForm } from "@/components/forms/PaidReportForm";
import { ReportPriceBadges } from "@/components/marketing/ReportPriceBadges";
import { TrackFunnelView } from "@/components/analytics/TrackFunnelView";
import { FUNNEL_EVENTS } from "@/lib/analytics/data-layer";
import { auditServiceJsonLd } from "@/lib/json-ld";
import { fetchPublicPricing } from "@/lib/public-pricing";
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "MentionBee KI-Sichtbarkeits-Audit",
  description:
    "MentionBee zeigt dir, bei welchen Kundenfragen deine Konkurrenz auftaucht und wo dein Unternehmen fehlt. Du erhältst eine Analyse deiner Website und deines Online-Auftritts – mit 10 konkreten Massnahmen, nach Priorität geordnet.",
  alternates: { canonical: canonicalUrl("/report") },
};

const featureBullets = [
  "Du siehst, bei welchen Kauf-Fragen ChatGPT, Claude, Gemini und Perplexity dein Unternehmen nennen.",
  "Du siehst, welche Wettbewerber stattdessen empfohlen werden. Verglichen werden bis zu drei.",
  "Geprüft werden 3 bis 6 kaufnahe Fragen in diesen vier Systemen.",
  "Du bekommst 10 priorisierte Verbesserungen.",
  "Den Online-Report erhältst du per Link, auch zum Teilen im Team.",
  "Lieferung innerhalb von 24 Stunden.",
] as const;

export default async function ReportPage() {
  const pricing = await fetchPublicPricing();

  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(auditServiceJsonLd(pricing)),
        }}
      />
      <TrackFunnelView event={FUNNEL_EVENTS.VIEW_PAID_REPORT} />
      {/* Hero */}
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-mention-gray sm:text-base">KI-Sichtbarkeits-Audit</p>
        <h1 className="mt-3 font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-mention-dark text-balance sm:mt-4 sm:text-4xl lg:text-5xl">
          Das musst du ändern, damit KI dein Unternehmen empfiehlt.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mention-gray sm:mt-5 sm:text-lg">
          MentionBee zeigt dir, bei welchen Kundenfragen deine Konkurrenz auftaucht und wo dein
          Unternehmen fehlt. Du erhältst eine Analyse deiner Website und deines Online-Auftritts – mit
          10 konkreten Massnahmen, nach Priorität geordnet.
        </p>
      </header>

      {/* Leistungen + Bestellung */}
      <section className="mt-12 lg:mt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
              Deine Analyse mit Wettbewerbsvergleich und 10 priorisierten Massnahmen – als Online-Report.
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

          <aside className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-zinc-100 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-mention-dark">Jetzt bestellen</h2>
            <ReportPriceBadges variant="aside" />
            <p className="mt-2 text-sm text-mention-gray">Einmalig · Kein Abo</p>
            <hr className="my-6 border-zinc-200" />
            <PaidReportForm />
            <p className="mt-6 text-xs leading-relaxed text-mention-gray">
              Mit dem Absenden akzeptierst du unsere{" "}
              <Link href="/agb" className="font-medium text-mention-dark underline underline-offset-2">
                AGB
              </Link>{" "}
              und{" "}
              <Link
                href="/datenschutzerklaerung"
                className="font-medium text-mention-dark underline underline-offset-2"
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

      {/* Was du bekommst */}
      <section className="mt-16 border-t border-zinc-100 pt-16">
        <h2 className="sr-only">Was du bekommst</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <Search className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              Wo du in KI-Antworten auftauchst
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              3 bis 6 kaufnahe Fragen in ChatGPT, Claude, Gemini und Perplexity.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <BarChart2 className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              Wettbewerbsvergleich
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              Bis zu 3 Wettbewerber. Du siehst, wen die KI statt dir empfiehlt.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm">
            <ListChecks className="size-9 text-primary" strokeWidth={2} aria-hidden />
            <h3 className="font-heading text-lg font-semibold text-mention-dark">
              10 priorisierte Massnahmen
            </h3>
            <p className="text-sm leading-relaxed text-mention-gray">
              10 Verbesserungen, geordnet danach, womit du sinnvollerweise anfängst.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
