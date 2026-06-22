import { SiteHeader } from "@/components/layout/SiteHeader";
import { cloudinaryAssets } from "@/lib/cloudinary";

export function HeroSection() {
  return (
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
      <SiteHeader />

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
  );
}
