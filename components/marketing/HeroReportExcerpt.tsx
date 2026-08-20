const HERO_REPORT_PROOF = {
  analyzed: {
    name: "Factorial",
    score: 0,
    mentions: 0,
    mentionTotal: 24,
  },
  competitors: [
    { name: "Personio", score: 100, color: "#10B981" },
    { name: "HRworks", score: 29, color: "#FF9F2D" },
    { name: "Kenjo", score: 17, color: "#EF4444" },
  ],
} as const;

function ScoreRing({
  score,
  color,
  size,
  strokeWidth,
  numberClassName,
}: {
  score: number;
  color: string;
  size: number;
  strokeWidth: number;
  numberClassName: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(100, Math.max(0, score)) / 100);
  const cx = size / 2;

  return (
    <span className="relative inline-flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={cx}
          cy={cx}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {score >= 100 ? (
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        ) : score > 0 ? (
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        ) : null}
      </svg>
      <span className={`absolute font-heading font-bold tabular-nums text-mention-dark ${numberClassName}`}>
        {score}
      </span>
    </span>
  );
}

export function HeroReportExcerpt() {
  const { analyzed, competitors } = HERO_REPORT_PROOF;

  return (
    <div
      className="w-full min-w-0"
      aria-label="Ausschnitt aus einem MentionBee-Report: KI-Präsenz von Factorial"
    >
      <p className="text-sm font-semibold text-mention-dark">KI-Präsenz & Sichtbarkeit</p>

      <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-5">
          <ScoreRing
            score={analyzed.score}
            color="#E5E7EB"
            size={96}
            strokeWidth={9}
            numberClassName="text-3xl sm:text-4xl"
          />
          <div className="min-w-0">
            <p className="font-heading text-lg font-bold text-mention-dark sm:text-xl">
              KI-Sichtbarkeits-Score
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mention-gray sm:text-base">
              {analyzed.name} wird in{" "}
              <span className="font-semibold text-mention-dark">{analyzed.mentions}</span> von{" "}
              <span className="font-semibold text-mention-dark">{analyzed.mentionTotal}</span> KI-Antworten
              erwähnt
            </p>
          </div>
        </div>
      </div>

      <ul className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3" role="list">
        {competitors.map((competitor) => (
          <li
            key={competitor.name}
            className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white px-2 py-4 shadow-sm sm:px-3 sm:py-5"
          >
            <ScoreRing
              score={competitor.score}
              color={competitor.color}
              size={64}
              strokeWidth={7}
              numberClassName="text-lg sm:text-xl"
            />
            <p className="mt-3 text-center text-sm font-bold text-mention-dark sm:text-base">
              {competitor.name}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-center text-xs text-mention-gray sm:mt-4">
        Echter MentionBee-Report · Analyse öffentlich verfügbarer Signale
      </p>
    </div>
  );
}
