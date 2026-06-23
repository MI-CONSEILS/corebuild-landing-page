"use client";

import { useMemo } from "react";

type ScrollTextRevealProps = {
  text: string;
  className?: string;
};

export function ScrollTextReveal({ text, className }: ScrollTextRevealProps) {
  const words = useMemo(() => text.split(/(\s+)/), [text]);

  return (
    <p className={className}>
      {words.map((word, index) => {
        if (/^\s+$/.test(word)) return word;

        // No aria-hidden: inline spans read as one continuous sentence, so the
        // paragraph needs no aria-label (which is prohibited on <p> anyway).
        return (
          <span data-reveal-word key={`${word}-${index}`}>
            {word}
          </span>
        );
      })}
    </p>
  );
}
