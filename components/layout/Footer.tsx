import Link from "next/link";
import type { SVGProps } from "react";

import { MentionBeeBrand } from "@/components/layout/mention-bee-brand";

type FooterCol = { heading: string; links: { label: string; href: string }[] };

function LinkedInGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

const columns: FooterCol[] = [
  {
    heading: "Product",
    links: [
      { label: "Free Report", href: "/free-report" },
      { label: "Deep-Dive Report", href: "/report" },
      { label: "Beispielreport", href: "/sample-report" },
      { label: "Methodik", href: "/#methodik" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Datenschutzerklärung", href: "/datenschutzerklaerung" },
      { label: "AGB", href: "/agb" },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mentionbee",
    Icon: LinkedInGlyph,
  },
  {
    label: "E-Mail",
    href: "mailto:hello@mentionbee.ai",
    Icon: MailGlyph,
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="max-w-sm">
            <MentionBeeBrand />
            <p className="mt-3 text-sm leading-relaxed text-mention-gray">
              AI Visibility für smarte Marken.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold tracking-wide text-mention-gray uppercase">
                {col.heading}
              </p>
              <nav aria-label={col.heading} className="mt-4 flex flex-col gap-2.5 text-sm">
                {col.links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-mention-dark/90 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mention-gray">© 2026 MentionBee.ai</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => {
              const isWeb = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  {...(isWeb
                    ? { target: "_blank", rel: "noopener noreferrer" as const }
                    : {})}
                  className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-mention-dark transition-colors hover:border-primary/40 hover:bg-mention-light hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
