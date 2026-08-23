"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { MentionBeeBrand } from "@/components/layout/mention-bee-brand";
import { headerNavigation } from "@/content/navigation";

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-primary font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark";

const secondaryBtn =
  "inline-flex items-center justify-center rounded-full bg-mention-dark font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-mention-dark/90 whitespace-nowrap text-xs px-3 py-2 sm:px-5 sm:text-sm";

const mobileNavItems = [
  ...headerNavigation,
  { label: "Gratis-Check", href: "/free-report" },
  { label: "Sichtbarkeit prüfen", href: "/report" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 lg:grid-cols-[auto_1fr_auto] lg:gap-6">
        <div className="min-w-0 justify-self-start">
          <MentionBeeBrand logoClassName="h-auto w-[143px] max-w-full shrink-0 object-contain lg:w-[160px]" />
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

        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <Link
            href="/free-report"
            className={`${secondaryBtn} px-3 py-2 text-center text-xs whitespace-nowrap sm:px-5 sm:text-sm`}
          >
            Gratis-Check
          </Link>
          <Link
            href="/report"
            className={`${primaryBtn} px-3 py-2 text-xs whitespace-nowrap sm:px-5 sm:text-sm`}
          >
            Sichtbarkeit prüfen
          </Link>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center justify-self-end rounded-lg text-mention-dark lg:hidden"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" strokeWidth={2} /> : <Menu className="size-6" strokeWidth={2} />}
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile Navigation"
          className="border-t border-zinc-200 bg-white px-4 py-3 lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {mobileNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center py-3 text-base font-medium text-mention-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
