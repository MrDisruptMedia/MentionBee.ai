"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

const hiddenPathPrefixes = ["/report", "/free-report", "/checkout", "/order"];
const HERO_CTA_SELECTOR = "[data-hero-cta]";

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function MobileStickyCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isClient = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);
  const [heroCtaInView, setHeroCtaInView] = useState(true);
  const [hasMeasuredHeroCta, setHasMeasuredHeroCta] = useState(false);

  if (!isHome && hasMeasuredHeroCta) {
    setHasMeasuredHeroCta(false);
  }

  useEffect(() => {
    if (!isHome) return;

    const heroCta = document.querySelector(HERO_CTA_SELECTOR);
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCtaInView(entry.isIntersecting);
        setHasMeasuredHeroCta(true);
      },
      { threshold: 0 },
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, [isHome]);

  const hiddenOnPath = hiddenPathPrefixes.some((prefix) => pathname.startsWith(prefix));

  // SSR HTML does not see pathname "/". Hide until the client has measured
  // the homepage Hero CTA, or until we know we are on another page.
  const hideSticky = isHome
    ? !hasMeasuredHeroCta || heroCtaInView
    : !isClient;

  useEffect(() => {
    const root = document.documentElement;
    if (!hiddenOnPath && !hideSticky) {
      root.setAttribute("data-mobile-sticky-cta", "visible");
    } else {
      root.removeAttribute("data-mobile-sticky-cta");
    }
    return () => {
      root.removeAttribute("data-mobile-sticky-cta");
    };
  }, [hiddenOnPath, hideSticky]);

  if (hiddenOnPath) {
    return null;
  }

  return (
    <div
      className={
        hideSticky
          ? "fixed inset-x-0 bottom-0 z-50 box-border max-w-full border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur hidden md:hidden"
          : "fixed inset-x-0 bottom-0 z-50 box-border max-w-full border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden"
      }
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
        className="mt-1 flex min-h-10 w-full items-center justify-center px-14 text-center text-xs text-mention-gray underline-offset-4 hover:underline"
      >
        oder Gratis-Check starten
      </Link>
    </div>
  );
}
