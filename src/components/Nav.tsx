"use client";

import Link from "next/link";
import { useState } from "react";
import { VideoRepLogoSVG } from "./VideoRepLogo";

export default function Nav({ variant = "standard" }: { variant?: "standard" | "mega" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  if (variant === "mega") {
    return (
      <nav className="nav nav--mega" role="navigation" aria-label="Primary">
        <div className="container nav__inner">
          <Link href="/" className="nav__logo" aria-label="VideoRep home">
            <VideoRepLogoSVG />
            <span>VideoRep</span>
          </Link>

          <ul className="nav__links" role="menubar">
            <li className="nav__dropdown" role="none"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="nav__link nav__link--dropdown"
                role="menuitem"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={() => setMegaOpen(!megaOpen)}
              >
                Services
                <svg className="nav__dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`nav__mega-panel${megaOpen ? " nav__mega-panel--open" : ""}`} role="menu">
                <Link href="/511-funnel" className="mega-card" role="menuitem">
                  <div className="mega-card__icon mega-card__icon--blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="9,8 9,14 15,11" fill="currentColor" />
                      <line x1="7" y1="21" x2="17" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <strong>511 Video Funnel</strong>
                    <span>Complete 7-video ad system delivered in 5-7 days</span>
                  </div>
                </Link>
                <Link href="/ads" className="mega-card" role="menuitem">
                  <div className="mega-card__icon mega-card__icon--teal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="10,7 10,17 18,12" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <strong>Video Ads</strong>
                    <span>Individual presenter-led ads for paid campaigns</span>
                  </div>
                </Link>
                <Link href="/coaching" className="mega-card" role="menuitem">
                  <div className="mega-card__icon mega-card__icon--green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <strong>Founder Coaching</strong>
                    <span>Learn to present on camera with confidence</span>
                  </div>
                </Link>
              </div>
            </li>
            <li role="none"><Link href="/results" className="nav__link" role="menuitem">Results</Link></li>
            <li role="none"><Link href="/about" className="nav__link" role="menuitem">About</Link></li>
          </ul>

          <div className="nav__ctas">
            <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--small">Book a Free Call</a>
          </div>

          <button
            className="nav__hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className={`nav__mobile-menu${mobileOpen ? " active" : ""}`}>
          <div className="nav__mobile-section">
            <span className="nav__mobile-label">Services</span>
            <Link href="/511-funnel" className="nav__link" onClick={() => setMobileOpen(false)}>511 Video Funnel</Link>
            <Link href="/ads" className="nav__link" onClick={() => setMobileOpen(false)}>Video Ads</Link>
            <Link href="/coaching" className="nav__link" onClick={() => setMobileOpen(false)}>Founder Coaching</Link>
          </div>
          <Link href="/results" className="nav__link" onClick={() => setMobileOpen(false)}>Results</Link>
          <Link href="/about" className="nav__link" onClick={() => setMobileOpen(false)}>About</Link>
          <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--block">Book a Free Call</a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="nav" role="navigation" aria-label="Primary">
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="VideoRep home">
          <VideoRepLogoSVG />
          <span>VideoRep</span>
        </Link>

        <ul className="nav__links" role="menubar">
          <li role="none"><Link href="/results" className="nav__link" role="menuitem">Results</Link></li>
          <li role="none"><Link href="/about" className="nav__link" role="menuitem">About</Link></li>
          <li role="none"><Link href="/coaching" className="nav__link" role="menuitem">Coaching</Link></li>
        </ul>

        <div className="nav__ctas">
          <Link href="/results" className="btn btn--secondary btn--small">See My Work</Link>
          <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--small">Book a Free Call</a>
        </div>

        <button
          className="nav__hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nav__mobile-menu${mobileOpen ? " active" : ""}`}>
        <Link href="/results" className="nav__link" onClick={() => setMobileOpen(false)}>Results</Link>
        <Link href="/about" className="nav__link" onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/coaching" className="nav__link" onClick={() => setMobileOpen(false)}>Coaching</Link>
        <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--block">Book a Free Call</a>
      </div>
    </nav>
  );
}
