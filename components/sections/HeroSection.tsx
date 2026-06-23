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
        preload="metadata"
      >
        <source src={cloudinaryAssets.heroVideo} type="video/mp4" />
      </video>
      <div className="hero__wash" aria-hidden="true" />

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
    </section>
  );
}
