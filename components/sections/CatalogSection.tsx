import Image from "next/image";
import type { CSSProperties } from "react";
import { getWordCount, WordReveal } from "@/components/WordReveal";

const catalogTitle = "Catalogue";
const catalogSub = "Sourced and quality-controlled in China.";

const catalogItems = [
  {
    eyebrow: "AESTHETICS",
    title: "Natural materials",
    description: "Stone, metals, wood, fabrics, leather.",
    image: "/figma-assets/02-natural-materials.png"
  },
  {
    eyebrow: "PERFORMANCE",
    title: "Engineered materials",
    description: "Quartz, sintered stone, performance textiles.",
    image: "/figma-assets/03-engineered-materials.png"
  },
  {
    eyebrow: "ATMOSPHERE",
    title: "Lighting",
    description: "Decorative, architectural, technical, smart.",
    image: "/figma-assets/04-lighting.png"
  },
  {
    eyebrow: "UTILITY",
    title: "Electrical & wiring",
    description: "Sockets, switches, designer ranges.",
    image: "/figma-assets/05-electrical.png"
  },
  {
    eyebrow: "WELLNESS",
    title: "Sanitary ware",
    description: "Faucets, fixtures, showers, wellness.",
    image: "/figma-assets/06-sanitary.png"
  },
  {
    eyebrow: "SYSTEMS",
    title: "Technical equipment",
    description: "HVAC, heating, hydraulics, building systems.",
    image: "/figma-assets/07-technical.png"
  }
];

export function CatalogSection() {
  return (
    <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
      <div className="catalog-inner">
        <div
          className="section-header"
          data-word-reveal
          data-word-reveal-speed="fast"
        >
          <h2 id="catalog-title">
            <WordReveal text={catalogTitle} />
          </h2>
          <p className="section-sub">
            <WordReveal text={catalogSub} start={getWordCount(catalogTitle)} />
          </p>
        </div>
        <div className="catalog-grid">
          {catalogItems.map((item, index) => (
            <article className="catalog-card" key={item.title}>
              <h3
                className="catalog-card__heading"
                data-word-reveal
                data-word-reveal-speed="regular"
                style={
                  {
                    "--word-reveal-delay": `${(index % 3) * 80}ms`
                  } as CSSProperties
                }
              >
                <WordReveal text={item.title} />
              </h3>
              <div className="catalog-card__image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1100px) 50vw, 353px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="catalog-card__copy"
                data-word-reveal
                data-word-reveal-speed="regular"
                style={
                  {
                    "--word-reveal-delay": `${(index % 3) * 80}ms`
                  } as CSSProperties
                }
              >
                <p className="catalog-eyebrow">
                  <WordReveal text={item.eyebrow} />
                </p>
                <p>
                  <WordReveal
                    text={item.description}
                    start={getWordCount(item.eyebrow)}
                  />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
