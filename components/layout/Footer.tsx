import Link from "next/link";

import { legalNavigation, mainNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            MentionBee.ai
          </p>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Placeholder: Kurzbeschreibung / Footer-Text.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav aria-label="Footer Navigation" className="flex flex-col gap-2 text-sm">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Rechtliches" className="flex flex-col gap-2 text-sm">
            {legalNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
