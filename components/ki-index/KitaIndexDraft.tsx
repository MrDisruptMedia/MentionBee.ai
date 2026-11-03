import { KI_INDEX_HERO_ALT, kitaIndexRelatedArticle } from "@/lib/ki-index/catalog";
import {
  kitaIndexDraft,
  readingMinutesFromText,
  splitVisibleRanking,
  type IndexProviderRow,
} from "@/lib/ki-index/zweisprachige-kitas-zuerich";

function RankingList({ rows }: { rows: IndexProviderRow[] }) {
  return (
    <ol className="ki-rank-list">
      {rows.map((row) => (
        <li key={row.id} className="ki-rank-item">
          <div className="ki-rank-line">
            <span className="ki-rank-num">{row.rank}</span>
            <div className="ki-rank-main">
              <div className="ki-rank-head">
                {row.href ? (
                  <a className="ki-rank-name" href={row.href} rel="noopener noreferrer">
                    {row.name}
                  </a>
                ) : (
                  <span className="ki-rank-name">{row.name}</span>
                )}
                <span className="ki-rank-quote">{row.empfehlungsquote}&nbsp;%</span>
              </div>
              <p className="ki-rank-abs" title={row.modelNames || undefined}>
                {row.recommendedCount} von {kitaIndexDraft.denominator}
                {row.modelsRecommending == null
                  ? null
                  : ` (${row.modelsRecommending} von ${kitaIndexDraft.modelCount} KI-Systemen)`}
              </p>
              <div className="ki-rank-track" aria-hidden="true">
                <div className="ki-rank-bar" style={{ width: `${row.barPercent}%` }} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function KitaIndexDraft() {
  const { shown, rest } = splitVisibleRanking(kitaIndexDraft.providers);
  const readingMinutes = readingMinutesFromText(
    [
      kitaIndexDraft.title,
      kitaIndexDraft.lead,
      ...kitaIndexDraft.questions.map((question) => question.displayText),
      kitaIndexDraft.counting,
      kitaIndexDraft.resultTitle,
      ...kitaIndexDraft.result,
      ...kitaIndexDraft.providers.flatMap((row) => [
        row.name,
        String(row.recommendedCount),
        String(row.empfehlungsquote),
      ]),
      ...kitaIndexDraft.methodology,
      kitaIndexDraft.einordnung,
      kitaIndexRelatedArticle.title,
    ].join(" "),
  );

  return (
    <>
      <style>{`
        .ki-index {
          --brand-yellow: #F5B301;
          --brand-ink: #111827;
          --brand-cream: #FCF6EA;
          color: #111827;
        }
        .ki-wrap { max-width: 760px; margin: 0 auto; padding: 28px 20px 40px; }
        .ki-back {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.9rem;
          margin: 0 0 18px;
        }
        .ki-back a { color: #4b5563; text-decoration: none; }
        .ki-back a:hover { text-decoration: underline; }
        .ki-badge {
          display: inline-block;
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.72rem;
          font-weight: 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--brand-yellow);
          color: var(--brand-ink);
          border-radius: 999px;
          padding: 0.28rem 0.7rem;
          margin: 0 0 14px;
        }
        .ki-index h1 {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(1.85rem, 3.2vw, 2.45rem);
          line-height: 1.15;
          letter-spacing: -0.03em;
          font-weight: 700;
          margin: 0 0 14px;
        }
        .ki-lead {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.2rem;
          line-height: 1.55;
          color: #374151;
          margin: 0 0 1.25rem;
        }
        .ki-meta {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.92rem;
          color: #4b5563;
          margin: 0;
        }
        .ki-meta a { color: #111827; font-weight: 650; text-decoration: none; }
        .ki-hero {
          width: 100%;
          height: auto;
          max-height: 420px;
          object-fit: cover;
          object-position: center;
          margin: 18px 0 0;
          border-radius: 12px;
          display: block;
        }
        .ki-prose, .ki-result, .ki-questions, .ki-method {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #1f2937;
        }
        .ki-prose, .ki-result { margin: 0 0 1rem; }
        .ki-index h2 {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 1.45rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 650;
          margin: 2.4rem 0 0.85rem;
          border: 0;
          padding: 0;
        }
        .ki-questions, .ki-method {
          margin: 0;
          padding-left: 1.25rem;
        }
        .ki-questions { list-style: disc; }
        .ki-questions li, .ki-method li { margin: 0.45rem 0; }
        .ki-rank-list { list-style: none; margin: 0; padding: 0; }
        .ki-rank-item {
          padding: 16px 0 18px;
          border-bottom: 2px solid #d1d5db;
        }
        .ki-rank-line {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr);
          column-gap: 14px;
          align-items: start;
        }
        .ki-rank-num {
          width: 40px;
          height: 40px;
          min-width: 40px;
          box-sizing: border-box;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--brand-yellow);
          color: var(--brand-ink);
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }
        .ki-rank-main { min-width: 0; }
        .ki-rank-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 40px;
        }
        .ki-rank-name {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-weight: 600;
          color: #111827;
          text-decoration: none;
          overflow-wrap: anywhere;
          min-width: 0;
        }
        a.ki-rank-name {
          text-decoration: underline;
          text-decoration-color: var(--brand-yellow);
          text-underline-offset: 3px;
        }
        .ki-rank-quote {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-variant-numeric: tabular-nums;
          font-weight: 650;
          text-align: right;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ki-rank-abs {
          margin: 2px 0 0;
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-weight: 450;
          color: #4b5563;
          font-size: 0.82rem;
        }
        .ki-rank-track {
          margin: 12px 0 0;
          height: 8px;
          background: #f3f4f6;
          border-radius: 999px;
          overflow: hidden;
        }
        .ki-rank-bar { height: 100%; background: var(--brand-yellow); border-radius: 999px; }
        .ki-more { margin-top: 8px; }
        .ki-more summary {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          cursor: pointer;
          color: #111827;
          font-weight: 600;
          padding: 14px 0;
        }
        .ki-note {
          margin-top: 2.4rem;
          background: var(--brand-cream);
          border-left: 4px solid var(--brand-yellow);
          padding: 14px 16px;
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          line-height: 1.5;
          color: #111827;
        }
        .ki-note p { margin: 0 0 0.75rem; }
        .ki-note p:last-child { margin-bottom: 0; }
        .ki-note a {
          color: #111827;
          font-weight: 650;
          text-decoration: underline;
          text-decoration-color: #111827;
          text-underline-offset: 3px;
        }
        @media (max-width: 640px) {
          .ki-wrap { padding: 20px 16px 32px; }
          .ki-rank-line { grid-template-columns: 34px minmax(0, 1fr); column-gap: 12px; }
          .ki-rank-num { width: 34px; height: 34px; min-width: 34px; font-size: 0.85rem; }
          .ki-rank-head { min-height: 34px; }
        }
      `}</style>
      <article className="ki-index">
        <div className="ki-wrap">
          <p className="ki-back">
            <a href="/ki-index">Alle KI-Indizes</a>
          </p>
          <p className="ki-badge">KI-Index</p>
          <h1>{kitaIndexDraft.title}</h1>
          <p className="ki-lead">{kitaIndexDraft.lead}</p>
          <p className="ki-meta">
            <a href="/autor/olaf-kunz">Olaf Kunz</a>
            <span> · {kitaIndexDraft.collectedLabel}</span>
            {readingMinutes != null ? <span> · {readingMinutes} Min. Lesezeit</span> : null}
          </p>
          <img
            className="ki-hero"
            src="/images/ki-index/zweisprachige-kitas-zuerich-hero.webp"
            srcSet="/images/ki-index/zweisprachige-kitas-zuerich-hero-640.webp 640w, /images/ki-index/zweisprachige-kitas-zuerich-hero.webp 1024w"
            sizes="(max-width: 800px) 100vw, 760px"
            width={1024}
            height={576}
            alt={KI_INDEX_HERO_ALT}
          />

          <h2>Welche Fragen haben wir gestellt?</h2>
          <ul className="ki-questions">
            {kitaIndexDraft.questions.map((question) => (
              <li key={question.id}>{question.displayText}</li>
            ))}
          </ul>
          <p className="ki-prose">{kitaIndexDraft.counting}</p>

          <h2>{kitaIndexDraft.resultTitle}</h2>
          {kitaIndexDraft.result.map((paragraph) => (
            <p key={paragraph} className="ki-result">
              {paragraph}
            </p>
          ))}

          <h2>Ranking</h2>
          <RankingList rows={shown} />
          {rest.length > 0 ? (
            <details className="ki-more">
              <summary>Weitere {rest.length} Anbieter anzeigen</summary>
              <RankingList rows={rest} />
            </details>
          ) : null}

          <h2>Methodik</h2>
          <ul className="ki-method">
            {kitaIndexDraft.methodology.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <aside className="ki-note">
            <p>
              Die Auswertung stammt von MentionBee, einem Angebot zur Analyse der Sichtbarkeit von
              Unternehmen in KI-Antworten. Mehr erfahren auf{" "}
              <a href="https://mentionbee.ai">mentionbee.ai</a>.
            </p>
            <p>
              {kitaIndexDraft.einordnung} Wie unterschiedlich die empfohlenen Anbieter je nach
              KI-System ausfallen, beschreibt der Beitrag{" "}
              <a href={kitaIndexRelatedArticle.href}>{kitaIndexRelatedArticle.title}</a>.
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
