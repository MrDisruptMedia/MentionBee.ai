export interface QuestionGenerationResult {
  inferredBusinessType: string;
  detectedOfferCategories: string[];
  targetAudiences: string[];
  buyingSituations: string[];
  productServiceKeywords: string[];
  excludedMisclassifications: string[];
  selectedIndustryMismatch: boolean;
  selectedIndustry: string;
  questions: Array<{ selectedByDefault?: boolean }>;
  warnings: string[];
  generatorVersion: string;
}

export const MAX_CUSTOM_QUESTIONS = 3;
export const MAX_SELECTED_QUESTIONS = 5;
export const REQUIRED_QUESTIONS = 3;

export function defaultQuestionIndices(
  generation: Pick<QuestionGenerationResult, "questions"> | undefined,
  questionCount: number,
): number[] {
  if (generation?.questions?.length) {
    const indices = generation.questions
      .map((q, i) => (q.selectedByDefault ? i : -1))
      .filter((i) => i >= 0 && i < questionCount);
    if (indices.length > 0) return indices;
  }
  return [0, 1, 2].filter((i) => i < questionCount);
}

export function resolvePrefillWebsiteUrl(searchParams: URLSearchParams): string {
  return (searchParams.get("website_url") ?? searchParams.get("url") ?? "").trim();
}
