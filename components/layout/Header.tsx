import Link from "next/link";

import { MentionBeeBrand } from "@/components/layout/mention-bee-brand";
import { headerNavigation } from "@/content/navigation";

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-primary font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark";

const secondaryBtn =
  "inline-flex items-center justify-center rounded-full bg-mention-dark font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-mention-dark/90 whitespace-nowrap text-xs px-3 py-2 sm:px-5 sm:text-sm";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:grid-cols-[auto_1fr_auto] lg:gap-6">
        <div className="min-w-0 justify-self-start truncate">
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

        <div className="flex items-center gap-2 justify-self-end">
          <Link href="/report" className={`${primaryBtn} text-xs px-3 py-2 sm:px-5 sm:text-sm whitespace-nowrap`}>
            <span className="sm:hidden">Deep-Dive</span>
            <span className="hidden sm:inline">Deep-Dive bestellen</span>
          </Link>
          <Link
            href="/free-report"
            className={`hidden min-[360px]:inline-flex px-3 py-2 text-center text-xs whitespace-nowrap sm:px-5 sm:text-sm ${secondaryBtn}`}
          >
            <span className="sm:hidden">Gratis-Report</span>
            <span className="hidden sm:inline">Kostenloser Report</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
