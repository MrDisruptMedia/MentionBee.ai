import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CheckCircle, Lock, XCircle } from "lucide-react";

import { SampleReportDeepDiveCta } from "@/components/marketing/SampleReportDeepDiveCta";

export const metadata: Metadata = {
  title: "Beispielreport – Disrupt Media | MentionBee",
  description:
    "So sieht ein vollständiger AI-Visibility-Report aus: Score, KI-Sichtbarkeit, Modul-Details (PKI, Tech SEO, Schema, UX, MSS) und Top-Maßnahmen.",
};

const modules = [
  { name: "KI-Erwähnungen", score: 2.0, weightPct: 30, bar: "bg-red-500" },
  { name: "Positionierung & Content", score: 6.8, weightPct: 25, bar: "bg-amber-400" },
  { name: "Technisches SEO", score: 7.0, weightPct: 15, bar: "bg-amber-400" },
  { name: "Schema & Vertrauen", score: 8.1, weightPct: 10, bar: "bg-emerald-500" },
  { name: "UX & Conversion", score: 7.6, weightPct: 10, bar: "bg-amber-400" },
  { name: "Externe Sichtbarkeit", score: 4.0, weightPct: 10, bar: "bg-red-500" },
] as const;

const moduleCardClass =
  "rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm";

const positioningDimensions = [
  {
    name: "Angebotsklarheit",
    score: 3,
    text: "Angebot grundsätzlich verständlich, aber Formate und Preise fehlen",
  },
  {
    name: "Differenzierung",
    score: 2,
    text: "Kein klares Alleinstellungsmerkmal sichtbar",
  },
  {
    name: "Begriffskonsistenz",
    score: 4,
    text: "Kernbegriffe weitgehend konsistent",
  },
  {
    name: "UseCase-Klarheit",
    score: 4,
    text: "Konkrete Anwendungsfälle vorhanden",
  },
  {
    name: "Conversion-Klarheit",
    score: 5,
    text: "CTAs klar und spezifisch",
  },
] as const;

const techSeoChecks = [
  { status: "ok" as const, label: "robots.txt – Vorhanden" },
  { status: "ok" as const, label: "Sitemap – Vorhanden" },
  { status: "ok" as const, label: "SSL-Zertifikat – Gültig (HTTPS)" },
  { status: "ok" as const, label: "llms.txt – Vorhanden" },
  { status: "fail" as const, label: "PageSpeed – Nicht analysiert (API Key fehlt)" },
] as const;

const aiProviders = ["Claude", "ChatGPT", "Gemini", "Perplexity"] as const;

const schemaTypes = [
  { ok: true, label: "Organization Schema" },
  { ok: true, label: "LocalBusiness Schema" },
  { ok: false, label: "FAQ Schema – fehlt (hohe KI-Relevanz)" },
  { ok: false, label: "Person Schema – fehlt" },
] as const;

const eeatSignals = [
  { status: "ok" as const, label: "Impressum vorhanden" },
  { status: "ok" as const, label: "Datenschutzerklärung" },
  { status: "ok" as const, label: "Über-uns-Seite" },
  { status: "warn" as const, label: "Expertise/Autoren-Bios – schwach" },
  { status: "ok" as const, label: "Testimonials vorhanden" },
] as const;

const uxChecks = [
  { status: "ok" as const, label: "Hero kommuniziert Angebot sofort" },
  { status: "ok" as const, label: "Mehrere CTAs vorhanden" },
  { status: "ok" as const, label: "CTAs spezifisch formuliert" },
  { status: "warn" as const, label: "Vertrauenselemente nicht direkt bei CTAs" },
  { status: "ok" as const, label: "Abschnitte klar strukturiert" },
  { status: "warn" as const, label: "Navigation könnte vereinfacht werden" },
  { status: "ok" as const, label: "Kontaktmöglichkeit klar" },
] as const;

const externalSignals = [
  {
    status: "fail" as const,
    title: "Google Reviews",
    text: "Keine öffentlichen Bewertungen gefunden",
  },
  {
    status: "warn" as const,
    title: "Branchenverzeichnisse",
    text: "Nicht in local.ch oder search.ch gelistet",
  },
  {
    status: "warn" as const,
    title: "Mediennennungen",
    text: "Eigene Medienseite vorhanden, externe Erwähnungen begrenzt",
  },
  {
    status: "ok" as const,
    title: "Social Media",
    text: "LinkedIn aktiv, regelmäßige Posts",
  },
] as const;

