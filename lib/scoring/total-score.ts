/** Gewichteter Gesamtscore (Paid Report, Skala 0-100). */
export function calculateTotalScore(
  scores: Record<string, number | null | undefined>,
): number {
  const weightedSum =
    (scores.llm ?? 0) * 0.3 +
    (scores.pki ?? 0) * 0.25 +
    (scores.technical_seo ?? 0) * 0.15 +
    (scores.schema ?? 0) * 0.1 +
    (scores.ux ?? 0) * 0.1 +
    (scores.mss ?? 0) * 0.1;

  return Math.round(weightedSum * 10);
}
