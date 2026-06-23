"use client";

import { useMemo } from "react";

type ScrollTextRevealProps = {
  text: string;
  className?: string;
};

export function ScrollTextReveal({ text, className }: ScrollTextRevealProps) {
  const words = useMemo(() => text.split(/(\s+)/), [text]);

  return (
    <p className={className} aria-label={text}>
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
