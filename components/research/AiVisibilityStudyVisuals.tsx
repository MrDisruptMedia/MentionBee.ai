/**
 * Native HTML/CSS study figures for MentionBee AI Visibility Study 2026.
 * Visual hierarchy follows the supplied study graphics; data matches the final article.
 */

import type { ReactNode } from "react";

function FigureShell({
  children,
  caption,
  labelledBy,
}: {
  children: ReactNode;
  caption: string;
  labelledBy: string;
}) {
  return (
    <figure
      className="relative my-10 w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-[#F7F5F0]"
      aria-labelledby={labelledBy}
    >
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-4 py-3 sm:px-5">
        <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-mention-gray uppercase">
          MentionBee · AI Visibility Study 2026
        </p>
      </div>
      <div className="min-w-0 px-4 py-6 sm:px-6 sm:py-8">{children}</div>
      <figcaption id={labelledBy} className="sr-only absolute m-0 h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap">
        {caption}
      </figcaption>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-200/80 px-4 py-3 text-[0.7rem] text-mention-gray sm:px-5">
        <span>mentionbee.ai</span>
        <span className="hidden sm:inline">ChatGPT · Claude · Gemini · Perplexity</span>
        <span className="hidden md:inline">Analyse. Verstehen. Sichtbar werden.</span>
      </div>
    </figure>
  );
}

export function VisualTreuhandField() {
  return (
    <FigureShell
      labelledBy="fig-treuhand-field"
      caption="Vorab definiertes Treuhand-Panel mit 24 Unternehmen gegenüber 71 zusätzlich in KI-Antworten identifizierten relevanten Treuhandunternehmen. In 67 von 72 Antworten (93,1 %) tauchte mindestens ein relevanter Anbieter ausserhalb des Panels auf."
    >
      <p className="font-heading text-xl font-bold tracking-tight text-mention-dark sm:text-2xl">
        Deine Wettbewerberliste ist nicht das KI-Wettbewerbsfeld.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mention-gray sm:text-base">
        Der Zürcher Treuhand-Case zeigt, wie stark KI-Systeme eine vorab definierte Wettbewerbsbeobachtung
        erweitern können.
      </p>

      <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
          <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-mention-gray uppercase">
            Vorab definiertes Treuhand-Panel
          </p>
          <p className="mt-3 font-heading text-5xl font-bold tabular-nums text-mention-dark sm:text-6xl">24</p>
          <p className="mt-1 text-base font-semibold text-mention-dark">Unternehmen</p>
          <p className="mt-3 text-xs leading-relaxed text-mention-gray">
            feste Ausgangsbasis der Wettbewerbsbeobachtung
          </p>
        </div>

        <div
          className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center text-primary sm:mx-0"
          aria-hidden
        >
          <span className="block size-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
        </div>

        <div className="flex-1 rounded-2xl bg-primary p-5 sm:p-6">
          <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-mention-dark uppercase">
            Zusätzlich in KI-Antworten identifiziert
          </p>
          <p className="mt-3 font-heading text-5xl font-bold tabular-nums text-mention-dark sm:text-6xl">+71</p>
          <p className="mt-1 text-base font-semibold text-mention-dark">weitere relevante Treuhandunternehmen</p>
          <p className="mt-3 text-xs leading-relaxed text-mention-dark/80">
            kanonisch dedupliziert und manuell auf Relevanz geprüft
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-mention-dark px-4 py-3.5 text-center text-sm leading-snug text-white sm:rounded-full sm:px-5 sm:text-[0.95rem]">
        In 67 von 72 Antworten (93,1 %) tauchte mindestens ein relevanter Anbieter ausserhalb des Panels auf.
      </div>
    </FigureShell>
  );
}

function Donut({
  percent,
  label,
  count,
}: {
  percent: string;
  label: string;
  count: string;
}) {
  const numeric = Number(percent.replace(",", "."));
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative size-[7.5rem] rounded-full sm:size-36"
        style={{
          background: `conic-gradient(#FFC400 0 ${numeric}%, #E8E6E1 ${numeric}% 100%)`,
        }}
        role="img"
        aria-label={`${label}: ${percent} Prozent – ${count}`}
      >
        <div className="absolute inset-[18%] flex items-center justify-center rounded-full bg-[#F7F5F0]">
          <span className="font-heading text-lg font-bold tabular-nums text-mention-dark sm:text-2xl">
            {percent}&nbsp;%
          </span>
        </div>
      </div>
      <p className="mt-3 font-heading text-sm font-semibold text-mention-dark sm:text-base">{label}</p>
      <p className="mt-1 text-xs text-mention-gray">{count}</p>
    </div>
  );
}

export function VisualMarketComparison() {
  return (
    <FigureShell
      labelledBy="fig-market-comparison"
      caption="Anteil der Antworten mit mindestens einem zusätzlichen relevanten Anbieter: Treuhand 93,1 Prozent (67 von 72), Sensorik 56,9 Prozent (41 von 72), Internationale Schulen 34,7 Prozent (25 von 72). Gesamt 61,6 Prozent (133 von 216)."
    >
      <p className="font-heading text-xl font-bold tracking-tight text-mention-dark sm:text-2xl">
        Wie stark KI das Wettbewerbsfeld erweitert, hängt vom Markt ab.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mention-gray sm:text-base">
        Der Anteil der Antworten mit mindestens einem zusätzlichen relevanten Anbieter unterscheidet sich deutlich.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
        <Donut percent="93,1" label="Treuhand" count="67 von 72 Antworten" />
        <Donut percent="56,9" label="Sensorik" count="41 von 72 Antworten" />
        <Donut percent="34,7" label="Internationale Schulen" count="25 von 72 Antworten" />
      </div>

      <div className="mt-8 rounded-2xl bg-mention-dark px-4 py-3.5 text-center text-sm leading-snug text-white sm:rounded-full sm:px-5 sm:text-[0.95rem]">
        <span className="font-semibold">Gesamt: 61,6 %</span>
        <span className="mx-2 hidden opacity-50 sm:inline">·</span>
        <span className="mt-1 block sm:mt-0 sm:inline">
          133 von 216 Antworten enthielten mindestens einen zusätzlichen relevanten Anbieter.
        </span>
      </div>
    </FigureShell>
  );
}

