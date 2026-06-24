import Image from "next/image";
import { getWordCount, WordReveal } from "@/components/WordReveal";

const projectsTitle = "Selected supply projects.";
const projectsSub = "From European luxury retail to MENA hospitality.";

export function ProjectsSection() {
  return (
    <section
      className="projects-section"
      aria-labelledby="projects-title"
      data-project-morph
    >
      <div className="projects-stage">
        <div
          className="projects-header"
          data-word-reveal
          data-word-reveal-speed="fast"
        >
          <h2 id="projects-title">
            <WordReveal text={projectsTitle} />
          </h2>
          <p className="projects-sub">
            <WordReveal text={projectsSub} start={getWordCount(projectsTitle)} />
          </p>
        </div>

        <div className="project-frame">
          <Image
            className="project-image"
            src="/figma-assets/12-processed-but-i-want-to-animate-the-imag-1.png"
            alt="The Grand Atrium — luxury interior with custom travertine"
            fill
            sizes="(max-width: 900px) 100vw, 1140px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p className="project-caption">
          The Grand Atrium — 4,000m² of custom travertine and integrated lighting.
        </p>
      </div>
    </section>
  );
}
