"use client";

import { useCallback, useEffect, useId, useState } from "react";

type LightboxState = {
  src: string;
  alt: string;
} | null;

/**
 * Attaches click handlers to article inline screenshots and renders a simple overlay.
 * No external lightbox library — fullscreen dimmed backdrop + centered image.
 */
export function BlogLightbox() {
  const [open, setOpen] = useState<LightboxState>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const root = document.querySelector(".mb-article-body");
    if (!root) return;

    const onClick = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (!target.classList.contains("mb-inline-img")) return;
      const src = target.currentSrc || target.src;
      if (!src) return;
      event.preventDefault();
      setOpen({ src, alt: target.alt || "" });
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="mb-lightbox-overlay"
      onClick={close}
    >
      <button
        type="button"
        className="mb-lightbox-close"
        aria-label="Schliessen"
        onClick={close}
      >
        ×
      </button>
      <span id={titleId} className="sr-only">
        {open.alt || "Bildvergrösserung"}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={open.src}
        alt={open.alt}
        className="mb-lightbox-img"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
    </div>
  );
}
