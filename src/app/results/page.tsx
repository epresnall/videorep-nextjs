import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";
import ResultsFilter from "./ResultsFilter";

export const metadata: Metadata = {
  title: "Results — Real Metrics From Real Companies",
  description: "Real case studies and metrics from VideoRep clients. See how presenter-led video ads cut CPA by 50%, boosted CTR 2.28x, and delivered 7+ months of performance.",
};

const logos = [
  { src: "/images/logos/unilever.svg", alt: "Unilever" },
  { src: "/images/logos/businessloans.svg", alt: "BusinessLoans.com" },
  { src: "/images/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/images/logos/meta.svg", alt: "Meta" },
  { src: "/images/logos/semrush.svg", alt: "Semrush" },
  { src: "/images/logos/meltwater.svg", alt: "Meltwater" },
  { src: "/images/logos/insead.svg", alt: "INSEAD" },
];

const resultsFAQ = [
  { question: "How long do results typically last?", answer: <p>Most clients see 7+ months of strong performance before any sign of ad fatigue. Compare that to static creative, which usually declines in 4&ndash;6 weeks.</p> },
  { question: "Will this work for my industry?", answer: <p>I&rsquo;ve worked across 250+ brands in finance, SaaS, e-commerce, professional services, and more. The psychology is universal: people trust people. On our call, I&rsquo;ll share relevant examples from your space.</p> },
  { question: "What exactly does the guarantee cover?", answer: <p>I stay until your video ads beat your best static ad on click-through rate. No time limit. No extra charge. I keep working until they outperform. The only condition: a true A/B test &mdash; our video against your static, same spend, same audience, same landing page.</p> },
  { question: "Why are some clients anonymous?", answer: <p>Some clients &mdash; particularly in regulated industries &mdash; prefer not to share their ad performance publicly. The metrics are 100% real. Happy to discuss more details on a call.</p> },
  { question: "Can I see sample videos before committing?", answer: <p>Absolutely. Book a free strategy call and I&rsquo;ll walk you through examples relevant to your industry. I&rsquo;ll also review your current funnel and show you exactly where video can have the biggest impact.</p> },
];

export default function ResultsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="section section--white" style={{ textAlign: "center" }}>
          <div className="container">
            <span className="eyebrow">Success Stories</span>
            <h1>Real Results.<br />Real Companies.</h1>
            <p style={{ maxWidth: 600, margin: "16px auto 32px", fontSize: "var(--fs-body)" }}>See how B2B brands use presenter-led video ads to cut CPA, boost CTR, and outperform static creative.</p>
            <div className="hero__ctas" style={{ justifyContent: "center" }}>
              <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="section section--dark stats-bar-section" aria-label="Key performance statistics">
          <div className="container">
            <div className="stats-bar__grid">
              {[
                { num: "500+", label: "Videos Created" },
                { num: "250+", label: "Brands Trusted" },
                { num: "2.28x", label: "Average CTR Lift" },
                { num: "40\u201350%", label: "Average CPA Reduction" },
                { num: "7+ mo", label: "Before Ad Fatigue" },
              ].map((s) => (
                <div className="stats-bar__item" key={s.label}><span className="stats-bar__number">{s.num}</span><span className="stats-bar__label">{s.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* STORIES */}
        <ResultsFilter />

        {/* LOGO WALL */}
        <section className="section section--white" aria-labelledby="brands-heading">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 id="brands-heading">Trusted by 250+ Brands</h2>
            <p style={{ maxWidth: 600, margin: "12px auto 48px" }}>From Fortune 500 enterprises to high-growth startups.</p>
            <div className="brand-grid" role="list" aria-label="Client brands">
              {logos.map((l) => (
                <div className="brand-grid__item" role="listitem" key={l.alt}><img src={l.src} alt={l.alt} height="28" loading="lazy" className="brand-logo" /></div>
              ))}
              <div className="brand-grid__item brand-grid__item--placeholder" role="listitem" aria-label="More clients"><span>+240 more</span></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="results-faq-heading">
          <div className="container">
            <h2 id="results-faq-heading" style={{ textAlign: "center" }}>Common Questions About Results</h2>
            <p style={{ textAlign: "center", maxWidth: 600, margin: "12px auto 48px" }}>Straight answers about performance, timelines, and what to expect.</p>
            <FAQ items={resultsFAQ} />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark" aria-labelledby="results-cta-heading">
          <div className="container">
            <div className="final-cta">
              <h2 id="results-cta-heading">Ready to See Your Own Results?</h2>
              <p>Book a free strategy call. I&rsquo;ll review your current funnel, share relevant examples, and give you a clear plan for how video improves your metrics.</p>
              <div className="guarantee-badge guarantee-badge--inline" style={{ justifyContent: "center", margin: "24px 0" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>I stay until your ads outperform. No time limit.</span>
              </div>
              <div className="final-cta__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Strategy Call</a>
                <Link href="/" className="btn btn--secondary btn--large">Learn How It Works</Link>
              </div>
              <div className="final-cta__trust"><span>100% No-Pressure Conversation</span><span>Free Ad Review Included</span><span>No Time Limit. No Extra Charge.</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
