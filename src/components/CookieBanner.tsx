"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <p>We use cookies to improve your experience. By continuing you agree to our <Link href="/privacy">Privacy Policy</Link>.</p>
        <div className="cookie-banner__actions">
          <button className="btn btn--primary btn--small" onClick={accept}>Accept</button>
          <Link href="/privacy" className="btn btn--ghost btn--small">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
