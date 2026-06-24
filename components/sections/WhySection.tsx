import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { getWordCount, WordReveal } from "@/components/WordReveal";

const whyText =
  "Corebuild is your single partner from factory floor to finished site We consolidate sourcing, quality control and logistics across Guangzhou's manufacturing network so you deal with one contract, one invoice and one team that owns the outcome from first sketch to final delivery.";
const whyTitle = "Why CoreBuild";
const whySub = "Sourced and quality-controlled in China.";

export function WhySection() {
  return (
    <section
      id="why"
      className="value-section"
      aria-labelledby="why-title"
      data-scroll-reveal-section
    >
      <div className="value-section__sticky">
        <div
          className="section-header"
          data-word-reveal
          data-word-reveal-speed="fast"
        >
          <h2 id="why-title">
            <WordReveal text={whyTitle} />
          </h2>
          <p className="section-sub">
            <WordReveal text={whySub} start={getWordCount(whyTitle)} />
          </p>
        </div>
        <ScrollTextReveal className="value-copy" text={whyText} />
      </div>
    </section>
  );
}
