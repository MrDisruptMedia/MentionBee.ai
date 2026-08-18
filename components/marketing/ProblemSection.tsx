export function ProblemSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-mention-light py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
          Deine Kunden suchen bereits anders.
        </h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-mention-gray sm:text-lg">
          <p>Sie googeln nicht mehr nur. Sie fragen ChatGPT, Claude oder Gemini:</p>

          <ul className="space-y-3" role="list">
            <li className="rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-mention-dark">
              „Welche Anbieter für [deine Leistung] gibt es in meiner Region?“
            </li>
            <li className="rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-mention-dark">
              „Welches Unternehmen eignet sich am besten für [mein Problem]?“
            </li>
            <li className="rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-mention-dark">
              „Welche Alternativen gibt es zu [bekannter Wettbewerber]?“
            </li>
          </ul>

          <p>
            Und die KI antwortet mit konkreten Namen.
            <br />
            Vielleicht mit deinen Wettbewerbern.
            <br />
            Vielleicht nicht mit dir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-mention-dark/10 bg-mention-dark px-6 py-7 text-white sm:px-8">
          <p className="text-lg leading-relaxed font-medium sm:text-xl">
            Ein Kunde sucht genau die Leistung, die du anbietest. Die KI nennt einen Namen – und es ist
            nicht deiner. Das Bittere daran: Du erfährst es nicht einmal.
          </p>
        </div>

        <div className="mt-10 space-y-4 text-base leading-relaxed text-mention-gray sm:text-lg">
          <p>
            Und wenn dein Unternehmen in solchen Antworten nicht vorkommt, reicht es nicht zu wissen,
            dass du fehlst.
          </p>
          <p>Die wichtigere Frage lautet:</p>
          <p className="font-heading text-4xl font-bold tracking-tight text-mention-dark sm:text-5xl">
            Warum?
          </p>
        </div>
      </div>
    </section>
  );
}
