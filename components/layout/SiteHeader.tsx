export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CoreBuild International home">
        <strong>CoreBuild</strong>
        <span>International</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#catalog">Catalog</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="button button--dark header-button" href="#contact">
        Start a project
      </a>
    </header>
  );
}
