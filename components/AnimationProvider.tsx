"use client";

import { useEffect } from "react";

type GsapTween = {
  kill: () => void;
  scrollTrigger?: { kill: () => void };
};

type Gsap = {
  killTweensOf: (targets: unknown) => void;
  registerPlugin: (...plugins: unknown[]) => void;
  set: (targets: unknown, vars: Record<string, unknown>) => void;
  to: (targets: unknown, vars: Record<string, unknown>) => GsapTween;
  from: (targets: unknown, vars: Record<string, unknown>) => GsapTween;
  fromTo: (
    targets: unknown,
    fromVars: Record<string, unknown>,
    toVars: Record<string, unknown>
  ) => GsapTween;
  ticker: {
    add: (callback: (time: number) => void) => void;
    remove: (callback: (time: number) => void) => void;
    lagSmoothing: (threshold: number) => void;
  };
  utils: {
    toArray: <T extends HTMLElement>(selector: string) => T[];
  };
};

type ScrollTriggerGlobal = {
  refresh: () => void;
  update: () => void;
};

type LenisInstance = {
  destroy: () => void;
  on: (event: "scroll", callback: () => void) => void;
  raf: (time: number) => void;
};

type LenisConstructor = new (options: {
  duration: number;
  lerp: number;
  smoothWheel: boolean;
  wheelMultiplier: number;
}) => LenisInstance;

declare global {
  interface Window {
    gsap?: Gsap;
    ScrollTrigger?: ScrollTriggerGlobal;
    Lenis?: LenisConstructor;
  }
}

const scripts = [
  {
    id: "gsap-core",
    src: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
  },
  {
    id: "gsap-scroll-trigger",
    src: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"
  },
  {
    id: "lenis",
    src: "https://cdn.jsdelivr.net/npm/lenis@1.3.0/dist/lenis.min.js"
  }
];