const teaserMeasures = [
  {
    title: "Google Business Profile mit KI-tauglichen FAQs pflegen",
    problem:
      "Lokale und vertrauensbildende Signale sind nicht strukturiert – KI-Systeme erkennen deine Relevanz im Raum Zürich schlecht.",
    solution:
      "Ergänze FAQs mit klaren Entitäten, Leistungen und Standorten; verknüpfe sie mit deinen Money-Pages.",
  },
  {
    title: "Thought-Leadership zu AI Visibility & Conversion Tracking",
    problem:
      "Fachliche Tiefe zu deinen Kern-Themen fehlt als eigenständige, zitierfähige Inhalte – du wirst nicht als Go-to-Expert wahrgenommen.",
    solution:
      "Veröffentliche 2–3 analystische Artikel mit klaren Definitionen, Frameworks und Fallstudien; verlinke intern auf Services.",
  },
] as const;

function barWidth(score: number): number {
  return Math.min(100, Math.max(0, (score / 10) * 100));
}

/** Balken für Dimensionen (Skala /5): rot unter 3, amber 3–4, grün 5 */
function dimensionBarClass(score: number): string {
  if (score < 3) return "bg-red-500";
  if (score < 5) return "bg-amber-400";
  return "bg-emerald-500";
}

function dimensionBarWidth(score: number): number {
  return Math.min(100, Math.max(0, (score / 5) * 100));
}

