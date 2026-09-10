import Link from "next/link";

import { CopyCitationButton } from "@/components/research/CopyCitationButton";
import {
  VisualMarketComparison,
  VisualProviderFragmentation,
  VisualTemporalVolatility,
  VisualTreuhandField,
} from "@/components/research/AiVisibilityStudyVisuals";

export const STUDY_PDF_PATH = "/mentionbee-ai-visibility-study-2026.pdf";
export const STUDY_CANONICAL_PATH = "/studie/ai-visibility-2026";

const findings = [
  {
    value: "61,6 %",
    text: "der untersuchten Antworten brachten mindestens einen zusätzlichen relevanten Anbieter ins Spiel.",
  },
  {
    value: "59,1 %",
    text: "der zusätzlich identifizierten Wettbewerber erschienen nur bei einem der vier KI-Systeme.",
  },
  {
    value: "58,1 %",
    text: "der vergleichbaren Anbieter-Sets veränderten sich innerhalb von zwei Wochen.",
  },
] as const;

const glanceStats = [
  { value: "1’164", label: "erfolgreiche Studienabfragen" },
  { value: "3", label: "Märkte" },
  { value: "4", label: "KI-Systeme" },
  { value: "18", label: "kaufnahe Anbieterfragen" },
] as const;

export function AiVisibilityStudy2026Page() {
  return (
    <article className="min-w-0 bg-white">
      {/* Hero */}
      <header className="border-b border-zinc-100 bg-[#F7F5F0]">
        <div className="mx-auto w-full min-w-0 max-w-3xl px-4 pt-24 pb-14 md:pt-28 md:pb-16">
          <p className="text-xs font-semibold tracking-[0.14em] text-mention-gray uppercase">
            MentionBee AI Visibility Study 2026
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            Deine Wettbewerberliste ist nicht das KI-Wettbewerbsfeld
          </h1>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-mention-gray sm:text-lg">
            <p>
              Unternehmen kennen ihre wichtigsten Wettbewerber. Doch sobald Kunden ChatGPT, Claude, Gemini oder
              Perplexity nach passenden Anbietern fragen, entsteht eine neue Frage:
            </p>
            <p className="font-medium text-mention-dark">Mit wem vergleicht mich die KI eigentlich?</p>
            <p>
              Die MentionBee AI Visibility Study 2026 hat das anhand von{" "}
              <strong className="font-semibold text-mention-dark">1’164 erfolgreichen Studienabfragen</strong>, vier
              KI-Systemen und drei Märkten untersucht. Das Ergebnis: KI-Systeme erweitern bekannte Wettbewerbsfelder,
              unterscheiden sich deutlich voneinander – und verändern ihre sichtbaren Anbieter über die Zeit.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {findings.map((item) => (
              <div
                key={item.value}
                className="min-w-0 rounded-2xl border border-zinc-200 bg-white px-5 py-6 shadow-[0_1px_0_rgba(26,26,46,0.04)]"
              >
                <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark sm:text-[2rem] lg:text-[2.15rem]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mention-gray">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={STUDY_PDF_PATH}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-primary-dark"
            >
              Research Report herunterladen
            </a>
            <a
              href="#methodik"
              className="inline-flex min-h-11 items-center justify-center px-2 py-2 text-sm font-medium text-mention-dark underline underline-offset-4 hover:text-mention-gray"
            >
              Zur Methodik
            </a>
          </div>

          <p className="mt-6 text-sm text-mention-gray">
            Studie von{" "}
            <Link href="/autor/olaf-kunz" className="font-medium text-mention-dark hover:text-mention-gray">
              Olaf Kunz
            </Link>{" "}
            · MentionBee.ai · September 2026
          </p>
        </div>
      </header>

      <div className="mx-auto w-full min-w-0 max-w-3xl px-4 py-14 md:py-16">
        {/* At a glance */}
        <section aria-labelledby="auf-einen-blick" className="mb-16">
          <h2 id="auf-einen-blick" className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Die Studie auf einen Blick
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {glanceStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-mention-light px-4 py-5">
                <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark">{stat.value}</p>
                <p className="mt-2 text-xs leading-snug text-mention-gray sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 px-5 py-5">
              <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">Märkte</p>
              <ul className="mt-3 space-y-1.5 text-sm text-mention-dark">
                <li>Treuhand Zürich</li>
                <li>Sensorik</li>
                <li>Internationale Schulen</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 px-5 py-5">
              <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">KI-Systeme</p>
              <ul className="mt-3 space-y-1.5 text-sm text-mention-dark">
                <li>ChatGPT</li>
                <li>Claude</li>
                <li>Gemini</li>
                <li>Perplexity</li>
              </ul>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-mention-gray">
            Getestet wurden webfähige KI-Systeme über ihre APIs – nicht Consumer-Oberflächen.
          </p>
        </section>

        {/* Article body */}
        <div className="space-y-6 text-base leading-relaxed text-mention-gray [&_strong]:font-semibold [&_strong]:text-mention-dark">
          <p>
            Die Konsequenz ist grösser als eine neue Kennzahl für{" "}
            <Link href="/blog/ai-visibility-vs-seo-2026" className="font-medium text-mention-dark underline underline-offset-2">
              AI Visibility
            </Link>
            . Wer nur misst, ob das eigene Unternehmen sichtbar ist, sieht möglicherweise nur einen Teil des eigentlichen
            Wettbewerbsfelds.
          </p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Was wir untersucht haben
          </h2>
          <p>Für die MentionBee AI Visibility Study 2026 haben wir drei unterschiedliche Märkte untersucht:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Treuhandunternehmen im Kanton Zürich</li>
            <li>einen spezialisierten Sensorik-Markt</li>
            <li>internationale Schulen im Raum Zürich</li>
          </ul>
          <p>
            Dazu wurden <strong>18 kaufnahe Anbieterfragen</strong> über vier KI-Systeme getestet: ChatGPT, Claude, Gemini
            und Perplexity. Die Messungen wurden zu mehreren Zeitpunkten wiederholt.
          </p>
          <p>
            Insgesamt umfasst die Studie <strong>1’164 erfolgreiche Studienabfragen</strong>.
          </p>
          <p>
            Wichtig für die Einordnung: Getestet wurden webfähige KI-Systeme über ihre APIs. Die Ergebnisse sind deshalb
            nicht automatisch identisch mit den jeweiligen Consumer-Oberflächen.
          </p>
          <p>
            Für jeden Markt gab es ein vorab definiertes, bewusst begrenztes Anbieterpanel. Genau das entspricht einer
            typischen Wettbewerbsbeobachtung in Unternehmen: Man startet mit einer Liste der Anbieter, die man für relevant
            hält.
          </p>
          <p>
            Doch diese Liste erwies sich nicht als dasselbe wie das Wettbewerbsfeld, das die KI-Systeme sichtbar machten.
          </p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Im Treuhandmarkt tauchten in 93,1 % der Antworten zusätzliche Anbieter auf
          </h2>
          <p>Der deutlichste Effekt zeigte sich im Zürcher Treuhandmarkt.</p>
          <p>
            Unser vorab definiertes Vergleichspanel umfasste <strong>24 Treuhandunternehmen</strong>. Es sollte nicht den
            gesamten Markt vollständig abbilden, sondern eine feste Ausgangsbasis für die Wettbewerbsbeobachtung schaffen.
          </p>
          <p>
            Dann haben wir geprüft, welche weiteren relevanten Unternehmen die KI-Systeme in ihren Antworten nannten.
          </p>
          <p>Das Ergebnis:</p>
          <blockquote className="border-l-4 border-primary bg-mention-light/80 py-3 pl-4 text-mention-dark">
            <p>
              In 67 von 72 untersuchten Treuhand-Antworten – <strong>93,1 %</strong> – tauchte mindestens ein relevanter
              Anbieter ausserhalb des vorab definierten Panels auf.
            </p>
          </blockquote>
          <p>
            Nach Deduplizierung und manueller Relevanzprüfung identifizierten wir im Treuhandmarkt{" "}
            <strong>71 zusätzliche relevante Unternehmen</strong>.
          </p>
          <p>Aus einer Beobachtung von 24 Unternehmen wurde damit ein deutlich grösseres KI-Wettbewerbsfeld.</p>
          <p>
            Das bedeutet nicht, dass eine Liste von 24 Wettbewerbern „falsch“ ist. In der Praxis arbeitet kaum ein
            Unternehmen mit einer vollständigen Liste jedes potenziellen Konkurrenten. Entscheidend ist etwas anderes:
          </p>
          <p className="font-medium text-mention-dark">Die KI hält sich nicht an deine Wettbewerberliste.</p>
          <p>
            Sie kann Unternehmen ins Spiel bringen, die in klassischer Wettbewerbsbeobachtung bislang gar nicht vorkommen.
          </p>
          <p>Genau dadurch entsteht eine zusätzliche strategische Frage:</p>
          <p className="font-medium text-mention-dark">
            Nicht nur: Wie sichtbar bin ich gegenüber meinen bekannten Wettbewerbern? Sondern: Mit wem vergleicht mich die
            KI überhaupt?
          </p>

          <VisualTreuhandField />

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Der Effekt ist je nach Markt unterschiedlich stark
          </h2>
          <p>Der Treuhandmarkt war der stärkste Fall – aber nicht der einzige.</p>
          <p>
            Über alle drei untersuchten Märkte hinweg enthielten{" "}
            <strong>133 von 216 Antworten mindestens einen zusätzlichen relevanten Anbieter ausserhalb des jeweiligen
            Vergleichspanels</strong>
            . Das entspricht <strong>61,6 %</strong>.
          </p>
          <p>Die Unterschiede zwischen den Märkten waren deutlich:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Treuhand:</strong> 93,1 % – 67 von 72 Antworten
            </li>
            <li>
              <strong>Sensorik:</strong> 56,9 % – 41 von 72 Antworten
            </li>
            <li>
              <strong>Internationale Schulen:</strong> 34,7 % – 25 von 72 Antworten
            </li>
          </ul>
          <p>
            Damit zeigt die Studie auch: Es gibt nicht „den“ einen Effekt von KI auf Wettbewerbsfelder.
          </p>
          <p>
            Wie stark KI-Systeme das beobachtete Wettbewerbsfeld erweitern, hängt vom untersuchten Markt ab.
          </p>
          <p>
            Gerade deshalb wäre es falsch, aus einem einzelnen Branchenbeispiel eine universelle Aussage abzuleiten. Für die
            untersuchten Märkte lässt sich aber klar zeigen: Ein vorab definiertes Wettbewerberpanel und das in
            KI-Antworten sichtbare Wettbewerbsfeld sind nicht dasselbe.
          </p>
          <p className="font-medium text-mention-dark">Panel ≠ Markt ≠ KI-Wettbewerbsfeld.</p>

          <VisualMarketComparison />

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Vier KI-Systeme können vier unterschiedliche Wettbewerbsfelder erzeugen
          </h2>
          <p>
            Die nächste Frage war: Wenn zusätzliche Wettbewerber auftauchen – erscheinen dann bei ChatGPT, Claude, Gemini
            und Perplexity im Wesentlichen dieselben Unternehmen?
          </p>
          <p>Auch hier war die Antwort überraschend deutlich.</p>
          <p>
            Über die drei Märkte hinweg identifizierten wir{" "}
            <strong>93 kanonisch deduplizierte, zusätzliche relevante Unternehmen</strong> ausserhalb der vorab definierten
            Panels.
          </p>
          <p>Davon erschienen:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>55 Unternehmen nur bei einem KI-System</strong>
            </li>
            <li>
              <strong>21 bei zwei KI-Systemen</strong>
            </li>
            <li>
              <strong>16 bei drei KI-Systemen</strong>
            </li>
            <li>
              <strong>1 Unternehmen bei allen vier</strong>
            </li>
          </ul>
          <p>
            Das heisst: <strong>59,1 % der zusätzlich identifizierten Wettbewerber tauchten nur bei einer einzigen der
            vier untersuchten KIs auf.</strong>
          </p>
          <p>
            Und nur <strong>1 von 93</strong> erschien bei ChatGPT, Claude, Gemini und Perplexity zugleich.
          </p>
          <p>
            Das ist für Unternehmen wichtig, weil es eine verbreitete Annahme infrage stellt: Dass Sichtbarkeit in einem
            KI-System ungefähr dasselbe bedeutet wie Sichtbarkeit in einem anderen.
          </p>
          <p>Die Daten sprechen dagegen.</p>
          <p>
            Ein Unternehmen kann bei ChatGPT auftauchen und bei Claude nicht. Es kann bei Gemini sichtbar sein, während
            Perplexity einen anderen Anbieter nennt.
          </p>
          <p>AI Visibility ist damit kein einheitliches Ranking über verschiedene Systeme hinweg.</p>
          <p>Wer nur eine KI beobachtet, sieht möglicherweise nur einen Ausschnitt.</p>

          <VisualProviderFragmentation />

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Schon ein einzelnes Beispiel zeigt die Fragmentierung
          </h2>
          <p>Im Sensorik-Markt wurde das besonders anschaulich.</p>
          <p>Bei einer der untersuchten Anbieterfragen nannten die Systeme unterschiedliche Unternehmen:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>ChatGPT: Siemens PA, Bernt</li>
            <li>Claude: UNION Instruments, Emerson</li>
            <li>Gemini: kein Unternehmen aus dem betrachteten Sample</li>
            <li>Perplexity: RMG, ABB, Emerson</li>
          </ul>
          <p>
            Die Union dieser Antworten bestand aus sechs Unternehmen. Die Schnittmenge über alle vier Systeme war leer.
          </p>
          <p>Fünf der sechs Unternehmen erschienen nur bei einem einzigen Provider.</p>
          <p>
            Ein einzelnes Beispiel beweist natürlich noch keinen allgemeinen Markttrend. Es macht aber sichtbar, was sich
            in der aggregierten Analyse ebenfalls zeigt: Verschiedene KI-Systeme können dieselbe kaufnahe Frage mit
            deutlich unterschiedlichen Anbieterfeldern beantworten.
          </p>
          <p>Für eine AI-Visibility-Analyse reicht es deshalb nicht, nur zu fragen:</p>
          <p className="font-medium text-mention-dark">„Bin ich sichtbar?“</p>
          <p>Sinnvoller sind zusätzlich Fragen wie:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Bei welcher KI bin ich sichtbar?</li>
            <li>Welche Wettbewerber tauchen dort auf?</li>
            <li>Welche Anbieter sehe ich nur in einem System?</li>
            <li>Welche Firmen erscheinen systemübergreifend?</li>
          </ul>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Das Wettbewerbsfeld bewegt sich auch über die Zeit
          </h2>
          <p>
            Die Unterschiede bestehen nicht nur zwischen den KI-Systemen. Auch dieselbe Messung kann zu einem späteren
            Zeitpunkt ein anderes sichtbares Anbieterfeld ergeben.
          </p>
          <p>Für den sauberen Zwei-Wochen-Vergleich haben wir Claude, Gemini und Perplexity betrachtet.</p>
          <p>
            ChatGPT wurde aus diesem Vergleich ausgeschlossen, weil sich das verwendete Modell im Untersuchungszeitraum
            änderte. Ein direkter Vorher-nachher-Vergleich wäre deshalb methodisch nicht sauber gewesen.
          </p>
          <p>Bei Claude, Gemini und Perplexity zeigte sich:</p>
          <blockquote className="border-l-4 border-primary bg-mention-light/80 py-3 pl-4 text-mention-dark">
            <p>
              <strong>58,1 %</strong> der vergleichbaren Anbieter-Sets veränderten sich innerhalb von zwei Wochen bei
              mindestens einem sichtbaren Unternehmen.
            </p>
          </blockquote>
          <p>
            Nur <strong>41,9 %</strong> blieben identisch.
          </p>
          <p>
            Anders gesagt: Bei mehr als der Hälfte der vergleichbaren Sets änderte sich zumindest ein Teil des sichtbaren
            Wettbewerbsfelds.
          </p>
          <p>
            Diese Dynamik ist strategisch relevant. Ein einmaliger Screenshot beantwortet die Frage „Wer ist sichtbar?“ nur
            für einen bestimmten Zeitpunkt.
          </p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Der Gesamtwert kann gleich bleiben, obwohl sich darunter viel verändert
          </h2>
          <p>Besonders interessant wurde es beim Blick auf den aggregierten Sichtbarkeitswert.</p>
          <p>Die Present-/Sichtbarkeitsrate lag zu Beginn bei:</p>
          <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark">71,25 %</p>
          <p>Und zwei Wochen später ebenfalls bei:</p>
          <p className="font-heading text-3xl font-bold tabular-nums text-mention-dark">71,25 %</p>
          <p>Auf den ersten Blick sieht das vollkommen stabil aus.</p>
          <p>Doch darunter hatte sich einiges verschoben:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>249</strong> Sichtbarkeitsfälle blieben bestehen
            </li>
            <li>
              <strong>65</strong> verschwanden
            </li>
            <li>
              <strong>125</strong> kamen neu hinzu
            </li>
          </ul>
          <p>
            Der Gesamtwert war also exakt gleich, obwohl sich die Zusammensetzung des sichtbaren Anbieterfelds deutlich
            veränderte.
          </p>
          <p>Das ist eine wichtige Warnung für AI-Visibility-Dashboards.</p>
          <p>
            Ein einzelner aggregierter Score kann stabil aussehen, obwohl Wettbewerber kommen und gehen.
          </p>
          <p>Wer nur auf den Gesamtwert schaut, kann relevante Veränderungen übersehen.</p>

          <VisualTemporalVolatility />

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Was wir selbst beinahe falsch interpretiert hätten
          </h2>
          <p>
            Einer der wertvollsten Teile der Untersuchung entstand aus einer Interpretation, die zunächst plausibel klang
            – und sich dann als zu einfach herausstellte.
          </p>
          <p>
            Beim ersten Blick auf die Treuhand-Daten fiel auf, dass Unternehmen aus unserem vorab definierten Panel
            vergleichsweise selten auftauchten.
          </p>
          <p>Eine naheliegende Erklärung wäre gewesen:</p>
          <p className="font-medium text-mention-dark">
            „Die KI kennt den Zürcher Treuhandmarkt offenbar nicht besonders gut.“
          </p>
          <p>Das klang zunächst logisch.</p>
          <p>
            Doch dann haben wir systematisch geprüft, welche Unternehmen ausserhalb unseres Panels genannt wurden.
          </p>
          <p>Das Bild änderte sich.</p>
          <p>
            Die KI-Systeme nannten sehr häufig reale, relevante Treuhandunternehmen – nur eben oft andere als jene, die wir
            in unserem Vergleichspanel beobachteten.
          </p>
          <p>Die entscheidende Korrektur lautete deshalb nicht:</p>
          <p className="font-medium text-mention-dark">Die KI kennt den Markt nicht.</p>
          <p>Sondern:</p>
          <p className="font-medium text-mention-dark">
            Die KI macht teilweise einen anderen Ausschnitt des Marktes sichtbar.
          </p>
          <p>Genau darin steckt aus meiner Sicht die stärkste Erkenntnis der Studie.</p>
          <p>Eine klassische Wettbewerbsanalyse beginnt mit der Frage:</p>
          <p className="font-medium text-mention-dark">Wen beobachten wir?</p>
          <p>Eine AI-Visibility-Analyse sollte zusätzlich fragen:</p>
          <p className="font-medium text-mention-dark">Wen bringt die KI selbst ins Spiel?</p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Warum eine feste Wettbewerberliste für AI Visibility nicht reicht
          </h2>
          <p>In klassischer SEO- und Wettbewerbsanalyse ist eine definierte Konkurrenzliste sinnvoll.</p>
          <p>Man überwacht Rankings, Inhalte, Backlinks, Anzeigen oder Marktaktivitäten bestimmter Unternehmen.</p>
          <p>Auch bei AI Visibility ist diese Perspektive wichtig.</p>
          <p>Aber sie reicht nicht aus.</p>
          <p>
            Denn wenn die KI selbst neue Unternehmen in die Antwort einführt, entsteht eine zweite Ebene der
            Wettbewerbsbeobachtung.
          </p>
          <p>
            Dann müssen Unternehmen nicht nur wissen, wie sie gegenüber ihren bekannten Wettbewerbern abschneiden.
          </p>
          <p>Sie müssen auch erkennen können:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>welche bislang unbeobachteten Anbieter wiederholt auftauchen</li>
            <li>welche Wettbewerber nur bei bestimmten KI-Systemen sichtbar sind</li>
            <li>welche Anbieter neu hinzukommen</li>
            <li>welche verschwinden</li>
            <li>ob sich das Feld über die Zeit verschiebt</li>
          </ul>
          <p>Das macht AI Visibility nicht nur zu einer Sichtbarkeitsfrage.</p>
          <p>Es macht sie auch zu einer Form laufender Marktbeobachtung.</p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            AI Visibility ist nicht einfach das neue Google-Ranking
          </h2>
          <p>
            Es liegt nahe, AI Visibility wie eine neue Variante des klassischen Suchmaschinen-Rankings zu behandeln.
          </p>
          <p>Platz 1, Platz 2, Platz 3 – nur eben bei ChatGPT statt bei Google.</p>
          <p>Unsere Daten sprechen dafür, vorsichtiger mit dieser Analogie zu sein.</p>
          <p>
            Ein klassisches Ranking setzt voraus, dass es zumindest ungefähr dasselbe Wettbewerbsfeld gibt, innerhalb
            dessen Positionen verglichen werden.
          </p>
          <p>Bei generativen KI-Systemen kann sich aber bereits das Feld selbst unterscheiden.</p>
          <p>
            ChatGPT kann andere Anbieter nennen als Claude. Gemini kann andere Anbieter nennen als Perplexity. Und zwei
            Wochen später kann ein Teil dieser Unternehmen wieder verschwunden sein.
          </p>
          <p>Damit lautet die relevante Frage nicht nur:</p>
          <p className="font-medium text-mention-dark">„Auf welchem Platz stehe ich?“</p>
          <p>Sondern zuerst:</p>
          <p className="font-medium text-mention-dark">
            „Bin ich überhaupt Teil des Anbieterfelds, das dieses System für diese Frage gerade erzeugt?“
          </p>
          <p>Und danach:</p>
          <p className="font-medium text-mention-dark">„Wer sonst ist darin enthalten?“</p>
          <p>Das ist ein grundlegender Unterschied.</p>
          <p>
            Mehr dazu auch im Artikel{" "}
            <Link
              href="/blog/warum-chatgpt-dich-nicht-empfiehlt"
              className="font-medium text-mention-dark underline underline-offset-2"
            >
              Warum ChatGPT dich nicht empfiehlt
            </Link>
            .
          </p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Was Unternehmen daraus ableiten können
          </h2>
          <p>Für Unternehmen ergeben sich daraus vier praktische Fragen:</p>

          <h3 className="!mt-8 font-heading text-xl font-semibold text-mention-dark">
            1. Wer wird statt uns genannt?
          </h3>
          <p>
            Wenn dein Unternehmen bei einer kaufnahen Frage nicht erscheint, ist es nicht nur interessant, dass du fehlst.
          </p>
          <p>
            Mindestens genauso wichtig ist: <strong>Wer nimmt diesen Platz ein?</strong>
          </p>

          <h3 className="!mt-8 font-heading text-xl font-semibold text-mention-dark">
            2. Welche unerwarteten Anbieter tauchen auf?
          </h3>
          <p>
            AI-Systeme können Unternehmen sichtbar machen, die auf der eigenen Wettbewerberliste bislang nicht vorkommen.
          </p>
          <p>
            Genau diese Anbieter können besonders interessant sein, weil sie im traditionellen Monitoring leicht
            übersehen werden.
          </p>

          <h3 className="!mt-8 font-heading text-xl font-semibold text-mention-dark">
            3. Wo unterscheiden sich ChatGPT, Claude, Gemini und Perplexity?
          </h3>
          <p>Sichtbarkeit sollte nicht automatisch von einem System auf ein anderes übertragen werden.</p>
          <p>Die Provider erzeugen teilweise deutlich unterschiedliche Anbieterfelder.</p>

          <h3 className="!mt-8 font-heading text-xl font-semibold text-mention-dark">
            4. Welche Wettbewerber kommen, bleiben oder verschwinden?
          </h3>
          <p>Eine einzelne Messung zeigt einen Zeitpunkt.</p>
          <p>
            Für strategische Entscheidungen ist deshalb zusätzlich relevant, welche Unternehmen wiederholt auftauchen und
            wie sich das Feld verändert.
          </p>
          <p>Die Konsequenz:</p>
          <p className="font-medium text-mention-dark">
            AI Visibility braucht neben Sichtbarkeitsmessung auch laufende Wettbewerbsbeobachtung.
          </p>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Was die Studie nicht zeigt
          </h2>
          <p>
            Die Ergebnisse sind belastbar für die untersuchten Setups. Sie sind aber keine universelle Aussage über jede
            Branche und jede KI-Nutzung.
          </p>
          <p>
            Die Studie untersucht drei Märkte: Treuhand, Sensorik und internationale Schulen. Andere Märkte können sich
            anders verhalten.
          </p>
          <p>
            Die vorab definierten Panels waren bewusst begrenzt. Sie dienten als feste Vergleichsbasis – nicht als
            vollständiger Marktcensus.
          </p>
          <p>
            Untersucht wurden webfähige API-Setups. Consumer-Oberflächen können sich durch Modelle, Personalisierung,
            Einstellungen oder Produktlogik unterscheiden.
          </p>
          <p>
            Die Studie leitet keinen Gesamtsieger zwischen ChatGPT, Claude, Gemini und Perplexity ab.
          </p>
          <p>Sie leitet auch keine allgemeine Halluzinationsrate ab.</p>
          <p>
            Und sie beschreibt Sichtbarkeit, Überschneidung und Veränderung – sie beweist nicht, warum ein Anbieter
            erscheint oder verschwindet.
          </p>

          {/* Methodology */}
          <section
            id="methodik"
            className="!mt-16 scroll-mt-24 rounded-2xl border border-zinc-200 bg-[#F7F5F0] px-5 py-8 sm:px-7 sm:py-10"
            aria-labelledby="methodik-heading"
          >
            <h2 id="methodik-heading" className="font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
              Methodik in Kürze
            </h2>
            <p className="mt-4">Die MentionBee AI Visibility Study 2026 basiert auf:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>3 Märkten</strong>
              </li>
              <li>
                <strong>18 praxisnahen Anbieterfragen</strong>
              </li>
              <li>
                <strong>4 KI-Systemen</strong>
              </li>
              <li>
                <strong>1’164 erfolgreichen Studienabfragen</strong>
              </li>
              <li>wiederholten Messungen über mehrere Zeitpunkte</li>
            </ul>
            <p className="mt-4">
              Die untersuchten Systeme waren ChatGPT, Claude, Gemini und Perplexity in webfähigen API-Setups.
            </p>
            <p className="mt-4">
              Für jeden Markt gab es ein vorab definiertes, bewusst begrenztes Anbieterpanel als feste Ausgangsbasis.
            </p>
            <p className="mt-4">
              Ausserhalb dieser Panels genannte Unternehmen wurden gesammelt, kanonisch dedupliziert und manuell auf
              Markt-Relevanz geprüft.
            </p>
            <p className="mt-4">
              Für den sauberen Zwei-Wochen-Zeitvergleich wurden Claude, Gemini und Perplexity verwendet.
            </p>
            <p className="mt-4 font-medium text-mention-dark">
              ChatGPT wurde aus diesem Vergleich ausgeschlossen, weil sich das eingesetzte Modell während des
              Untersuchungszeitraums änderte.
            </p>
            <p className="mt-4">
              <strong>PRESENT</strong> bedeutet in dieser Studie: Ein Anbieter wurde in der Antwort genannt bzw. als
              sichtbar erfasst – nicht, dass das System ihn empfohlen hätte.
            </p>

            <details className="mt-6 rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <summary className="cursor-pointer rounded-md text-sm font-semibold text-mention-dark outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Weitere methodische Hinweise
              </summary>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-mention-gray">
                <p>
                  Die vorab definierten Panels repräsentieren die beobachtete Wettbewerberliste – nicht den vollständigen
                  Markt und nicht das KI-Wettbewerbsfeld.
                </p>
                <p>
                  Zusätzliche / out-of-panel Anbieter sind Unternehmen, die in KI-Antworten auftauchten, aber nicht im
                  jeweiligen vorab definierten Panel standen, und nach manueller Prüfung als marktrelevant gelten.
                </p>
                <p>
                  Der vollständige Research Report enthält die zentralen Ergebnisse, Methodik und Limitationen in
                  kompakter Form.
                </p>
                <p>
                  <a
                    href={STUDY_PDF_PATH}
                    className="font-medium text-mention-dark underline underline-offset-2"
                  >
                    Research Report als PDF
                  </a>
                </p>
              </div>
            </details>
          </section>

          <h2 className="!mt-14 font-heading text-2xl font-bold text-mention-dark sm:text-3xl">
            Fazit: Die KI bringt eigene Wettbewerber ins Spiel
          </h2>
          <p>
            Die wichtigste Erkenntnis der Studie ist nicht, dass KI-Systeme mehr oder weniger Anbieter nennen.
          </p>
          <p>Sie liegt eine Ebene davor.</p>
          <p>
            Unternehmen beobachten Wettbewerb normalerweise anhand einer vorab definierten Liste. Diese Liste bleibt
            wichtig.
          </p>
          <p>
            Aber sie ist nicht automatisch identisch mit dem Wettbewerbsfeld, das generative KI-Systeme erzeugen.
          </p>
          <p>
            In <strong>61,6 %</strong> der untersuchten Antworten erschien mindestens ein zusätzlicher relevanter Anbieter
            ausserhalb der definierten Panels.
          </p>
          <p>
            Von den <strong>93 zusätzlich identifizierten Unternehmen</strong> tauchten{" "}
            <strong>59,1 % nur bei einem einzigen KI-System</strong> auf.
          </p>
          <p>
            Und innerhalb von zwei Wochen veränderten sich <strong>58,1 % der vergleichbaren Anbieter-Sets</strong>.
          </p>
          <p>Deshalb sollte AI Visibility nicht bei der Frage enden:</p>
          <p className="font-medium text-mention-dark">„Wie sichtbar sind wir?“</p>
          <p>Die nächste Frage ist mindestens genauso wichtig:</p>
          <p className="font-medium text-mention-dark">„Wer ist dort sonst sichtbar?“</p>
          <p>Klassische Wettbewerbsanalyse fragt:</p>
          <p className="font-medium text-mention-dark">Wen beobachten wir?</p>
          <p>AI Visibility muss zusätzlich fragen:</p>
          <p className="font-medium text-mention-dark">Wen bringt die KI selbst ins Spiel?</p>
        </div>

        {/* Citation */}
        <section
          id="zitieren"
          className="mt-16 rounded-2xl border border-zinc-200 bg-mention-light px-5 py-8 sm:px-7"
          aria-labelledby="zitieren-heading"
        >
          <h2 id="zitieren-heading" className="font-heading text-xl font-bold text-mention-dark sm:text-2xl">
            Studie zitieren
          </h2>
          <div className="mt-4 space-y-1 text-sm leading-relaxed break-words text-mention-dark">
            <p className="font-semibold">MentionBee AI Visibility Study 2026</p>
            <p>Olaf Kunz, MentionBee.ai</p>
            <p>September 2026</p>
            <p className="pt-2">
              Canonical URL:{" "}
              <a
                href="https://mentionbee.ai/studie/ai-visibility-2026"
                className="break-all underline underline-offset-2"
              >
                https://mentionbee.ai/studie/ai-visibility-2026
              </a>
            </p>
            <p>
              PDF:{" "}
              <a href={STUDY_PDF_PATH} className="break-all underline underline-offset-2">
                mentionbee-ai-visibility-study-2026.pdf
              </a>
            </p>
          </div>
          <div className="mt-5">
            <CopyCitationButton />
          </div>
        </section>

        {/* Commercial CTA */}
        <section
          className="mt-16 rounded-2xl bg-mention-dark px-6 py-10 text-white sm:px-8"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="font-heading text-2xl font-bold sm:text-3xl">
            Wie sieht dein KI-Wettbewerbsfeld aus?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            MentionBee analysiert nicht nur, ob dein Unternehmen in ChatGPT, Claude, Gemini und Perplexity sichtbar ist.
            Der AI Visibility Audit zeigt auch, welche Wettbewerber auftauchen, wo Sichtbarkeit fehlt und welche konkreten
            Massnahmen du priorisieren kannst.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/report"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-primary-dark"
            >
              AI Visibility Audit ansehen
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-white/85 underline underline-offset-4 hover:text-white"
            >
              Mehr über MentionBee
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
