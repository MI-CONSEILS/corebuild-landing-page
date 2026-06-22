"use client";

import { useEffect, useMemo, useRef } from "react";

type ScrollTextRevealProps = {
  text: string;
  className?: string;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function mixColor(amount: number) {
  const progress = clamp(amount);
  const from = { r: 133, g: 72, b: 59 };
  const to = { r: 218, g: 212, b: 207 };
  const r = Math.round(to.r + (from.r - to.r) * progress);
  const g = Math.round(to.g + (from.g - to.g) * progress);
  const b = Math.round(to.b + (from.b - to.b) * progress);
  return `rgb(${r}, ${g}, ${b})`;
}

export function ScrollTextReveal({ text, className }: ScrollTextRevealProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const words = useMemo(() => text.split(/(\s+)/), [text]);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const wordNodes = Array.from(
      paragraph.querySelectorAll<HTMLElement>("[data-reveal-word]")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordNodes.forEach((word) => {
        word.style.color = mixColor(1);
      });
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = paragraph.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const startLine = viewportHeight * 0.78;
      const endLine = viewportHeight * 0.24;
      const distance = rect.height + startLine - endLine;
      const progress = clamp((startLine - rect.top) / distance);
      const activeWord = progress * wordNodes.length;

      wordNodes.forEach((word, index) => {
        const fill = clamp((activeWord - index) / 1.25);
        word.style.color = mixColor(fill);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {words.map((word, index) => {
        if (/^\s+$/.test(word)) return word;

        return (
          <span aria-hidden="true" data-reveal-word key={`${word}-${index}`}>
            {word}
          </span>
        );
      })}
    </p>
  );
}
