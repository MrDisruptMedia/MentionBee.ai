import Link from "next/link";

import { headerNavigation } from "@/content/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 lg:grid-cols-[auto_1fr_auto] lg:gap-6">
        <Link
          href="/"
          className="justify-self-start text-base font-bold tracking-tight text-mention-dark"
        >
          <span aria-hidden>🐝 </span>
          MentionBee.ai
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center justify-center gap-8 text-sm font-medium text-mention-dark/80 lg:flex"
        >
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/free-report"
          className="justify-self-end rounded-full bg-primary px-4 py-2 text-center text-xs font-semibold whitespace-nowrap text-white shadow-sm transition-colors hover:bg-primary-dark sm:px-5 sm:text-sm"
        >
          Kostenlosen Report anfordern
        </Link>
      </div>
    </header>
  );
}
