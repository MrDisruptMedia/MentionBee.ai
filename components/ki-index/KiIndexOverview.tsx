import { kiIndexListings } from "@/lib/ki-index/catalog";

export function KiIndexOverview() {
  return (
    <>
      <style>{`
        .ki-overview {
          --brand-yellow: #F5B301;
          --brand-ink: #111827;
          --brand-cream: #FCF6EA;
          max-width: 1120px;
          margin: 0 auto;
          padding: 28px 20px 64px;
          color: #111827;
        }
        .ki-overview h1 {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(1.85rem, 3.2vw, 2.45rem);
          line-height: 1.15;
          letter-spacing: -0.03em;
          font-weight: 700;
          margin: 0 0 14px;
        }
        .ki-overview-lead {
          max-width: 760px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.2rem;
          line-height: 1.55;
          color: #374151;
          margin: 0;
        }
        .ki-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 360px));
          gap: 28px;
          margin-top: 2rem;
        }
        .ki-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: inherit;
          text-decoration: none;
        }
        .ki-card img {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .ki-card-kicker {
          display: inline-block;
          align-self: flex-start;
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.72rem;
          font-weight: 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--brand-yellow);
          color: var(--brand-ink);
          border-radius: 999px;
          padding: 0.28rem 0.7rem;
        }
        .ki-card h2 {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 1.25rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 650;
          margin: 0;
        }
        .ki-card-date {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.92rem;
          color: #4b5563;
          margin: 0;
        }
        .ki-card p {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.05rem;
          line-height: 1.55;
          color: #374151;
          margin: 0;
        }
        @media (max-width: 640px) {
          .ki-overview { padding: 20px 16px 40px; }
        }
      `}</style>
      <main className="ki-overview">
        <h1>KI-Index</h1>
        <p className="ki-overview-lead">
          Welche Unternehmen empfehlen KI-Systeme? Unsere KI-Indizes zeigen, welche Anbieter bei
          ausgewählten Fragen zu einer Branche und Region besonders häufig empfohlen werden.
        </p>
        <div className="ki-cards">
          {kiIndexListings.map((entry) => (
            <a key={entry.slug} className="ki-card" href={entry.href}>
              <img
                src={entry.image.src}
                srcSet={entry.image.srcSet}
                sizes="(max-width: 640px) 100vw, 360px"
                width={entry.image.width}
                height={entry.image.height}
                alt={entry.image.alt}
              />
              <span className="ki-card-kicker">KI-Index</span>
              <h2>{entry.title}</h2>
              <p className="ki-card-date">{entry.collectedLabel}</p>
              <p>{entry.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
