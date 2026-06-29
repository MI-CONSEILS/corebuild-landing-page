import { AnimatedButton } from "@/components/AnimatedButton";

type SiteHeaderProps = {
  rootPath?: string;
};

export function SiteHeader({ rootPath = "" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href={`${rootPath}#home`} aria-label="CoreBuild International home">
        <span className="brand-name">CoreBuild</span>
        <span className="brand-sub">International</span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        <a className="nav-link--active" href={`${rootPath}#home`} aria-current="page">
          Home
        </a>
        <a href={`${rootPath}#catalog`}>Catalog</a>
        <a href={`${rootPath}#process`}>Process</a>
        <a href={`${rootPath}#contact`}>Contact</a>
      </nav>

      <AnimatedButton
        className="btn-start"
        href="/start"
        variant="arrow"
        aria-label="Start a project"
      >
        Start a project
      </AnimatedButton>
    </header>
  );
}
