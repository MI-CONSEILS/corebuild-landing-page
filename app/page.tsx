import Image from "next/image";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { cloudinaryAssets } from "@/lib/cloudinary";

const catalogItems = [
  {
    label: "AESTHETICS",
    title: "Natural materials",
    description: "Stone, metals, wood, fabrics, leather.",
    image: "/figma-assets/02-natural-materials.png"
  },
  {
    label: "PERFORMANCE",
    title: "Engineered materials",
    description: "Quartz, sintered stone, performance textiles.",
    image: "/figma-assets/03-engineered-materials.png"
  },
  {
    label: "ATMOSPHERE",
    title: "Lighting",
    description: "Decorative, architectural, technical, smart.",
    image: "/figma-assets/04-lighting.png"
  },
  {
    label: "UTILITY",
    title: "Electrical & wiring",
    description: "Sockets, switches, designer ranges.",
    image: "/figma-assets/05-electrical.png"
  },
  {
    label: "WELLNESS",
    title: "Sanitary ware",
    description: "Faucets, fixtures, showers, wellness.",
    image: "/figma-assets/06-sanitary.png"
  },
  {
    label: "SYSTEMS",
    title: "Technical equipment",
    description: "HVAC, heating, hydraulics, building systems.",
    image: "/figma-assets/07-technical.png"
  }
];

const contactItems = [
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

const whyCorebuildText =
  "Corebuild is your single partner from factory floor to finished site We consolidate sourcing, quality control and logistics across Guangzhou's manufacturing network so you deal with one contract, one invoice and one team that owns the outcome from first sketch to final delivery.";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <video
          className="hero__video"
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={cloudinaryAssets.heroVideo} type="video/mp4" />
        </video>
        <div className="hero__wash" aria-hidden="true" />
        <header className="site-header">
          <a className="brand" href="#home" aria-label="CoreBuild International home">
            <strong>CoreBuild</strong>
            <span>International</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#catalog">Catalog</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button--dark header-button" href="#contact">
            Start a project
          </a>
        </header>

        <div className="hero__content">
          <h1 id="hero-title">
            Premium materials from China, controlled by one partner.
          </h1>
          <p>
            We connect developers, architects and contractors across Europe,
            Africa and the MENA
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#contact">
              Start a project
            </a>
            <a className="button button--light" href="#catalog">
              See the catalog
            </a>
          </div>
        </div>
      </section>

      <section className="value-section" aria-labelledby="why-title">
        <div className="section-heading">
          <h2 id="why-title">Why CoreBuild</h2>
          <p>Sourced and quality-controlled in China.</p>
        </div>
        <ScrollTextReveal className="value-copy" text={whyCorebuildText} />
      </section>

      <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <h2 id="catalog-title">Catalogue</h2>
          <p>Sourced and quality-controlled in China.</p>
        </div>
        <div className="catalog-grid">
          {catalogItems.map((item) => (
            <article className="catalog-card" key={item.title}>
              <div className="catalog-card__image">
                <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 353px" />
              </div>
              <p className="catalog-card__label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <h2 id="process-title">From brief to site</h2>
        <div className="process-grid">
          <div className="process-copy">
            <p className="process-number">01</p>
            <h3>We Start by Understanding Your Brief in Detail</h3>
            <p className="process-text">
              Reading of project specs, BOQ, design intent, budget and timeline
              to lock down exactly what the project needs.
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
              100% of specs, BOQ &amp; design intent reviewed before a single
              quote — vs. agents who price first and clarify later
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <h2 id="projects-title">Selected supply projects.</h2>
          <p>From European luxury retail to MENA hospitality.</p>
        </div>
        <div className="project-image">
          <Image
            src="/figma-assets/12-processed-but-i-want-to-animate-the-imag-1.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1140px"
          />
        </div>
        <p className="project-caption">
          The Grand Atrium — 4,000m² of custom travertine and integrated lighting.
        </p>
      </section>

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

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a className="footer-brand" href="#home">
              <strong>CoreBuild</strong>
              <span>International</span>
            </a>
            <p>Your gateway to China&apos;s supply chain.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Legal</a>
          </nav>
          <p>© 2024 CoreBuild International. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
