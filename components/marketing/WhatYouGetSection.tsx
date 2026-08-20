import Link from "next/link";

import { ReportScoreExcerpt } from "@/components/marketing/ReportScoreExcerpt";

const deliverables = [
  "3–5 kaufnahe Fragen für dein Unternehmen und deinen Markt",
  "ChatGPT, Claude, Gemini & Perplexity plus bis zu 3 Wettbewerber",
  "68+ Website-, Trust- und Marktsignale",
  "10 priorisierte Massnahmen mit konkreten nächsten Schritten",
  "Online-Report innerhalb von 24 Stunden",
] as const;

function Checkmark() {
  return (
    <svg
      className="mt-0.5 size-[1.35rem] shrink-0 text-primary sm:mt-1 sm:size-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 12.5 9.2 17.2 19.5 6.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatYouGetSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Ein individueller Report, mit dem du weiterarbeiten kannst.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mention-gray sm:text-lg">
            Nach dem AI Visibility Audit erhältst du deinen individuellen MentionBee-Report.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-5 lg:gap-12">
          <ul className="space-y-5 lg:col-span-2 lg:space-y-6 lg:pt-1" role="list">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 sm:gap-3.5">
                <Checkmark />
                <p className="text-base leading-snug text-mention-dark sm:text-lg sm:leading-snug">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="min-w-0 lg:col-span-3">
            <ReportScoreExcerpt />
            <Link
              href="/sample-report"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark sm:w-auto"
            >
              Beispielreport ansehen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
