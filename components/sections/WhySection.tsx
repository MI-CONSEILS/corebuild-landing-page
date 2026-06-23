import { ScrollTextReveal } from "@/components/ScrollTextReveal";

const whyText =
  "Corebuild is your single partner from factory floor to finished site We consolidate sourcing, quality control and logistics across Guangzhou's manufacturing network so you deal with one contract, one invoice and one team that owns the outcome from first sketch to final delivery.";

export function WhySection() {
  return (
    <section
      className="value-section"
      aria-labelledby="why-title"
      data-scroll-reveal-section
    >
      <div className="value-section__sticky">
        <div className="section-header">
          <h2 id="why-title">Why CoreBuild</h2>
          <p className="section-sub">Sourced and quality-controlled in China.</p>
        </div>
        <ScrollTextReveal className="value-copy" text={whyText} />
      </div>
    </section>
  );
}
