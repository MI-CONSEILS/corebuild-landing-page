import Image from "next/image";

export function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="section-header">
          <h2 id="process-title">From brief to site</h2>
        </div>

        <div className="process-grid">
          <div className="process-copy">
            <div>
              <p className="process-number">01</p>
              <h3 className="process-title">
                We Start by Understanding Your Brief in Detail
              </h3>
            </div>
            <div>
              <p className="process-body">
                Reading of project specs, BOQ, design intent, budget and timeline to
                lock down exactly what the project needs.
              </p>
              <div className="thumb-row" aria-hidden="true">
                <div>
                  <Image
                    src="/figma-assets/08-image-5.png"
                    alt=""
                    fill
                    sizes="155px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <Image
                    src="/figma-assets/10-image-6.png"
                    alt=""
                    fill
                    sizes="155px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <Image
                    src="/figma-assets/11-image-7.png"
                    alt=""
                    fill
                    sizes="155px"
                    style={{ objectFit: "cover", transform: "scaleY(-1) rotate(180deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="process-visual">
            <Image
              src="/figma-assets/10-image-6.png"
              alt="Project brief review session"
              fill
              sizes="(max-width: 900px) 100vw, 516px"
              style={{ objectFit: "cover" }}
            />
            <div className="process-note">
              100% of specs, BOQ &amp; design intent reviewed before a single quote
              — vs. agents who price first and clarify later
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
