import { Fragment } from "react";
import type { CSSProperties } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { cloudinaryAssets } from "@/lib/cloudinary";

const headline = "Premium materials from China, controlled by one partner.";
const subcopy =
  "We connect developers, architects and contractors across Europe, Africa and the MENA";

// Render text as word spans for the cascading blur reveal. Rendering them on the
// server (rather than rewriting the DOM on load) keeps the LCP headline from
// reflowing after hydration — no layout shift. `--reveal-i` drives the stagger
// purely in CSS, so the reveal works even with JS disabled.
function RevealWords({
  text,
  start,
  className
}: {
  text: string;
  start: number;
  className: string;
}) {
  const words = text.trim().split(/\s+/);
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={start + i}>
          <span
            className={`${className} reveal-word`}
            style={{ "--reveal-i": String(start + i) } as CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

const headlineWordCount = headline.trim().split(/\s+/).length;
const subWordCount = subcopy.trim().split(/\s+/).length;

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
        poster={cloudinaryAssets.heroPoster}
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
        <h1
          id="hero-title"
          className="hero__headline hero__headline--split"
          data-hero-split
        >
          <RevealWords
            text={headline}
            start={0}
            className="hero__headline-word"
          />
        </h1>
        <p className="hero__sub">
          <RevealWords
            text={subcopy}
            start={headlineWordCount}
            className="hero__sub-word"
          />
        </p>
      </div>

      <div
        className="hero__actions reveal-block"
        style={
          { "--reveal-i": String(headlineWordCount + subWordCount) } as CSSProperties
        }
      >
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