function loadScript(id: string, src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;

    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing ?? document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Unable to load ${src}`));

    if (!existing) document.head.appendChild(script);
  });
}

function syncHeadlineGradient(headline: HTMLElement) {
  const headlineRect = headline.getBoundingClientRect();

  headline.style.setProperty(
    "--headline-gradient-width",
    `${headlineRect.width}px`
  );

  headline
    .querySelectorAll<HTMLElement>(".hero__headline-word")
    .forEach((word) => {
      const wordRect = word.getBoundingClientRect();
      word.style.setProperty(
        "--headline-word-x",
        `${wordRect.left - headlineRect.left}px`
      );
    });
}

// Vanilla cascading blur reveal. Both text lines are split into words for a
// left-to-right cascade, followed by the CTA. The hidden state lives on the
// `.reveal-word` / `.reveal-block` classes (added here by JS), so if this never
// runs the text stays fully visible and the animation remains an enhancement.
function revealHeroWords() {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero || hero.dataset.heroRevealed) return;
  hero.dataset.heroRevealed = "true";

  let index = 0;

  // Headline — split into words while preserving one continuous gradient.
  const headline = hero.querySelector<HTMLElement>(".hero__headline");
  if (headline && !headline.dataset.split) {
    const words = (headline.textContent || "").trim().split(/\s+/);
    headline.textContent = "";
    words.forEach((text, i) => {
      const span = document.createElement("span");
      span.className = "hero__headline-word reveal-word";
      span.style.setProperty("--reveal-i", String(index++));
      span.textContent = text;
      headline.appendChild(span);
      if (i < words.length - 1) {
        headline.appendChild(document.createTextNode(" "));
      }
    });
    headline.dataset.split = "true";
    headline.classList.add("hero__headline--split");
    syncHeadlineGradient(headline);
  }

  // Subtitle — split into words once for the cascade
  const sub = hero.querySelector<HTMLElement>(".hero__sub");
  if (sub && !sub.dataset.split) {
    const words = (sub.textContent || "").trim().split(/\s+/);
    sub.textContent = "";
    words.forEach((text, i) => {
      const span = document.createElement("span");
      span.className = "hero__sub-word reveal-word";
      span.style.setProperty("--reveal-i", String(index++));
      span.textContent = text;
      sub.appendChild(span);
      if (i < words.length - 1) sub.appendChild(document.createTextNode(" "));
    });
    sub.dataset.split = "true";
  }

  // CTA — reveal as a block, last in the cascade
  const actions = hero.querySelector<HTMLElement>(".hero__actions");
  if (actions) {
    actions.style.setProperty("--reveal-i", String(index));
    actions.classList.add("reveal-block");
  }
}

function revealWithoutMotion() {
  // Hero text is driven by CSS (see revealHeroWords); this only forces the
  // scroll-reveal words visible when GSAP/motion is unavailable.
  document
    .querySelectorAll<HTMLElement>("[data-reveal-word]")
    .forEach((element) => {
      element.style.opacity = "1";
      element.style.filter = "none";
      element.style.transform = "none";
    });
}

function mixColor(amount: number) {
  const progress = Math.min(1, Math.max(0, amount));
  const from = { r: 133, g: 72, b: 59 };
  const to = { r: 218, g: 212, b: 207 };
  const r = Math.round(to.r + (from.r - to.r) * progress);
  const g = Math.round(to.g + (from.g - to.g) * progress);
  const b = Math.round(to.b + (from.b - to.b) * progress);
  return `rgb(${r}, ${g}, ${b})`;
}

export function AnimationProvider() {
  useEffect(() => {
    let cancelled = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanupFns: Array<() => void> = [];

    // Vanilla cascading blur reveal — runs on page load, independent of GSAP.
    revealHeroWords();

    const syncHeroHeadline = () => {
      const headline =
        document.querySelector<HTMLElement>(".hero__headline--split");
      if (headline) syncHeadlineGradient(headline);
    };
    window.addEventListener("resize", syncHeroHeadline);
    cleanupFns.push(() => window.removeEventListener("resize", syncHeroHeadline));
    void document.fonts.ready.then(() => {
      if (!cancelled) syncHeroHeadline();
    });

    const runCleanup = () => {
      cancelled = true;
      cleanupFns.forEach((cleanup) => cleanup());
    };

    if (reduceMotion) {
      revealWithoutMotion();
      return runCleanup;
    }

    const initAnimations = async () => {
      try {
        for (const script of scripts) {
          await loadScript(script.id, script.src);
        }
      } catch {
        revealWithoutMotion();
        return;
      }

      if (cancelled) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        revealWithoutMotion();
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      let lenis: LenisInstance | null = null;
      const Lenis = window.Lenis;
      const updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };

      if (Lenis) {
        lenis = new Lenis({
          duration: 1.15,
          lerp: 0.08,
          smoothWheel: true,
          wheelMultiplier: 0.9
        });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);
      }

      // Hero intro is handled by the vanilla CSS cascade (revealHeroWords).
      // GSAP here only drives button hovers and the scroll-reveal section.

      gsap.utils.toArray<HTMLElement>("[data-gsap-button]").forEach((button) => {
        const icon = button.querySelector<HTMLElement>(".animated-button__icon");
        const label = button.querySelector<HTMLElement>(".animated-button__label");
        const resetTargets = [icon, label].filter(
          (target): target is HTMLElement => Boolean(target)
        );
        const isOutline = button.classList.contains("animated-button--outline");
        const isArrow = button.classList.contains("animated-button--arrow");
        const isContact = button.classList.contains("btn-cta");

        const enter = () => {
          gsap.to(button, {
            backgroundColor: isOutline ? "#ffffff" : isContact ? "#7f0018" : "#743b31",
            borderColor: isOutline ? "#ffffff" : isContact ? "#7f0018" : "#743b31",
            boxShadow: "0 18px 32px rgba(36, 20, 17, 0.22)",
            color: isOutline ? "#85483b" : "#ffffff",
            duration: 0.32,
            ease: "power3.out"
          });
          gsap.to(button, {
            y: -3,
            scale: 1.015,
            duration: 0.32,
            ease: "power3.out"
          });
          if (icon) {
            gsap.to(icon, {
              backgroundColor: isArrow ? "#f5f1eb" : undefined,
              color: isArrow ? "#85483b" : undefined,
              x: 3,
              rotate: -12,
              duration: 0.32,
              ease: "power3.out"
            });
          }

          if (label) {
            gsap.to(label, {
              x: icon ? -2 : 0,
              duration: 0.32,
              ease: "power3.out"
            });
          }
        };

        const leave = () => {
          gsap.to(button, {
            clearProps: "backgroundColor,borderColor,boxShadow,color",
            y: 0,
            scale: 1,
            duration: 0.42,
            ease: "elastic.out(1, 0.65)"
          });
          gsap.to(resetTargets, {
            clearProps: "backgroundColor,color",
            x: 0,
            rotate: 0,
            duration: 0.38,
            ease: "power3.out"
          });
        };

        const down = () => {
          gsap.to(button, {
            scale: 0.985,
            duration: 0.12,
            ease: "power2.out"
          });
        };

        const up = () => {
          gsap.to(button, {
            scale: 1.015,
            duration: 0.18,
            ease: "power2.out"
          });
        };

        button.addEventListener("pointerenter", enter);
        button.addEventListener("pointerleave", leave);
        button.addEventListener("pointerdown", down);
        button.addEventListener("pointerup", up);

        cleanupFns.push(() => {
          button.removeEventListener("pointerenter", enter);
          button.removeEventListener("pointerleave", leave);
          button.removeEventListener("pointerdown", down);
          button.removeEventListener("pointerup", up);
          gsap.killTweensOf([button, ...resetTargets]);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-scroll-reveal-section]").forEach((section) => {
        const wordNodes = Array.from(
          section.querySelectorAll<HTMLElement>("[data-reveal-word]")
        );

        if (!wordNodes.length) return;

        const tween = gsap.fromTo(
          wordNodes,
          {
            color: mixColor(0),
            filter: "blur(2.5px)",
            opacity: 1
          },
          {
            color: mixColor(1),
            filter: "blur(0px)",
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: true
            }
          }
        );

        cleanupFns.push(() => {
          tween.scrollTrigger?.kill();
          tween.kill();
        });
      });

      ScrollTrigger.refresh();

      cleanupFns.push(() => {
        if (lenis) {
          gsap.ticker.remove(updateLenis);
          lenis.destroy();
        }
      });
    };

    void initAnimations();

    return runCleanup;
  }, []);

  return null;
}
