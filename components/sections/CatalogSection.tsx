import Image from "next/image";

const catalogItems = [
  {
    label: "AESTHETICS",
    title: "Natural materials",
    description: "Stone, metals, wood, fabrics, leather.",
    image: "/figma-assets/02-natural-materials.png"
  },
  {
    label: "PERFORMANCE",
    title: "Engineered materials",
    description: "Quartz, sintered stone, performance textiles.",
    image: "/figma-assets/03-engineered-materials.png"
  },
  {
    label: "ATMOSPHERE",
    title: "Lighting",
    description: "Decorative, architectural, technical, smart.",
    image: "/figma-assets/04-lighting.png"
  },
  {
    label: "UTILITY",
    title: "Electrical & wiring",
    description: "Sockets, switches, designer ranges.",
    image: "/figma-assets/05-electrical.png"
  },
  {
    label: "WELLNESS",
    title: "Sanitary ware",
    description: "Faucets, fixtures, showers, wellness.",
    image: "/figma-assets/06-sanitary.png"
  },
  {
    label: "SYSTEMS",
    title: "Technical equipment",
    description: "HVAC, heating, hydraulics, building systems.",
    image: "/figma-assets/07-technical.png"
  }
];

export function CatalogSection() {
  return (
    <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
      <div className="section-heading">
        <h2 id="catalog-title">Catalogue</h2>
        <p>Sourced and quality-controlled in China.</p>
      </div>
      <div className="catalog-grid">
        {catalogItems.map((item) => (
          <article className="catalog-card" key={item.title}>
            <div className="catalog-card__image">
              <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 353px" />
            </div>
            <p className="catalog-card__label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
