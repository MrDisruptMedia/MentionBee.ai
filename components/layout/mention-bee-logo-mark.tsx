type MentionBeeLogoMarkProps = {
  className?: string;
};

/** Displayed at `h-10` (~40px). Intrinsic 491×120 keeps ~4.09:1 at 3×. */
const LOGO_WIDTH = 491;
const LOGO_HEIGHT = 120;

export function MentionBeeLogoMark({ className }: MentionBeeLogoMarkProps) {
  return (
    // Plain <img> per branding spec (not next/image).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mentionbee-logo.png"
      alt="MentionBee"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      fetchPriority="high"
      decoding="async"
      className={className ?? "h-10 w-auto max-w-full shrink-0 object-contain"}
    />
  );
}
