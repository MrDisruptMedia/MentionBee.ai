import Link from "next/link";

import { MentionBeeLogoMark } from "@/components/layout/mention-bee-logo-mark";

type MentionBeeBrandProps = {
  /** Wrap logo + tagline in a home link (header/footer). */
  asLink?: boolean;
  className?: string;
};

export function MentionBeeBrand({ asLink = true, className }: MentionBeeBrandProps) {
  const inner = (
    <div className={`flex flex-col items-start ${className ?? ""}`}>
      <MentionBeeLogoMark />
      <span className="mt-1 text-xs text-mention-gray ml-1">by Disrupt Media</span>
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
