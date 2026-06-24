import Image from "next/image";
import { getWordCount, WordReveal } from "@/components/WordReveal";

const processSectionTitle = "From brief to site";
// ponytail: section subtitle is placeholder — retune later.
const processSectionSub = "Six steps from first brief to delivered site.";

const steps = [
  {
    number: "01",
    title: "Brief",
    body: "Specs, BOQ, budget, timeline analysis",
    image: "/figma-assets/10-image-6.png",
    thumbs: ["08-image-5", "10-image-6", "11-image-7"]
  },
  {
    number: "02",
    title: "Study",
    body: "Material, finish and supplier strategy",
    image: "/figma-assets/08-image-5.png",
    thumbs: ["02-natural-materials", "03-engineered-materials", "04-lighting"]
  },
  {
    number: "03",
    title: "Sourcing",
    body: "Factory Shortlist, quote, negotiation",
    image: "/figma-assets/11-image-7.png",
    thumbs: ["05-electrical", "06-sanitary", "07-technical"]
  },
  {
    number: "04",
    title: "Samples",
    body: "Validation samples and approvals",
    image: "/figma-assets/04-lighting.png",
    thumbs: ["02-natural-materials", "06-sanitary", "03-engineered-materials"]
  },
  {
    number: "05",
    title: "Logistics",
    body: "Consolidation, export documents and exports",
    image: "/figma-assets/13-logistics-at-dusk.png",
    thumbs: ["12-processed-but-i-want-to-animate-the-imag-1", "13-logistics-at-dusk", "02-natural-materials"]
  },
  {
    number: "06",
    title: "Validate",
    body: "Technical review and factory capability audits",
    image: "/figma-assets/07-technical.png",
    thumbs: ["03-engineered-materials", "05-electrical", "07-technical"]
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
          <p className="section-sub">
            <WordReveal
              text={processSectionSub}
              start={getWordCount(processSectionTitle)}
            />
          </p>
        </div>

        <div className="process-stage">
          {steps.map((step) => (
            <div className="process-slide" data-process-slide key={step.number}>
              <div className="process-grid">
                <div className="process-copy" data-step-reveal>
                  <div>
                    <p className="process-number">{step.number}</p>
                    <h3 className="process-title">
                      <WordReveal text={step.title} />
                    </h3>
                  </div>
                  <div className="process-copy__detail">
                    <p className="process-body">
                      <WordReveal
                        text={step.body}
                        start={getWordCount(step.title)}
                      />
                    </p>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
