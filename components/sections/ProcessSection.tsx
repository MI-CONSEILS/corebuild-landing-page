import Image from "next/image";

export function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <h2 id="process-title">From brief to site</h2>
      <div className="process-grid">
        <div className="process-copy">
          <p className="process-number">01</p>
          <h3>We Start by Understanding Your Brief in Detail</h3>
          <p className="process-text">
            Reading of project specs, BOQ, design intent, budget and timeline to
            lock down exactly what the project needs.
          </p>
          <div className="thumb-row" aria-hidden="true">
            <Image src="/figma-assets/08-image-5.png" alt="" width={155} height={142} />
            <Image src="/figma-assets/10-image-6.png" alt="" width={155} height={142} />
            <Image src="/figma-assets/11-image-7.png" alt="" width={155} height={142} />
          </div>
        </div>
        <div className="process-visual">
          <Image
            src="/figma-assets/09-image-5.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 516px"
          />
          <div className="process-note">
            100% of specs, BOQ &amp; design intent reviewed before a single quote
            — vs. agents who price first and clarify later
          </div>
        </div>
      </div>
    </section>
  );
}
