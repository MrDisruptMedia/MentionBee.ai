export const metadata = {
  title: "Datenschutzerklärung | MentionBee.ai",
};

export default function DatenschutzerklaerungPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 font-heading text-3xl font-bold text-mention-dark">Datenschutzerklärung</h1>

      <div className="space-y-6 leading-relaxed text-mention-gray">
        <div>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark first:mt-0">Verantwortlicher</h2>
          <p>Disrupt Media Kunz</p>
          <p>Olaf Kunz</p>
          <p>Wieslergasse 2, 8049 Zürich, Schweiz</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:hello@mentionbee.ai" className="text-primary underline underline-offset-2">
              hello@mentionbee.ai
            </a>
          </p>
        </div>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">1. Erhobene Daten</h2>
          <p>
            Wir erheben folgende Daten: E-Mail-Adresse, Name, Website-URL, optional Unternehmensname und
            Wettbewerber-URLs. Diese Daten werden ausschliesslich zur Erstellung des AI Visibility Reports und
            – bei ausdrücklicher Einwilligung – für den optionalen E-Mail-Versand verwendet.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">2. Cookies und Einwilligung</h2>
          <p>
            Diese Website verwendet Cookies. Nicht notwendige Cookies (Analytics, Marketing) werden nur nach
            ausdrücklicher Einwilligung via Cookie-Banner gesetzt. Die Einwilligung kann jederzeit widerrufen
            werden.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">3. Drittanbieter</h2>
          <p>Wir arbeiten mit folgenden Drittanbietern zusammen:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Stripe Inc., USA – Zahlungsabwicklung</li>
            <li>Resend Inc., USA – E-Mail-Versand</li>
            <li>Vercel Inc., USA – Hosting und Infrastruktur</li>
            <li>Google LLC, USA – Google Tag Manager (Tag-Verwaltung)</li>
            <li>Google LLC, USA – Google Analytics 4 (Nutzungsanalyse, IP-Anonymierung aktiv)</li>
            <li>Google LLC, USA – Google Ads / Conversion Tracking (Werbe-Tracking)</li>
          </ul>
          <p className="mt-4">
            Datentransfers in die USA erfolgen auf Basis von Standardvertragsklauseln (Standard Contractual
            Clauses) gemäss Art. 46 DSGVO.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">4. Speicherdauer</h2>
          <p>
            Daten werden gespeichert, bis eine Löschanfrage eingeht oder der Zweck der Verarbeitung entfällt.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">5. Betroffenenrechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Anfragen per E-Mail an:{" "}
            <a href="mailto:hello@mentionbee.ai" className="text-primary underline underline-offset-2">
              hello@mentionbee.ai
            </a>
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">6. Anwendbares Recht</h2>
          <p>
            Es gilt das Schweizer Datenschutzgesetz (DSG). Soweit EU-Bürger betroffen sind, findet ergänzend die
            DSGVO Anwendung.
          </p>
        </section>

        <p className="mt-8 text-sm text-mention-gray">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
