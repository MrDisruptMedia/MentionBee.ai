export const metadata = {
  title: "11 Fakten über Bienen – Weltbienentag 2026 | MentionBee",
  description:
    "Bienen sind für unser Ökosystem fundamental. 11 faszinierende Fakten zum Weltbienentag – und warum 1% unserer Einnahmen an Bienen.ch geht.",
  openGraph: {
    title: "11 Fakten über Bienen – Weltbienentag 2026 | MentionBee",
    description:
      "Bienen sind für unser Ökosystem fundamental. 11 faszinierende Fakten zum Weltbienentag – und warum 1% unserer Einnahmen an Bienen.ch geht.",
    url: "https://mentionbee.ai/weltbienentag",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function WeltbienentagPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-16">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">20. Mai – Weltbienentag</p>
      <h1 className="mb-8 font-heading text-3xl font-bold text-mention-dark">
        11 Fakten über Bienen, die dich sprachlos machen werden
      </h1>

      <div className="space-y-6 leading-relaxed text-mention-gray">
        <p>
          Heute ist Weltbienentag – und ein guter Moment, um innezuhalten. Bienen sind für unser Ökosystem
          fundamental. Hier sind 11 Fakten, die zeigen, wie faszinierend diese kleinen Wesen wirklich sind.
        </p>

        <img
          src="/bienen-fakten.png"
          alt="Bienen-Fakten: 1.000 Blüten pro Ausflug, 40.000 km für 1 kg Honig, 80% der Bestäubung, 5–8 Std. Schlaf"
          className="w-full max-w-full rounded-2xl shadow-sm"
        />

        <div>
          <h2 className="mb-4 text-xl font-semibold text-mention-dark">11 Fakten</h2>
          <ol className="list-decimal space-y-4 pl-5">
            <li>
              Eine Biene besucht bis zu 1.000 Blüten pro Ausflug – und fliegt dabei bis zu 3 km weit. 🐝
            </li>
            <li>
              Um 1 kg Honig zu produzieren, legen Bienen gemeinsam rund 40.000 km zurück – das entspricht einmal
              um die Erde. 🍯
            </li>
            <li>
              Bienen kommunizieren durch Tänze. Der «Schwänzeltanz» teilt Richtung, Distanz und Qualität einer
              Nahrungsquelle mit – mit erstaunlicher Präzision. 📡
            </li>
            <li>
              Trotz eines Gehirns von der Grösse eines Sesamkorns können Bienen menschliche Gesichter erkennen. 🧠
            </li>
            <li>
              Eine Arbeiterin produziert in ihrem ganzen Leben (ca. 6 Wochen) nur etwa 1/12 Teelöffel Honig. ⏱️
            </li>
            <li>
              Im Bienenstock herrscht konstant 35°C – die Bienen regulieren die Temperatur durch Fächeln mit ihren
              Flügeln. 🌡️
            </li>
            <li>
              Bienen sind für etwa 80% der Bestäubung von Nutzpflanzen weltweit verantwortlich – ein wirtschaftlicher
              Wert von über 150 Milliarden Euro jährlich. 🌍
            </li>
            <li>
              Bienen schlafen. Forschungen zeigen, dass sie zwischen 5 und 8 Stunden pro Nacht ruhen – oft sogar in
              der Blüte. 💤
            </li>
            <li>
              Der Geruchssinn einer Biene ist 100× feiner als der eines Menschen. Bienenspürhunde gibt es nicht, weil
              Bienen schlicht besser riechen. 👃
            </li>
            <li>
              Bienen haben ein inneres GPS-System und finden dank Sonnenstand, Magnetfeld und Landmarken immer nach
              Hause. 🕐
            </li>
            <li>
              Wenn eine Bienenkönigin stirbt und keine Nachfolgerin da ist, kann das gesamte Volk innerhalb weniger
              Wochen kollabieren. ❌
            </li>
          </ol>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 text-mention-dark">
          <p className="italic">
            „Wie Bienen wissen, wann und wo sie gefragt sind – so hilft MentionBee Unternehmen zu verstehen, ob sie in
            der Welt der KI-Suche sichtbar sind. Wer nicht erwähnt wird, existiert nicht.“
          </p>
        </blockquote>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-mention-dark">MentionBee</h2>
          <p>
            MentionBee analysiert, ob dein Unternehmen von ChatGPT, Claude, Gemini und Perplexity empfohlen wird – oder
            ob die Konkurrenz das Feld übernimmt.
          </p>
          <p className="pt-2">
            <a href="https://mentionbee.ai" className="text-primary font-semibold underline underline-offset-2">
              Kostenlosen Report anfordern
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-mention-dark">Bienen.ch</h2>
          <p>
            Und weil wir&apos;s ernst meinen: 1% aller MentionBee-Einnahmen gehen an Bienen.ch – das Zentrum zur
            Förderung der Bienengesundheit in der Schweiz.
          </p>
          <p>
            <a
              href="https://bienen.ch"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary underline underline-offset-2"
            >
              https://bienen.ch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
