import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

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
    "Erkenne, wo du gegenüber deiner Konkurrenz stehst – und welche Verbesserungen du zuerst angehen solltest.",
  alternates: { canonical: canonicalUrl("/report") },
};

const heroBenefits = [
  "Deine Sichtbarkeit in vier KI-Systemen",
  "Die Lücken deiner Website und deines Online-Auftritts",
  "10 konkrete Massnahmen, nach Priorität geordnet",
] as const;

export default async function ReportPage() {
  const pricing = await fetchPublicPricing();

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(auditServiceJsonLd(pricing)),
        }}
      />
      <TrackFunnelView event={FUNNEL_EVENTS.VIEW_PAID_REPORT} />
      <section>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-x-14">
          <div className="contents lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col">
            <header className="order-1 text-left lg:order-none">
              <p className="text-sm font-medium text-mention-gray">KI-Sichtbarkeits-Audit</p>
              <h1 className="mt-2 font-heading text-[1.75rem] font-bold leading-[1.15] tracking-tight text-mention-dark sm:text-[2rem] lg:text-[2.75rem]">
                Das musst du ändern, damit KI dein Unternehmen empfiehlt.
              </h1>
              <p className="mt-3 text-lg leading-snug text-mention-gray">
                Erkenne, wo du gegenüber deiner Konkurrenz stehst – und welche Verbesserungen du zuerst
                angehen solltest.
              </p>
            </header>

            <div className="order-3 lg:order-none lg:mt-7">
              <ul className="flex flex-col gap-2.5" role="list">
                {heroBenefits.map((line) => (
                  <li key={line} className="flex gap-2.5 text-base leading-snug text-mention-dark">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sample-report"
                className="mt-6 inline-flex text-base font-medium text-mention-dark underline decoration-mention-dark/40 underline-offset-4 hover:decoration-mention-dark"
              >
                Beispielreport ansehen →
              </Link>
            </div>
          </div>

          <aside className="order-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-none lg:order-none lg:col-start-2 lg:row-start-1 lg:self-start">
            <h2 className="font-heading text-xl font-semibold leading-tight text-mention-dark">Jetzt bestellen</h2>
            <ReportPriceBadges variant="aside" />
            <p className="mt-1 text-sm leading-snug text-mention-gray">
              Einmalig · Kein Abo · Lieferung innerhalb von 24 Stunden
            </p>
            <hr className="my-4 border-zinc-200" />
            <PaidReportForm />
            <p className="mt-3 text-xs leading-relaxed text-mention-gray">
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
            <p className="mt-2 text-center text-sm text-mention-gray" aria-label="Sichere Zahlung via Stripe">
              🔒 Sichere Zahlung via Stripe
            </p>
          </aside>
        </div>
      </section>

      <p className="mt-10 text-sm leading-relaxed text-mention-gray">
        ChatGPT, Claude, Gemini &amp; Perplexity · 3–6 kaufnahe Fragen · Vergleich mit bis zu 3
        Wettbewerbern · Teilbarer Online-Report
      </p>
    </div>
  );
}
