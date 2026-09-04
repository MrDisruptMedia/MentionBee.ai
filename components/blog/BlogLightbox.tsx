"use client";

import { useCallback, useEffect, useId, useState } from "react";

type LightboxState = {
  src: string;
  alt: string;
} | null;

const ZOOM_HINT_HTML =
  '<span class="mb-img-zoom-hint" aria-hidden="true">' +
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<circle cx="11" cy="11" r="7"></circle>' +
  '<path d="M20 20l-3.5-3.5"></path>' +
  '<path d="M11 8v6M8 11h6"></path>' +
  "</svg>" +
  "</span>";

function ensureZoomWraps(root: Element): () => void {
  const imgs = Array.from(
    root.querySelectorAll<HTMLImageElement>("img.mb-inline-img"),
  );
  const created: HTMLElement[] = [];

  for (const img of imgs) {
    if (img.parentElement?.classList.contains("mb-img-wrap")) continue;

    const wrap = document.createElement("div");
    wrap.className = "mb-img-wrap";
    img.parentNode?.insertBefore(wrap, img);
    wrap.appendChild(img);

    const hint = document.createElement("span");
    hint.innerHTML = ZOOM_HINT_HTML;
    const node = hint.firstElementChild;
    if (node) wrap.appendChild(node);

    created.push(wrap);
  }

  return () => {
    for (const wrap of created) {
      const img = wrap.querySelector("img.mb-inline-img");
      if (img && wrap.parentNode) {
        wrap.parentNode.insertBefore(img, wrap);
        wrap.remove();
      }
    }
  };
}

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

    const unwrap = ensureZoomWraps(root);

    const onClick = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const img =
        target instanceof HTMLImageElement &&
        target.classList.contains("mb-inline-img")
          ? target
          : target.closest(".mb-img-wrap")?.querySelector("img.mb-inline-img");
      if (!(img instanceof HTMLImageElement)) return;
      const src = img.currentSrc || img.src;
      if (!src) return;
      event.preventDefault();
      setOpen({ src, alt: img.alt || "" });
    };

    root.addEventListener("click", onClick);
    return () => {
      root.removeEventListener("click", onClick);
      unwrap();
    };
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
