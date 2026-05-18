import Link from "next/link";

import { MentionBeeLogoMark } from "@/components/layout/mention-bee-logo-mark";

type MentionBeeBrandProps = {
  /** Wrap logo + titles in a home link (header/footer). */
  asLink?: boolean;
  className?: string;
};

export function MentionBeeBrand({ asLink = true, className }: MentionBeeBrandProps) {
  const inner = (
    <div className={`flex items-start gap-2 ${className ?? ""}`}>
      <MentionBeeLogoMark />
      <div className="flex min-w-0 flex-col items-start leading-tight">
        <span className="text-base font-bold tracking-tight text-mention-dark">MentionBee.ai</span>
        <span className="mt-0.5 text-xs text-mention-gray ml-1">by Disrupt Media</span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="justify-self-start text-left">
        {inner}
      </Link>
    );
  }

  return inner;
}
