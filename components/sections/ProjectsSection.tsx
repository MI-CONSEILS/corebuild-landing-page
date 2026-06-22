import Image from "next/image";

export function ProjectsSection() {
  return (
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
  );
}
