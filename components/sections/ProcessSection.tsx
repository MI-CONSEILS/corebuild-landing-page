import Image from "next/image";
import { WordReveal } from "@/components/WordReveal";

const processSectionTitle = "From brief to site";

// ponytail: placeholder copy + reused figma-assets — wording/images get tuned later.
const steps = [
  {
    number: "01",
    title: "We Start by Understanding Your Brief in Detail",
    body: "Reading of project specs, BOQ, design intent, budget and timeline to lock down exactly what the project needs.",
    note: "100% of specs, BOQ & design intent reviewed before a single quote — vs. agents who price first and clarify later",
    image: "/figma-assets/10-image-6.png",
    thumbs: ["08-image-5", "10-image-6", "11-image-7"]
  },
  {
    number: "02",
    title: "We Source and Shortlist the Right Suppliers",
    body: "Your requirements are mapped against vetted Guangzhou manufacturers — samples compared and pricing locked before anything ships.",
    note: "Every shortlist is benchmarked across at least three vetted factories — never a single-source markup",
    image: "/figma-assets/08-image-5.png",
    thumbs: ["02-natural-materials", "03-engineered-materials", "04-lighting"]
  },
  {
    number: "03",
    title: "We Run Quality Control on Every Batch",
    body: "On-site inspection, material testing and pre-shipment checks against your spec, so defects never leave the factory floor.",
    note: "Pre-shipment inspection on 100% of orders — issues caught in Guangzhou, not on your site",
    image: "/figma-assets/11-image-7.png",
    thumbs: ["05-electrical", "06-sanitary", "07-technical"]
  },
  {
    number: "04",
    title: "We Consolidate and Handle the Logistics",
    body: "Multiple suppliers, one consolidated shipment. Customs, freight and documentation managed end to end.",
    note: "One consolidated container instead of five — lower freight, fewer customs touchpoints",
    image: "/figma-assets/04-lighting.png",
    thumbs: ["12-processed-but-i-want-to-animate-the-imag-1", "13-logistics-at-dusk", "02-natural-materials"]
  },
  {
    number: "05",
    title: "We Deliver to Site and Stay Accountable",
    body: "Coordinated delivery to your project, with one team owning the outcome from first sketch to final handover.",
    note: "One contract, one invoice, one team accountable from brief to delivered site",
    image: "/figma-assets/07-technical.png",
    thumbs: ["03-engineered-materials", "05-electrical", "06-sanitary"]
  }
];

export function ProcessSection() {
  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-title"
      data-process-pin
    >
      <div className="process-inner">
        <div
          className="section-header"
          data-word-reveal
          data-word-reveal-speed="fast"
        >
          <h2 id="process-title">
            <WordReveal text={processSectionTitle} />
          </h2>
        </div>

        <div className="process-stage">
          {steps.map((step) => (
            <div className="process-slide" data-process-slide key={step.number}>
              <div className="process-grid">
                <div className="process-copy">
                  <div>
                    <p className="process-number">{step.number}</p>
                    <h3
                      className="process-title"
                      data-word-reveal
                      data-word-reveal-speed="regular"
                    >
                      <WordReveal text={step.title} />
                    </h3>
                  </div>
                  <div>
                    <p className="process-body">{step.body}</p>
                    <div className="thumb-row" aria-hidden="true">
                      {step.thumbs.map((thumb) => (
                        <div key={thumb}>
                          <Image
                            src={`/figma-assets/${thumb}.png`}
                            alt=""
                            fill
                            sizes="155px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="process-visual">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 516px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="process-note">{step.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
