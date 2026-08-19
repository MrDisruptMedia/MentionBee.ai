import type { SVGProps } from "react";

function LineIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <g stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

/** Friendly robot head with two antennae. */
export function IconKiEmpfehlungen(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M9 7.2 8 3.8" />
      <circle cx="7.7" cy="3.2" r="1.05" fill="currentColor" stroke="none" />
      <path d="M15 7.2 16 3.8" />
      <circle cx="16.3" cy="3.2" r="1.05" fill="currentColor" stroke="none" />
      <rect x="5.5" y="7.2" width="13" height="12.2" rx="3.4" />
      <circle cx="9.6" cy="12.4" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="12.4" r="1.05" fill="currentColor" stroke="none" />
      <path d="M9.8 16.4c.7.9 1.7 1.3 2.2 1.3s1.5-.4 2.2-1.3" />
    </LineIcon>
  );
}

/** Two people, slightly offset. */
export function IconWettbewerb(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <circle cx="8.4" cy="7.6" r="2.7" />
      <path d="M3.4 19.4c.2-3.4 2.2-5.4 5-5.4s4.8 2 5 5.4" />
      <circle cx="16.2" cy="8.4" r="2.35" />
      <path d="M12.4 19.4c.3-2.8 1.9-4.5 3.8-4.5s3.5 1.7 3.8 4.5" />
    </LineIcon>
  );
}

/** Document with text lines. */
export function IconInhalte(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M7 3.8h7.2L18.6 8.2V20.2H7z" />
      <path d="M14.1 3.8v4.4h4.5" />
      <path d="M9.6 12.1h5.8M9.6 15h5.8M9.6 17.9h3.6" />
    </LineIcon>
  );
}

/** Globe with meridians. */
export function IconDigitalePraesenz(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="8.1" />
      <ellipse cx="12" cy="12" rx="3.3" ry="8.1" />
      <path d="M4.2 12h15.6M6.1 7.6h11.8M6.1 16.4h11.8" />
    </LineIcon>
  );
}

/** Gear with inner hub. */
export function IconTechnik(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="3.05" />
      <path d="M12 4.1V6M12 18v1.9M4.1 12H6M18 12h1.9M6.3 6.3l1.35 1.35M16.35 16.35l1.35 1.35M6.3 17.7l1.35-1.35M16.35 7.65 17.7 6.3" />
      <circle cx="12" cy="12" r="6.15" />
    </LineIcon>
  );
}

/** Person bust. */
export function IconNutzererlebnis(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="8.1" r="3.35" />
      <path d="M5.1 19.6c.35-3.7 2.9-6 6.9-6s6.55 2.3 6.9 6" />
    </LineIcon>
  );
}