export default function SampleReportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-24 pb-16">
      {/* 1. Header-Banner */}
      <div className="mb-8 rounded-xl border border-primary bg-primary/20 p-4">
        <p className="font-heading text-lg font-semibold text-mention-dark sm:text-xl">
          📄 Beispielreport – Disrupt Media | So sieht dein vollständiger Report aus
        </p>
        <p className="mt-2 text-sm text-mention-gray">
          Echte Analyse, echte Daten. Die konkreten Umsetzungsanleitungen sind nur im Deep-Dive Report verfügbar.
        </p>
      </div>

      {/* 2. Executive Summary */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">Executive Summary</h2>
        <p className="mt-4 text-base leading-relaxed text-mention-dark">
          Disrupt Media wird in KI-Antworten kaum erwähnt. Während die technischen Grundlagen solide sind, fehlen
          externe Signale, PR-Präsenz und KI-optimierte Inhalte. Der größte Hebel liegt in gezielter Positionierung
          als Experte für AI Visibility, Conversion Tracking und Google Ads im DACH-Raum.
        </p>
      </section>

      {/* 3. MentionBee Score */}
      <section className="mb-10 rounded-2xl border border-zinc-200/90 bg-mention-light/50 p-6 shadow-sm ring-1 ring-zinc-100">
        <h2 className="text-center font-heading text-xl font-bold text-mention-dark sm:text-2xl">MentionBee Score</h2>
        <div className="mt-4 text-center">
          <p className="font-heading text-5xl font-bold tabular-nums text-primary sm:text-6xl">
            40<span className="text-lg font-semibold text-mention-gray sm:text-xl"> / 100</span>
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-mention-dark ring-1 ring-zinc-200">
            Verbesserungspotenzial vorhanden
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
          {modules.map((mod) => (
            <li key={mod.name} className="rounded-xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-sm font-semibold text-mention-dark">{mod.name}</h3>
                <span className="shrink-0 text-xs font-semibold tabular-nums text-mention-dark">{mod.score}</span>
              </div>
              <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-zinc-100">
                <div className={`${mod.bar} rounded-full`} style={{ width: `${barWidth(mod.score)}%` }} />
              </div>
              <p className="mt-2 text-xs font-medium text-mention-gray">Gewichtung: {mod.weightPct}%</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. AI Visibility */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">AI Visibility</h2>
        <p className="mt-4 text-lg font-semibold text-mention-dark">
          Disrupt Media wird in 0 von 24 KI-Antworten erwähnt
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {aiProviders.map((name) => (
            <span
              key={name}
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-mention-gray ring-1 ring-zinc-200/80"
            >
              {name}: Nicht erwähnt
            </span>
          ))}
        </div>
      </section>

      {/* MODUL 2 – Positionierung & Content */}
      <section className={`${moduleCardClass} mb-10`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">Positionierung & Content</h2>
          <span className="inline-flex w-fit shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold tabular-nums text-amber-950 ring-1 ring-amber-200">
            6.8/10
          </span>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
          {positioningDimensions.map((dim) => (
            <li key={dim.name} className="rounded-xl border border-zinc-200/80 bg-mention-light/20 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-heading text-sm font-semibold text-mention-dark">{dim.name}</h3>
                <span className="shrink-0 text-xs font-bold tabular-nums text-mention-dark">
                  {dim.score}/5
                </span>
              </div>
              <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-zinc-100">
                <div
                  className={`${dimensionBarClass(dim.score)} rounded-full`}
                  style={{ width: `${dimensionBarWidth(dim.score)}%` }}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-mention-gray">{dim.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* MODUL 3 – Technisches SEO */}
      <section className={`${moduleCardClass} mb-10`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">Technisches SEO</h2>
          <span className="inline-flex w-fit shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold tabular-nums text-amber-950 ring-1 ring-amber-200">
            7.0/10
          </span>
        </div>
        <ul className="mt-6 space-y-3" role="list">
          {techSeoChecks.map((row) => (
            <li key={row.label} className="flex items-start gap-3">
              {row.status === "ok" ? (
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={2} aria-hidden />
              ) : (
                <XCircle className="mt-0.5 size-5 shrink-0 text-red-500" strokeWidth={2} aria-hidden />
              )}
              <span className="text-sm leading-snug text-mention-dark">{row.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* MODUL 4 – Schema & E-E-A-T */}
      <section className={`${moduleCardClass} mb-10`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">Schema & Vertrauen</h2>
          <span className="inline-flex w-fit shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold tabular-nums text-emerald-950 ring-1 ring-emerald-200">
            8.1/10
          </span>
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-mention-gray">Schema-Typen</h3>
            <ul className="mt-3 space-y-2.5" role="list">
              {schemaTypes.map((row) => (
                <li key={row.label} className="flex items-start gap-2.5">
                  {row.ok ? (
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-600" strokeWidth={2} aria-hidden />
                  ) : (
                    <XCircle className="mt-0.5 size-4 shrink-0 text-red-500" strokeWidth={2} aria-hidden />
                  )}
                  <span className="text-sm text-mention-dark">{row.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-mention-gray">E-E-A-T Signale</h3>
            <ul className="mt-3 space-y-2.5" role="list">
              {eeatSignals.map((row) => (
                <li key={row.label} className="flex items-start gap-2.5">
                  {row.status === "ok" ? (
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-600" strokeWidth={2} aria-hidden />
                  ) : (
                    <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-500" strokeWidth={2} aria-hidden />
                  )}
                  <span className="text-sm text-mention-dark">{row.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MODUL 5 – UX & Conversion */}
      <section className={`${moduleCardClass} mb-10`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">UX & Conversion</h2>
          <span className="inline-flex w-fit shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold tabular-nums text-amber-950 ring-1 ring-amber-200">
            7.6/10
          </span>
        </div>
        <ul
          className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
          role="list"
        >
          {uxChecks.map((row) => (
            <li key={row.label} className="flex items-start gap-2">
              {row.status === "ok" ? (
                <span className="mt-0.5 text-emerald-600" aria-hidden>
                  ✅
                </span>
              ) : (
                <span className="mt-0.5 text-amber-600" aria-hidden>
                  ⚠️
                </span>
              )}
              <span className="text-sm leading-snug text-mention-dark">{row.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* MODUL 6 – Externe Sichtbarkeit */}
      <section className={`${moduleCardClass} mb-10`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">Externe Sichtbarkeit</h2>
          <span className="inline-flex w-fit shrink-0 rounded-full bg-red-100 px-3 py-1 text-sm font-bold tabular-nums text-red-950 ring-1 ring-red-200">
            4.0/10
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {externalSignals.map((sig) => (
            <div
              key={sig.title}
              className="rounded-xl border border-zinc-200/80 bg-mention-light/25 p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {sig.status === "ok" ? (
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={2} aria-hidden />
                ) : sig.status === "warn" ? (
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-500" strokeWidth={2} aria-hidden />
                ) : (
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red-500" strokeWidth={2} aria-hidden />
                )}
                <div>
                  <h3 className="font-heading text-sm font-semibold text-mention-dark">{sig.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-mention-gray">{sig.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Erste 3 Maßnahmen */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">Deine 10 Top-Maßnahmen</h2>

        {/* Maßnahme 1 – vollständig */}
        <article className="mt-6 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-bold text-mention-dark ring-1 ring-primary/40">
              Quick Win
            </span>
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-950 ring-1 ring-red-200">
              Hoch
            </span>
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-bold text-mention-dark ring-1 ring-zinc-200">
              Klein
            </span>
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-mention-dark">llms.txt für Disrupt Media erstellen</h3>
          <p className="mt-2 text-sm font-medium text-mention-gray">Problem</p>
          <p className="mt-1 text-sm leading-relaxed text-mention-dark">
            KI-Systeme haben keinen strukturierten Überblick über deine Angebote
          </p>
          <p className="mt-4 text-sm font-medium text-mention-gray">Lösung</p>
          <p className="mt-1 text-sm leading-relaxed text-mention-dark">
            Erstelle eine /llms.txt-Datei mit deinen Kern-Angeboten
          </p>
          <p className="mt-5 text-center text-xs font-semibold text-mention-dark">Umsetzung anzeigen →</p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left text-xs leading-relaxed text-mention-dark">
            {`# Disrupt Media – Digital Marketing Agentur Zürich
> Spezialist für Google Ads, Conversion Tracking und AI Visibility`}
          </pre>
        </article>

        {/* Maßnahme 2 & 3 – Teaser mit Blur */}
        {teaserMeasures.map((m) => (
          <article
            key={m.title}
            className="relative mt-6 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-100"
          >
            <h3 className="font-heading text-lg font-semibold text-mention-dark">{m.title}</h3>
            <p className="mt-2 text-sm font-medium text-mention-gray">Problem</p>
            <p className="mt-1 text-sm leading-relaxed text-mention-dark">{m.problem}</p>
            <div className="relative mt-4">
              <div className="pointer-events-none select-none blur-sm">
                <p className="text-sm font-medium text-mention-gray">Lösung</p>
                <p className="mt-1 text-sm leading-relaxed text-mention-dark">{m.solution}</p>
                <div
                  role="presentation"
                  className="mt-4 w-full rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-center text-xs font-semibold text-mention-dark/70"
                >
                  Umsetzung anzeigen →
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 6. Gesperrte Maßnahmen 4–10 */}
      <section className="relative mt-10 h-48 overflow-hidden rounded-2xl border border-zinc-200/90 bg-mention-light/30 ring-1 ring-zinc-100">
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden blur-sm">
          <div className="space-y-3 p-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-zinc-200/80 bg-white/80 p-3">
                <div className="h-3 w-2/3 rounded bg-zinc-200" />
                <div className="mt-2 h-2.5 w-full rounded bg-zinc-100" />
                <div className="mt-1.5 h-2.5 w-5/6 rounded bg-zinc-100" />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-white/55 px-4 py-3 text-center backdrop-blur-[2px]">
          <Lock className="size-9 text-mention-dark" strokeWidth={1.75} aria-hidden />
          <p className="mt-2 max-w-md text-sm font-semibold text-mention-dark sm:text-base">
            7 weitere Maßnahmen mit vollständigen Umsetzungsanleitungen im Deep-Dive Report
          </p>
          <Link
            href="/report"
            className="pointer-events-auto mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-mention-dark shadow-md transition hover:bg-primary-dark"
          >
            Deep-Dive Report ansehen →
          </Link>
        </div>
      </section>

      {/* 7. Finaler CTA */}
      <section className="mt-12 rounded-2xl bg-mention-dark p-8 text-white">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Bereit für deinen eigenen Report?</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/free-report"
            className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-none"
          >
            Kostenloser Check →
          </Link>
          <SampleReportDeepDiveCta />
        </div>
      </section>
    </div>
  );
}
