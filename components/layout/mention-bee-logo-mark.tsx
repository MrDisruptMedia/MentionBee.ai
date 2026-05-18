type MentionBeeLogoMarkProps = {
  className?: string;
};

export function MentionBeeLogoMark({ className }: MentionBeeLogoMarkProps) {
  return (
    // Plain <img> per branding spec (not next/image).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mentionbee-logo-transparent.png"
      alt="MentionBee"
      className={className ?? "h-8 w-auto shrink-0"}
    />
  );
}
