export interface CompetitorNormalizationResult {
  ok: boolean;
  value: string | null;
  raw: string;
}

const HOSTNAME_PATTERN =
  /^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/;

function stripToHostnameCandidate(input: string): string {
  let candidate = input.trim();
  candidate = candidate.replace(/^https?:\/\//i, "");
  candidate = candidate.split("/")[0] ?? "";
  candidate = candidate.replace(/^www\./i, "");
  return candidate.toLowerCase();
}

function isValidHostname(candidate: string): boolean {
  if (!candidate) return false;
  if (/\s/.test(candidate) || candidate.includes("%20")) return false;
  if (!candidate.includes(".")) return false;
  return HOSTNAME_PATTERN.test(candidate);
}

export function normalizeCompetitor(input: string): CompetitorNormalizationResult {
  const raw = input.trim();
  if (!raw) {
    return { ok: false, value: null, raw: "" };
  }

  const candidate = stripToHostnameCandidate(raw);
  if (!isValidHostname(candidate)) {
    return { ok: false, value: null, raw };
  }

  return { ok: true, value: candidate, raw };
}

export function findInvalidCompetitorIndices(competitors: string[]): number[] {
  return competitors
    .map((value, index) => {
      const trimmed = value.trim();
      if (!trimmed) return -1;
      return normalizeCompetitor(trimmed).ok ? -1 : index;
    })
    .filter((index) => index >= 0);
}
