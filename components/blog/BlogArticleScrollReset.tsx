"use client";

import { useLayoutEffect } from "react";

function isArticlePath(pathname: string) {
  return pathname.startsWith("/blog/") && pathname !== "/blog";
}

/**
 * Next.js App Router scrolls the newly mounted /blog/[slug] segment into view.
 * That segment sits below the sticky header, so the default landing is
 * scrollY ≈ header height and category/tags sit under the header.
 * Instant document-top reset; does not run on /blog, so Back can restore.
 */
export function BlogArticleScrollReset() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    const reset = () => {
      if (!isArticlePath(window.location.pathname)) return;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = previous;
    };

    reset();

    const started = performance.now();
    const onScroll = () => {
      if (performance.now() - started < 250 && window.scrollY > 0) {
        reset();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const timeout = window.setTimeout(() => {
      reset();
      window.removeEventListener("scroll", onScroll);
    }, 250);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
      html.style.scrollBehavior = previous;
    };
  }, []);

  return null;
}
