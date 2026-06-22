import Image from "next/image";
import type { ReactNode } from "react";

const contactItems: Array<{ label: string; value: ReactNode }> = [
  {
    label: "HEADQUARTERS",
    value: (
      <>
        Baiyun Design District,
        <br />
        Guangzhou, China
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
          <h2 id="contact-title">
            Let&apos;s build it,
            <br />
            <em>together.</em>
          </h2>
          <p>
            Tell us about your project. We&apos;ll come back with a tailored
            sourcing strategy and material library.
          </p>
          <a className="button button--red" href="mailto:welcome@corebuild-int.com">
            Start a project
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-grid">
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="logistics-image">
            <Image src="/figma-assets/13-logistics-at-dusk.png" alt="" fill sizes="538px" />
          </div>
        </div>
      </div>
    </section>
  );
}
