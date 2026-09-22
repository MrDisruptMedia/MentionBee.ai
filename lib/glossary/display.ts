import type { GlossaryTermOrigin } from "@/content/glossary/types";
import { glossaryUiCopy } from "@/content/glossary/ui-copy";

const ORIGIN_LABEL: Record<GlossaryTermOrigin, string> = {
  established: glossaryUiCopy.originEstablished,
  emerging: glossaryUiCopy.originEmerging,
  mentionbee: glossaryUiCopy.originMentionbee,
};

export function glossaryOriginLabel(origin: GlossaryTermOrigin): string {
  return ORIGIN_LABEL[origin];
}

export function formatGlossaryDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
