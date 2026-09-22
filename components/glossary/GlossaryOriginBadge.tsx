import type { GlossaryTermOrigin } from "@/content/glossary/types";
import { glossaryOriginLabel } from "@/lib/glossary/display";

const ORIGIN_CLASS: Record<GlossaryTermOrigin, string> = {
  established: "border-zinc-200 bg-zinc-50 text-mention-dark",
  emerging: "border-amber-200 bg-amber-50 text-amber-950",
  mentionbee: "border-primary/40 bg-primary/15 text-mention-dark",
};

export function GlossaryOriginBadge({ origin }: { origin: GlossaryTermOrigin }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${ORIGIN_CLASS[origin]}`}
    >
      {glossaryOriginLabel(origin)}
    </span>
  );
}