export function VisualProviderFragmentation() {
  const rows: Array<{ n: number; label: string; accent?: boolean; muted?: boolean }> = [
    { n: 55, label: "nur 1 KI", accent: true },
    { n: 21, label: "2 KIs" },
    { n: 16, label: "3 KIs" },
    { n: 1, label: "alle 4", muted: true },
  ];

  return (
    <FigureShell
      labelledBy="fig-provider-fragmentation"
      caption="Von 93 zusätzlich identifizierten Anbietern erschienen 55 nur bei einer KI (59,1 Prozent), 21 bei zwei, 16 bei drei und 1 bei allen vier. Gemeinsame Schnittmenge: 1 von 93."
    >
      <p className="font-heading text-xl font-bold tracking-tight text-mention-dark sm:text-2xl">
        Vier KIs, unterschiedliche Wettbewerbsfelder.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mention-gray sm:text-base">
        Die meisten zusätzlich identifizierten Wettbewerber erscheinen nicht systemübergreifend.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-stretch">
        <div>
          <p className="font-heading text-4xl font-bold tabular-nums text-mention-dark sm:text-5xl">59,1&nbsp;%</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mention-dark sm:text-base">
            der zusätzlich identifizierten Wettbewerber erschienen nur bei einer der vier untersuchten KIs.
          </p>

          <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.1em] text-mention-gray uppercase">
            Verteilung der 93 zusätzlich identifizierten Anbieter
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-4 text-center"
              >
                <p
                  className={`font-heading text-3xl font-bold tabular-nums ${
                    row.accent ? "text-primary" : row.muted ? "text-mention-gray" : "text-mention-dark"
                  }`}
                >
                  {row.n}
                </p>
                <p className="mt-1 text-xs text-mention-gray">{row.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 sm:p-7">
          <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-mention-dark uppercase">
            Gemeinsame Schnittmenge
          </p>
          <p className="mt-3 font-heading text-4xl font-bold tabular-nums text-mention-dark sm:text-5xl">
            1 von 93
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mention-dark">
            Nur ein zusätzlicher relevanter Anbieter tauchte bei ChatGPT, Claude, Gemini und Perplexity auf.
          </p>
        </div>
      </div>
    </FigureShell>
  );
}

export function VisualTemporalVolatility() {
  return (
    <FigureShell
      labelledBy="fig-temporal-volatility"
      caption="Aggregierte Sichtbarkeit blieb bei 71,25 Prozent, während sich 58,1 Prozent der Sets veränderten: 249 blieben sichtbar, 65 verschwanden, 125 kamen neu hinzu. Zeitvergleich nur Claude, Gemini und Perplexity; ChatGPT wegen Modellwechsels ausgeschlossen."
    >
      <p className="font-heading text-xl font-bold tracking-tight text-mention-dark sm:text-2xl">
        Sieht stabil aus. Ist es aber nicht.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mention-gray sm:text-base">
        Der aggregierte Sichtbarkeitswert blieb exakt gleich – während sich darunter das Wettbewerbsfeld deutlich
        verschob.
      </p>

      <div className="mt-8 flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-end justify-center gap-2 overflow-hidden sm:gap-6 lg:gap-6">
          <div className="min-w-0 shrink text-center">
            <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark sm:text-4xl lg:text-[2.75rem]">
              71,25&nbsp;%
            </p>
            <p className="mt-2 text-xs text-mention-gray">Tag 0</p>
          </div>
          <div className="mb-2 flex h-8 w-6 shrink-0 items-center justify-center text-primary sm:mb-3 sm:w-8" aria-hidden>
            <span className="block size-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-primary sm:border-l-[14px]" />
          </div>
          <div className="min-w-0 shrink text-center">
            <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark sm:text-4xl lg:text-[2.75rem]">
              71,25&nbsp;%
            </p>
            <p className="mt-2 text-xs text-mention-gray">14 Tage später</p>
          </div>
        </div>

        <div className="mx-auto flex size-40 flex-col items-center justify-center rounded-full bg-primary text-center sm:size-44">
          <p className="text-xs font-bold tracking-wide text-mention-dark uppercase">Aber:</p>
          <p className="mt-1 font-heading text-3xl font-bold tabular-nums text-mention-dark sm:text-4xl">
            58,1&nbsp;%
          </p>
          <p className="mt-1 max-w-[7rem] text-xs leading-snug text-mention-dark">der Sets verändert</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white px-4 py-5 text-center">
          <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark">249</p>
          <p className="mt-1 text-sm text-mention-gray">blieben sichtbar</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white px-4 py-5 text-center">
          <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark">65</p>
          <p className="mt-1 text-sm text-mention-gray">verschwanden</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white px-4 py-5 text-center">
          <p className="font-heading text-3xl font-bold tabular-nums text-primary">125</p>
          <p className="mt-1 text-sm text-mention-gray">kamen neu hinzu</p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-mention-gray">
        Zeitvergleich: Claude, Gemini und Perplexity. ChatGPT wurde wegen eines Modellwechsels ausgeschlossen.
      </p>
    </FigureShell>
  );
}
