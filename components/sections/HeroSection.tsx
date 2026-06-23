import { AnimatedButton } from "@/components/AnimatedButton";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { cloudinaryAssets } from "@/lib/cloudinary";

const headline = "Premium materials from China, controlled by one partner.";

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <video
        className="hero__media"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src={cloudinaryAssets.heroVideoMobile}
          type="video/mp4"
          media="(max-width: 900px)"
        />
        <source src={cloudinaryAssets.heroVideo} type="video/mp4" />
      </video>
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__bottom-vignette" aria-hidden="true" />

      <SiteHeader />

      <div className="hero__content">
        <h1 id="hero-title" className="hero__headline">
          {headline}
        </h1>
        <p className="hero__sub">
          We connect developers, architects and contractors across Europe,
          Africa and the MENA
        </p>
      </div>

      <div className="hero__actions">
        <AnimatedButton href="#contact" variant="arrow">
          Tell us what you&apos;re building
        </AnimatedButton>
      </div>

      <a className="hero__scroll-cue" href="#why" aria-label="Scroll to Why CoreBuild">
        <span>Scroll</span>
        <svg
          className="hero__scroll-chevron"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 2L12 12L22 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
