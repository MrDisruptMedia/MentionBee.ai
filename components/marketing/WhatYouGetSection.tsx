import Link from "next/link";

import { ReportScoreExcerpt } from "@/components/marketing/ReportScoreExcerpt";

const deliverables = [
  "3–6 kaufnahe Fragen für dein Unternehmen und deinen Markt",
  "ChatGPT, Claude, Gemini & Perplexity plus bis zu 3 Wettbewerber",
  "Über 100 Datenpunkt-Checks aus KI-Antworten, Wettbewerb, Website-, Trust- und Marktsignalen",
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
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
              Ein individueller Report, mit dem du weiterarbeiten kannst.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mention-gray sm:text-lg">
              Nach dem AI Visibility Audit erhältst du deinen individuellen MentionBee-Report.
            </p>

            <ul className="mt-7 space-y-5 lg:mt-8 lg:space-y-6" role="list">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-3.5">
                  <Checkmark />
                  <p className="text-base leading-snug text-mention-dark sm:text-lg sm:leading-snug">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm leading-relaxed text-mention-gray sm:mt-8">
              <span className="font-semibold text-mention-dark">
                Du willst die Massnahmen nicht selbst umsetzen?
              </span>{" "}
              Auf Wunsch begleitet dich{" "}
              <a
                href="https://disruptmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mention-dark underline underline-offset-2 decoration-zinc-300 transition-colors hover:text-mention-yellow-text hover:decoration-primary"
              >
                Disrupt Media
              </a>
              , die Agentur hinter MentionBee, bei der Umsetzung.
            </p>
          </div>

          <div className="min-w-0">
            <ReportScoreExcerpt />
            <Link
              href="/sample-report"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark sm:w-auto"
            >
              Beispielreport ansehen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
