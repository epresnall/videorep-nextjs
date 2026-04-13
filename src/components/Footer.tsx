import Link from "next/link";
import { VideoRepLogoSVG } from "./VideoRepLogo";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__trust">
          <span>500+ Videos Created</span>
          <span>250+ Brands Trusted</span>
          <span>6 Years Experience</span>
          <span>Top 1% on Upwork</span>
        </div>
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__logo" aria-label="VideoRep home">
              <VideoRepLogoSVG size={40} />
              <span>VideoRep</span>
            </Link>
            <p className="footer__tagline">Founded &amp; Presented by Eric Presnall</p>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/511-funnel">511 Video Funnel</Link></li>
              <li><Link href="/ads">Video Ads</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/coaching">Coaching</Link></li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4>Get Started</h4>
            <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--small">Book a Call</a>
            <p>Questions? <a href="mailto:eric@videorep.co">eric@videorep.co</a></p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} VideoRep. All rights reserved.</p>
          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
