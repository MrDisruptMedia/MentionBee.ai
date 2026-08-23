type MentionBeeLogoMarkProps = {
  className?: string;
};

/** Intrinsic SVG size. Display width is set in CSS to keep 3.1746:1. */
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
      className={className ?? "h-auto w-[176px] max-w-full shrink-0 object-contain"}
    />
  );
}
