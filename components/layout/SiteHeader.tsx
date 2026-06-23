import { AnimatedButton } from "@/components/AnimatedButton";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CoreBuild International home">
        <span className="brand-name">CoreBuild</span>
        <span className="brand-sub">International</span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        <a className="nav-link--active" href="#home" aria-current="page">
          Home
        </a>
        <a href="#catalog">Catalog</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <AnimatedButton
        className="btn-start"
        href="#contact"
        variant="arrow"
        aria-label="Start a project"
      >
        Start a project
      </AnimatedButton>
    </header>
  );
}
