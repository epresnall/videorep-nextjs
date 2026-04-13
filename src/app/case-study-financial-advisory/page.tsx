import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Case Study: Financial Advisory Firm — 50% CPA Reduction",
  description: "How a financial advisory firm cut CPA by 50%, boosted CTR 2.28x, and ran the same video ads for 7+ months without fatigue.",
};

export default function CaseStudyFinancialAdvisory() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="section section--white cs-hero" aria-labelledby="cs-heading">
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ margin: "0 auto 16px", width: 80, height: 80 }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true"><rect width="80" height="80" rx="16" fill="var(--brand-light)" /><text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="var(--brand)" fontFamily="var(--font-sans)" fontWeight="700" fontSize="28">FA</text></svg>
            </div>
            <span className="cs-hero__tag">Finance</span>
            <h1 id="cs-heading">Cut CPA 50% With<br />Presenter-Led Video Ads</h1>
            <p style={{ maxWidth: 600, margin: "16px auto 0" }}>How a financial advisory firm spending $30K/month on Meta ads halved their cost per acquisition and ran the same creative for 7+ months.</p>
          </div>
        </section>

        {/* METRICS */}
        <section className="section section--dark" aria-label="Key results">
          <div className="container">
            <div className="cs-metrics-bar">
              {[
                { value: "2.28x", label: "CTR Improvement" },
                { value: "50%", label: "CPA Reduction" },
                { value: "3x", label: "Conversion Rate" },
                { value: "7+ mo", label: "No Ad Fatigue" },
              ].map((m) => (
                <div className="cs-metric" key={m.label}>
                  <span className="cs-metric__value" style={{ color: "var(--text-white)" }}>{m.value}</span>
                  <span className="cs-metric__label" style={{ color: "var(--text-white-muted)" }}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="section" aria-labelledby="cs-challenge">
          <div className="container">
            <div className="cs-body">
              <h3 id="cs-challenge">The Challenge</h3>
              <p>This financial advisory firm was spending over $30,000 per month on Meta ads. Their static creative was fatiguing every few weeks, forcing constant refreshes. Cost per acquisition kept climbing, and their team was stuck in an endless cycle of producing new images that performed worse each round.</p>
              <p>They needed a creative format that could sustain performance over months, not weeks &mdash; and actually lower their CPA in the process.</p>

              <h3>The Solution</h3>
              <p>I created 5 presenter-led video ads and 1 video sales letter (VSL) for their funnel. Each video was designed to speak directly to their target audience, address specific objections, and drive action.</p>
              <p>No fancy effects. No overproduced production. Just clear, direct messaging from a real person &mdash; the format that builds trust fastest on social media.</p>

              <div className="cs-quote">
                <p>&ldquo;We had to pause our ad spend because we were acquiring clients faster than we could handle. That&rsquo;s never happened with static creative.&rdquo;</p>
                <cite>&mdash; David M., Managing Partner</cite>
              </div>

              <h3>The Results</h3>
              <p>Within the first month, the video ads were outperforming every static ad the firm had ever run. CTR jumped from 2.91% to 6.64% &mdash; a 2.28x improvement. Cost per acquisition dropped by 50%, effectively doubling the efficiency of their ad spend.</p>
              <p>Most importantly, the ads ran for 7+ months without any sign of fatigue. The same creative that launched in month one was still their top performer over half a year later.</p>
              <p>The client actually had to pause their campaigns &mdash; they were acquiring clients faster than their team could onboard them.</p>

              <h3>Key Takeaway</h3>
              <p>Presenter-led video ads don&rsquo;t just perform better on day one. They maintain performance for months because they build genuine trust with the audience. For this client, that meant spending less, converting more, and finally getting off the creative treadmill.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section--dark" aria-labelledby="cs-cta-heading">
          <div className="container">
            <div className="final-cta">
              <h2 id="cs-cta-heading">Want Results Like These?</h2>
              <p>Book a free strategy call. I&rsquo;ll review your current funnel and show you how video can improve your metrics.</p>
              <div className="guarantee-badge guarantee-badge--inline" style={{ justifyContent: "center", margin: "24px 0" }} aria-label="Performance guarantee">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>I stay until your ads outperform. No time limit.</span>
              </div>
              <div className="final-cta__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Strategy Call</a>
              </div>
            </div>
          </div>
        </section>

        {/* NAV */}
        <section className="section section--white">
          <div className="container">
            <div className="cs-nav">
              <Link href="/results" className="link-arrow" style={{ flexDirection: "row-reverse" }}>All Case Studies</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
