import Link from "next/link";

import { MentionBeeBrand } from "@/components/layout/mention-bee-brand";
import { headerNavigation } from "@/content/navigation";

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-primary font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 lg:grid-cols-[auto_1fr_auto] lg:gap-6">
        <div className="justify-self-start">
          <MentionBeeBrand />
        </div>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex"
        >
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-mention-dark transition-colors hover:text-mention-gray"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/free-report"
          className={`justify-self-end px-4 py-2 text-center text-xs whitespace-nowrap sm:px-5 sm:text-sm ${primaryBtn}`}
        >
          Kostenlosen Report anfordern
        </Link>
      </div>
    </header>
  );
}
