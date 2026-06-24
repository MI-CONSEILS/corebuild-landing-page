import { Fragment } from "react";
import type { CSSProperties } from "react";

type WordRevealProps = {
  text: string;
  start?: number;
  className?: string;
};

export function getWordCount(text: string) {
  return text.trim().split(/\s+/).length;
}

export function WordReveal({
  text,
  start = 0,
  className = ""
}: WordRevealProps) {
  const words = text.trim().split(/\s+/);

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${start + index}`}>
          <span
            className={["word-reveal-word", className].filter(Boolean).join(" ")}
            style={{ "--word-i": start + index } as CSSProperties}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
