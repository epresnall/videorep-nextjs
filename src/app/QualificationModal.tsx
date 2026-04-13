"use client";

import { useState, useEffect, useCallback } from "react";

export default function QualificationModal() {
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState("");
  const [ads, setAds] = useState("");
  const [need, setNeed] = useState("");

  const CAL_URL = "https://cal.com/videorep/videorep-discovery-call";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href*="cal.com/videorep"]');
      if (link) {
        e.preventDefault();
        setVisible(true);
        document.body.style.overflow = "hidden";
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && visible) close();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [visible, close]);

  const canSubmit = role && ads && need;

  if (!visible) return null;

  return (
    <div className="qual-overlay qual-overlay--visible" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="qual-form">
        <button className="qual-form__close" onClick={close} aria-label="Close">&times;</button>
        <div className="qual-form__header">
          <h3>Quick Fit Check</h3>
          <p>Answer a few questions so we can make the most of our call.</p>
        </div>
        <div className="qual-form__group">
          <label className="qual-form__label">What best describes your role?</label>
          <select className="qual-form__select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled>Select your role</option>
            <option value="marketing">Marketing / Growth</option>
            <option value="founder">Founder / CEO</option>
            <option value="sales">Sales / Revenue</option>
            <option value="agency">Agency / Consultant</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="qual-form__group">
          <label className="qual-form__label">Are you currently running paid ads?</label>
          <div className="qual-form__radio-group">
            {[{ value: "yes", label: "Yes" }, { value: "no", label: "Not yet" }, { value: "planning", label: "Planning to" }].map((o) => (
              <div className="qual-form__radio" key={o.value}>
                <input type="radio" name="running-ads" id={`ads-${o.value}`} value={o.value} checked={ads === o.value} onChange={() => setAds(o.value)} />
                <label htmlFor={`ads-${o.value}`}>{o.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="qual-form__group">
          <label className="qual-form__label">What are you looking for?</label>
          <select className="qual-form__select" value={need} onChange={(e) => setNeed(e.target.value)}>
            <option value="" disabled>Select an option</option>
            <option value="full-funnel">Full 511 Video Funnel</option>
            <option value="ads-only">Video Ads only</option>
            <option value="vsl">Landing Page VSL</option>
            <option value="coaching">Video Coaching</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="qual-form__actions">
          <button
            className="btn btn--primary btn--large"
            disabled={!canSubmit}
            onClick={() => { window.open(CAL_URL, "_blank"); close(); }}
            style={{ width: "100%" }}
          >
            Book My Strategy Call
          </button>
          <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: 8 }}>100% free. No obligation. Takes 30 minutes.</p>
        </div>
      </div>
    </div>
  );
}
