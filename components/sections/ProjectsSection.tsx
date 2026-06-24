import { getWordCount, WordReveal } from "@/components/WordReveal";
import { cloudinaryAssets } from "@/lib/cloudinary";

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
          <video
            className="project-image"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={cloudinaryAssets.projectPoster}
          >
            <source src={cloudinaryAssets.projectVideo} type="video/mp4" />
          </video>
        </div>

        <p className="project-caption">
          The Grand Atrium — 4,000m² of custom travertine and integrated lighting.
        </p>
      </div>
    </section>
  );
}
