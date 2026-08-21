type MentionBeeLogoMarkProps = {
  className?: string;
};

/** Intrinsic size of `/mentionbee-logo-transparent.png` (keeps ~4.09:1). */
const LOGO_WIDTH = 2144;
const LOGO_HEIGHT = 524;

export function MentionBeeLogoMark({ className }: MentionBeeLogoMarkProps) {
  return (
    // Plain <img> per branding spec (not next/image).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mentionbee-logo-transparent.png"
      alt="MentionBee"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={className ?? "h-10 w-auto max-w-full shrink-0 object-contain"}
    />
  );
}
