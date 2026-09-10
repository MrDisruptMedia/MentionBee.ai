"use client";

import { useState } from "react";

const CITATION = `MentionBee AI Visibility Study 2026
Olaf Kunz, MentionBee.ai
September 2026
https://mentionbee.ai/studie/ai-visibility-2026`;

export function CopyCitationButton() {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(CITATION);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-live="polite"
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-mention-dark transition hover:border-zinc-400 hover:bg-mention-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {copied ? "Kopiert" : "Quelle kopieren"}
    </button>
  );
}
