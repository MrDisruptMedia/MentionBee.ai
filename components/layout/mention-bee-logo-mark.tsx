type MentionBeeLogoMarkProps = {
  className?: string;
};

/** Displayed at `h-10` (~40px). viewBox 1433.63×451.59 ≈ 3.17:1. */
const LOGO_WIDTH = 1434;
const LOGO_HEIGHT = 452;

export function MentionBeeLogoMark({ className }: MentionBeeLogoMarkProps) {
  return (
    // Plain <img> per branding spec (not next/image).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mentionbee-logo.svg"
      alt="MentionBee"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      fetchPriority="high"
      decoding="async"
      className={className ?? "h-10 w-auto max-w-full shrink-0 object-contain"}
    />
  );
}
