export const metadata = {
  title: "Impressum | MentionBee.ai",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-16">
      <h1 className="mb-8 font-heading text-3xl font-bold text-mention-dark">Impressum</h1>

      <div className="space-y-6 leading-relaxed text-mention-gray">
        <p>Angaben gemäss Schweizer Recht (DSG / OR)</p>

        <div>
          <p className="font-medium text-mention-dark">Einzelfirma</p>
          <p>Disrupt Media Kunz</p>
          <p>Wieslergasse 2</p>
          <p>8049 Zürich</p>
          <p>Schweiz</p>
        </div>

        <p>
          E-Mail:{" "}
          <a href="mailto:hello@mentionbee.ai" className="text-primary underline underline-offset-2">
            hello@mentionbee.ai
          </a>
        </p>

        <p>Handelsregister-Nr.: CH-020.1.074.206-8</p>
        <p>UID/MWST: CHE-256.858.378</p>

        <p>Verantwortlich für den Inhalt: Olaf Kunz</p>

        <div>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">Hinweis zu externen Links</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer
            Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
          </p>
        </div>
      </div>
    </div>
  );
}
