"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const hiddenPathPrefixes = ["/report", "/free-report", "/checkout", "/order"];

export function MobileStickyCta() {
  const pathname = usePathname();

  if (hiddenPathPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Link
        href="/report"
        className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md"
      >
        Meine Sichtbarkeit prüfen →
      </Link>
      <Link
        href="/free-report"
        className="mt-1 block text-center text-xs text-mention-gray underline-offset-4 hover:underline"
      >
        oder Gratis-Check starten
      </Link>
    </div>
  );
}
