import { AnimatedButton } from "@/components/AnimatedButton";

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

        <div className="footer-end">
          <AnimatedButton
            href="/start"
            variant="arrow"
            className="btn-footer"
            aria-label="Start a project"
          >
            Start a project
          </AnimatedButton>
          <p className="footer-copy">© 2024 CoreBuild International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
