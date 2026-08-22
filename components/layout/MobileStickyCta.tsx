"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const hiddenPathPrefixes = ["/report", "/free-report", "/checkout", "/order"];
const HERO_CTA_SELECTOR = "[data-hero-cta]";

export function MobileStickyCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [heroCtaInView, setHeroCtaInView] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const heroCta = document.querySelector(HERO_CTA_SELECTOR);
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCtaInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, [isHome]);

  if (hiddenPathPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  const hideSticky = isHome && heroCtaInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 box-border max-w-full border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden${
        hideSticky ? " hidden" : ""
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <Link
        href="/report"
        className="flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-mention-dark shadow-md"
      >
        Meine Sichtbarkeit prüfen →
      </Link>
      <Link
        href="/free-report"
        className="mt-1 flex min-h-10 w-full items-center justify-center text-center text-xs text-mention-gray underline-offset-4 hover:underline"
      >
        oder Gratis-Check starten
      </Link>
    </div>
  );
}
