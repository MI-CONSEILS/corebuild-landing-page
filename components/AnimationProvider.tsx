"use client";

import { useEffect } from "react";

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

function revealWithoutMotion() {
  // The hero cascade is pure CSS (word spans are server-rendered). This only
  // forces the scroll-reveal section words visible when GSAP is unavailable.
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

    // The hero headline gradient is sliced per-word in CSS; recompute the
    // offsets once fonts are ready and on resize so it stays continuous.
    const syncHeroHeadline = () => {
      const headline =
        document.querySelector<HTMLElement>(".hero__headline--split");
      if (headline) syncHeadlineGradient(headline);
    };
    syncHeroHeadline();
    window.addEventListener("resize", syncHeroHeadline);
    cleanupFns.push(() => window.removeEventListener("resize", syncHeroHeadline));
    void document.fonts.ready.then(() => {
      if (!cancelled) syncHeroHeadline();
    });

    const revealGroups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-word-reveal]")
    );
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-word-reveal-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.15
        }
      );

      revealGroups.forEach((group) => {
        group.classList.add("is-word-reveal-ready");
        revealObserver.observe(group);
      });
      cleanupFns.push(() => revealObserver.disconnect());
    }

    const runCleanup = () => {
      cancelled = true;
      cleanupFns.forEach((cleanup) => cleanup());
    };

    if (reduceMotion) {
      revealWithoutMotion();
      return runCleanup;
    }

    const initAnimations = async () => {
      let gsapMod, scrollTriggerMod, lenisMod;
      try {
        [gsapMod, scrollTriggerMod, lenisMod] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis")
        ]);
      } catch {
        revealWithoutMotion();
        return;
      }

      if (cancelled) return;

      const gsap = gsapMod.default;
      const ScrollTrigger = scrollTriggerMod.ScrollTrigger;
      const Lenis = lenisMod.default;

      gsap.registerPlugin(ScrollTrigger);
      // Mobile browsers fire resize when the address bar shows/hides on scroll;
      // letting ScrollTrigger refresh on that makes pinned sections jump
      // ("bounce"). The layout uses svh (stable across that resize) so ignoring
      // it is safe. No-op on desktop.
      ScrollTrigger.config({ ignoreMobileResize: true });

      const lenis = new Lenis({
        duration: 1.15,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9
      });
      const updateLenis = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      // In-page anchor links route through Lenis so the smooth scroll is
      // consistent with the wheel (CSS scroll-behavior is intentionally off).
      const onAnchorClick = (event: MouseEvent) => {
        const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
          'a[href^="#"]'
        );
        if (!link) return;
        const hash = link.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector<HTMLElement>(hash);
        if (!target) return;
        event.preventDefault();
        lenis.scrollTo(target);
      };
      document.addEventListener("click", onAnchorClick);
      cleanupFns.push(() => document.removeEventListener("click", onAnchorClick));

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

      const projectMorphMedia = gsap.matchMedia();
      projectMorphMedia.add("(min-width: 901px)", () => {
        const section = document.querySelector<HTMLElement>("[data-project-morph]");
        const frame = section?.querySelector<HTMLElement>(".project-frame");
        const image = section?.querySelector<HTMLElement>(".project-image");
        const caption = section?.querySelector<HTMLElement>(".project-caption");

        if (!section || !frame || !image || !caption) return;

        gsap.set(frame, {
          "--project-inset": "34%"
        });
        gsap.set(image, {
          scale: 1.14
        });
        gsap.set(caption, {
          opacity: 0,
          y: 18
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Morph completes within one viewport of scroll; the taller section
            // (see .projects-section) then holds the full-size image before exit.
            end: () => "+=" + window.innerHeight,
            scrub: 1
          }
        });

        timeline
          .to(
            frame,
            {
              "--project-inset": "0%",
              duration: 1,
              ease: "none"
            },
            0
          )
          .to(
            image,
            {
              scale: 1,
              duration: 1,
              ease: "none"
            },
            0
          )
          .to(
            caption,
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out"
            },
            0.75
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          gsap.set([frame, image, caption], { clearProps: "all" });
        };
      });
      cleanupFns.push(() => projectMorphMedia.revert());

      // "From brief to site" — the sticky inner (CSS) holds the frame while we
      // scrub through the steps, crossfading one stacked slide to the next and
      // replaying each step's word-reveal as its number changes.
      const processMedia = gsap.matchMedia();
      processMedia.add("(min-width: 1px)", () => {
        const section = document.querySelector<HTMLElement>("[data-process-pin]");
        const slides = section
          ? gsap.utils.toArray<HTMLElement>("[data-process-slide]", section)
          : [];

        if (!section || slides.length < 2) return;

        const groups = slides.map((slide) =>
          slide.querySelector<HTMLElement>("[data-step-reveal]")
        );

        // Restart the same blur/fade cascade used by the hero/catalogue.
        const replayReveal = (group: HTMLElement | null) => {
          if (!group) return;
          group.classList.remove("is-word-reveal-visible");
          void group.offsetWidth; // force reflow so the animation re-runs
          group.classList.add("is-word-reveal-visible");
        };

        groups.forEach((group) => group?.classList.add("is-word-reveal-ready"));

        gsap.set(slides, { autoAlpha: 0 });
        gsap.set(slides[0], { autoAlpha: 1 });
        replayReveal(groups[0]);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        });

        // Hold, then crossfade to the next step and replay its reveal.
        for (let i = 1; i < slides.length; i++) {
          timeline
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.4 }, i)
            .to(slides[i], { autoAlpha: 1, duration: 0.4 }, i)
            .call(replayReveal, [groups[i]], i);
        }

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          gsap.set(slides, { clearProps: "all" });
          groups.forEach((group) =>
            group?.classList.remove(
              "is-word-reveal-ready",
              "is-word-reveal-visible"
            )
          );
        };
      });
      cleanupFns.push(() => processMedia.revert());

      ScrollTrigger.refresh();

      cleanupFns.push(() => {
        gsap.ticker.remove(updateLenis);
        lenis.destroy();
      });
    };

    void initAnimations();

    return runCleanup;
  }, []);

  return null;
}
