import Link from "next/link";

const tableRows = [
  {
    prompt: "Welche Projektmanagement-Tools empfiehlst du für KMU?",
    system: "ChatGPT",
    mention: "Ja",
    recommendation: "Erwähnt",
  },
  {
    prompt: "Beste KMU-Software für Buchhaltung?",
    system: "Perplexity",
    mention: "Nein",
    recommendation: "—",
  },
  {
    prompt: "CRM für kleine Agenturen?",
    system: "ChatGPT",
    mention: "Ja",
    recommendation: "Empfohlen",
  },
  {
    prompt: "Top HR-Tools für Remote-Teams?",
    system: "Claude",
    mention: "Ja",
    recommendation: "Neutrales Zitiert",
  },
  {
    prompt: "Marketing Automation für B2B?",
    system: "Gemini",
    mention: "Nein",
    recommendation: "—",
  },
] as const;

export function SampleReportTeaser() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex max-w-xl flex-col gap-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
            Beispielreport
          </h2>
          <p className="text-lg leading-relaxed text-mention-gray">
            Sieh dir einen Ausschnitt eines typischen Reports an – mit Score, Mentions,
            Wettbewerbsvergleich und Empfehlungen.
          </p>
          <Link
            href="/sample-report"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-dark"
          >
            <span aria-hidden>📄</span>
            Beispielreport ansehen
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-x-auto rounded-2xl border border-zinc-200/90 bg-mention-light/40 shadow-sm ring-1 ring-zinc-100">
            <p className="border-b border-zinc-200/80 bg-white px-4 py-3 text-sm font-semibold text-mention-dark">
              Top Mentions (Auszug)
            </p>
            <table className="w-full min-w-[32rem] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-200/80 bg-white text-[0.65rem] font-semibold tracking-wide text-mention-gray uppercase sm:text-xs">
                  <th className="px-3 py-2.5 sm:px-4">Prompt</th>
                  <th className="whitespace-nowrap px-2 py-2.5 sm:px-3">AI-System</th>
                  <th className="whitespace-nowrap px-2 py-2.5 sm:px-3">Erwähnung</th>
                  <th className="whitespace-nowrap px-2 py-2.5 pr-4 sm:px-3">Empfehlung</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr
                    key={row.prompt}
                    className="border-b border-zinc-100 bg-white/90 last:border-b-0"
                  >
                    <td className="max-w-[12rem] px-3 py-2.5 text-mention-dark sm:max-w-none sm:px-4">
                      {row.prompt}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2.5 font-medium text-mention-dark sm:px-3">
                      {row.system}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2.5 sm:px-3">
                      <span
                        className={
                          row.mention === "Ja"
                            ? "font-medium text-emerald-600"
                            : "text-mention-gray"
                        }
                      >
                        {row.mention}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2.5 pr-4 text-mention-gray sm:px-3">
                      {row.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-mention-dark">
            <p className="font-medium text-mention-dark">Empfehlung</p>
            <p className="mt-1 text-mention-gray">
              Diese Marke wird in Themen rund um Projektmanagement selten empfohlen. Fokussiere
              klare Use Cases und ein vergleichbares Alleinstellungsmerkmal in den Prompts, in denen
              Nutzer wirklich entscheiden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
