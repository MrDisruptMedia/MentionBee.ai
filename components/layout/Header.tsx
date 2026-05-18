import Link from "next/link";

import { mainNavigation } from "@/content/navigation";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          MentionBee.ai
        </Link>
        <nav aria-label="Hauptnavigation" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
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
      </div>
    </header>
  );
}
