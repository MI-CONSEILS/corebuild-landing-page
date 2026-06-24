import Image from "next/image";
import type { ReactNode } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { getWordCount, WordReveal } from "@/components/WordReveal";

const contactTitle = "Let's build it,";
const contactEmphasis = "together.";

const contactItems: Array<{ label: string; value: ReactNode }> = [
  {
    label: "HEADQUARTERS",
    value: (
      <>
        Baiyun Design District,<br />Guangzhou, China
      </>
    )
  },
  { label: "PHONE", value: "+971 50 992 65 65" },
  {
    label: "EMAIL",
    value: (
      <a href="mailto:welcome@corebuild-int.com">welcome@corebuild-int.com</a>
    )
  },
  { label: "SOCIAL", value: "WeChat: +86 13268362503" }
];

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <h2
            id="contact-title"
            className="cta-headline"
            data-word-reveal
            data-word-reveal-speed="fast"
          >
            <WordReveal text={contactTitle} />
            <em>
              <WordReveal
                text={contactEmphasis}
                start={getWordCount(contactTitle)}
              />
            </em>
          </h2>
          <p className="cta-body">
            Tell us about your project. We&apos;ll come back with a tailored
            sourcing strategy and material library.
          </p>
          <AnimatedButton
            className="btn-cta"
            href="mailto:welcome@corebuild-int.com"
            variant="primary"
          >
            Start a project
          </AnimatedButton>
        </div>

        <div className="contact-details">
          <div className="contact-grid">
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <p className="contact-label">{item.label}</p>
                <div className="contact-value">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="logistics-image">
            <Image
              src="/figma-assets/13-logistics-at-dusk.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 538px"
              style={{ objectFit: "cover", mixBlendMode: "saturation" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
