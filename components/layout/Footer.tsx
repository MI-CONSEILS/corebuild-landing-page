export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="#home" aria-label="CoreBuild International home">
            <span className="footer-wordmark">CoreBuild</span>
            <span className="footer-wordmark-sub">International</span>
          </a>
          <p className="footer-tagline">Your gateway to China&apos;s supply chain.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Legal</a>
        </nav>

        <p className="footer-copy">© 2024 CoreBuild International. All rights reserved.</p>
      </div>
    </footer>
  );
}
