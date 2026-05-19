import Link from "next/link";

export const metadata = {
  title: "AGB | MentionBee.ai",
};

export default function AgbPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-16">
      <h1 className="mb-8 font-heading text-3xl font-bold text-mention-dark">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="space-y-6 leading-relaxed text-mention-gray">
        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark first:mt-0">§1 Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Verträge zwischen Disrupt Media Kunz, Wieslergasse 2, 8049 Zürich
            (nachfolgend &quot;Anbieter&quot;) und Kunden, die über mentionbee.ai Berichte oder Dienstleistungen
            bestellen.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§2 Vertragsgegenstand</h2>
          <p>
            Der Anbieter erstellt auf Basis öffentlich zugänglicher Daten und KI-gestützter Analyse einen
            &quot;AI Visibility Report&quot; (nachfolgend &quot;Report&quot;). Der Report dient als
            Analyse-Grundlage und stellt keine Rechts-, Steuer- oder Unternehmensberatung dar.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§3 Bestellung und Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch Abschluss des Bestellvorgangs und Zahlungsbestätigung zustande. Die
            Zahlungsabwicklung erfolgt über Stripe. Preise verstehen sich in EUR, exkl. gesetzlich
            anfallender Steuern.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§4 Lieferung</h2>
          <p>
            Der Report wird nach erfolgreicher Zahlung automatisiert erstellt und per E-Mail zugestellt. Die
            Lieferzeit beträgt in der Regel 24–48 Stunden. Bei technischen Störungen kann sich die Lieferzeit
            verzögern; der Anbieter informiert den Kunden in diesem Fall per E-Mail.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§5 Widerrufsrecht / Rückgabe</h2>
          <p>
            Bei digitalen Inhalten, die auf ausdrücklichen Wunsch des Kunden vor Ablauf der Widerrufsfrist
            geliefert werden, erlischt das Widerrufsrecht mit Beginn der Ausführung. Mit Abschluss der
            Bestellung stimmt der Kunde ausdrücklich zu, dass die Erstellung des Reports unmittelbar beginnt,
            und bestätigt, dass er sein Widerrufsrecht damit verliert.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§6 Haftungsbeschränkung</h2>
          <p>
            Die Analysen und Empfehlungen im Report basieren auf automatisierten Abfragen bei KI-Systemen
            (u.a. ChatGPT, Claude, Gemini, Perplexity) zum Zeitpunkt der Erstellung. KI-Antworten können
            variieren und sind nicht garantiert reproduzierbar. Der Report stellt eine Momentaufnahme dar und
            erhebt keinen Anspruch auf Vollständigkeit oder Richtigkeit.
          </p>
          <p className="mt-4">Der Anbieter haftet nicht für:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Schäden, die durch die Umsetzung von im Report enthaltenen Empfehlungen entstehen</li>
            <li>Entgangenen Gewinn oder mittelbare Schäden</li>
            <li>Fehler oder Ausfälle von Drittanbietern (KI-Systeme, Zahlungsdienstleister)</li>
          </ul>
          <p className="mt-4">
            Die Haftung ist auf den Betrag des bezahlten Reportpreises beschränkt, soweit gesetzlich zulässig.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§7 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäss unserer Datenschutzerklärung unter{" "}
            <Link href="/datenschutzerklaerung" className="text-primary underline underline-offset-2">
              mentionbee.ai/datenschutzerklaerung
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">
            §8 Anwendbares Recht und Gerichtsstand
          </h2>
          <p>
            Es gilt ausschliesslich Schweizer Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Zürich,
            Schweiz.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-xl font-semibold text-mention-dark">§9 Änderungen</h2>
          <p>
            Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Es gilt die zum Zeitpunkt der
            Bestellung gültige Version.
          </p>
        </section>

        <p className="mt-8 text-sm text-mention-gray">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
