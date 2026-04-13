import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import QualificationModal from "../QualificationModal";

export const metadata: Metadata = {
  title: "Video Ads — Presenter-Led Ads That Outperform Static Creative",
  description: "Presenter-led video ads that outperform static creative. Hook variations, platform-optimized for Meta, LinkedIn, and YouTube. Ready to launch.",
};

const CheckIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);

const logos = [
  { src: "/images/logos/microsoft.svg", alt: "Microsoft", h: 28 },
  { src: "/images/logos/meta.svg", alt: "Meta", h: 28 },
  { src: "/images/logos/semrush.svg", alt: "Semrush", h: 28 },
  { src: "/images/logos/hbs.svg", alt: "Harvard Business School", h: 26 },
  { src: "/images/logos/meltwater.svg", alt: "Meltwater", h: 28 },
  { src: "/images/logos/businessloans.svg", alt: "BusinessLoans.com", h: 26 },
  { src: "/images/logos/insead.svg", alt: "INSEAD", h: 28 },
  { src: "/images/logos/huron.svg", alt: "Huron Consulting", h: 26 },
];

const testimonials = [
  { initials: "JV", quote: "To date, these videos have been our most successful for both sales and longevity. Can\u2019t recommend VideoRep enough.", name: "Jill Vonier", role: "Social Media Advertiser, BusinessLoans.com" },
  { initials: "HP", quote: "The customer experience was incredible. From day one, the team went beyond expectations \u2014 delivering more than what was promised.", name: "Harshita Pulla", role: "Strategy & Insights Manager, Unilever" },
  { initials: "IC", quote: "Professional, very responsive, very quick to fix any little comment. The price is super reasonable. Super recommended.", name: "Idan Cohen", role: "Owner, Electric Heroes" },
  { initials: "SF", quote: "The turnaround time was insane \u2014 in the best way. Having both the VSL and ad variations ready so quickly meant we could start testing immediately.", name: "Sean Flynn", role: "Founder, EyeFly Digital" },
  { initials: "BB", quote: "Working with Eric has been an absolute pleasure. He is not only a talented professional but also exhibits a commendable work ethic.", name: "Barbara Bartucz", role: "Content Marketing Manager, OptiMonk" },
];

export default function AdsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="section hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__content">
              <div className="hero__text">
                <div className="guarantee-badge guarantee-badge--inline" aria-label="Performance guarantee">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>500+ videos delivered. Nearly 100% five-star.</span>
                </div>
                <h1 id="hero-heading">Presenter-Led Video Ads That Outperform Static&nbsp;Creative</h1>
                <p className="hero__subheadline">For B2B brands already running paid campaigns who want to test video ads that actually stop the scroll. I write, film, and edit your ads &mdash; you launch and see results.</p>
                <div className="hero__ctas">
                  <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Get Your Free Ad Review</a>
                  <a href="#sample-ads" className="btn btn--secondary btn--large">See Sample Ads</a>
                </div>
              </div>
              <div className="hero__video">
                <div className="video-container">
                  <iframe src="https://player.vimeo.com/video/991681290?background=1&autoplay=1&muted=1&loop=1" allow="autoplay; fullscreen; picture-in-picture" title="VideoRep sample video ad" loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="social-proof-bar" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
              <p className="social-proof-bar__label">Trusted by 350+ brands including</p>
              <div className="social-proof-bar__logos">{logos.map((l) => (<img key={l.alt} src={l.src} alt={l.alt} className="brand-logo" height={l.h} loading="lazy" />))}</div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="section section--alt" aria-labelledby="problem-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">The Problem</span><h2 id="problem-heading">Static Ads Are Losing&nbsp;Effectiveness</h2></div>
            <div className="section__body section__body--narrow">
              <p>B2B buyers scroll past image ads without a second thought. You refresh your static creative every few weeks to fight fatigue. Click-through rates sit at 2&ndash;3%. Cost per acquisition keeps climbing.</p>
              <p>Meanwhile, video ads consistently deliver 2&ndash;3x the CTR of static images on Meta. A real person on screen builds trust in seconds &mdash; something no stock photo or carousel can do. Every day without video ads in your campaign is leaving performance on the table.</p>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section section--white" aria-labelledby="deliverables-heading">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">What You Get</span>
              <h2 id="deliverables-heading">Individual Presenter-Led Video Ads &mdash; Ready to Launch</h2>
              <p className="text-secondary">Not a full funnel. Just the ads. Fully written, filmed, and edited by me &mdash; delivered ready to upload and run.</p>
            </div>
            <div className="deliverables">
              <div className="deliverables-grid">
                {["Presenter-led video ads (15\u201360 seconds)","Multiple hook variations for A/B testing","Platform-optimized for Meta, LinkedIn, and YouTube","Captions, branding, and CTA overlays included","Landscape (16:9) and vertical (9:16) formats","Fast turnaround \u2014 most ads delivered in 3\u20135 days"].map((d)=>(
                  <div className="deliverable-item" key={d}><CheckIcon /><span>{d}</span></div>
                ))}
              </div>
            </div>
            <div className="section__cta"><a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary">Get Your Free Ad Review</a></div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--alt" aria-labelledby="plan-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">How It Works</span><h2 id="plan-heading">Three Steps to Better-Performing Ads</h2></div>
            <div className="steps-grid">
              <div className="step-card"><div className="step-card__number">1</div><h3>We Talk About Your Campaign Goals</h3><p>We hop on a call and look at your current ads, audience, and objectives together. I&rsquo;ll tell you exactly how video fits your campaign &mdash; and which ad formats will make the biggest difference.</p></div>
              <div className="step-card"><div className="step-card__number">2</div><h3>I Create Your Video Ads</h3><p>I write the scripts, film the presenter segments, and edit everything &mdash; captions, branding, CTA overlays, multiple hook variations. Fully produced and delivered in 3&ndash;5 days.</p></div>
              <div className="step-card"><div className="step-card__number">3</div><h3>You Launch and See Results</h3><p>You upload your new video ads, run them alongside your existing creative, and watch the performance data come in. Video ads typically see 2&ndash;3x the CTR of static images.</p></div>
            </div>
            <div className="section__cta"><a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary">Start With a Free Call</a></div>
          </div>
        </section>

        {/* SAMPLE ADS */}
        <section className="section section--white" id="sample-ads" aria-labelledby="sample-heading">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">See It In Action</span>
              <h2 id="sample-heading">Sample Video Ads From Real Campaigns</h2>
              <p className="text-secondary">These are real ads I created for real B2B brands. Short, presenter-led, and built to outperform static creative.</p>
            </div>
            <div className="funnel-showcase__grid">
              {[
                { id: "991681290", title: "Sample video ad 1" },
                { id: "894181254", title: "Sample video ad 2" },
                { id: "1180667153", title: "Sample video ad 3" },
              ].map((v) => (
                <div className="funnel-showcase__item" key={v.id}>
                  <div className="funnel-showcase__label"><span className="funnel-showcase__type">Video Ad</span><span className="funnel-showcase__detail">Meta / Paid Social</span></div>
                  <div className="video-container"><iframe src={`https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0&color=1e71e7`} allow="autoplay; fullscreen; picture-in-picture" title={v.title} loading="lazy"></iframe></div>
                </div>
              ))}
            </div>
            <div className="section__cta"><Link href="/results" className="link-arrow">See All Results <span className="link-arrow__arrow">&rarr;</span></Link></div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section section--alt" aria-labelledby="fit-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Is This You?</span><h2 id="fit-heading">Who Video Ads Are For</h2></div>
            <div className="section__body section__body--narrow">
              <p>This service is built for B2B teams who are already running paid campaigns and want to test video creative alongside their existing ads. You don&rsquo;t need the full funnel &mdash; just the ads.</p>
              <ul className="checklist">
                <li>You&rsquo;re already running paid campaigns on Meta, LinkedIn, or YouTube</li>
                <li>You have your own landing pages and funnels in place</li>
                <li>You want to test video ads without committing to a full video system</li>
                <li>You need hook variations so your media buyer can test and optimize</li>
                <li>You&rsquo;re tired of static ads fatiguing every few weeks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CROSS-SELL */}
        <section className="section section--white" aria-labelledby="funnel-upsell-heading">
          <div className="container">
            <div className="service-card service-card--featured" style={{ maxWidth: 640, margin: "0 auto" }}>
              <span className="service-card__badge">Full Video System</span>
              <div className="service-card__icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="8" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" /><polygon points="16,14 16,22 25,18" fill="currentColor" /><line x1="12" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg></div>
              <h3 id="funnel-upsell-heading">Want the Full Video Funnel?</h3>
              <p>If you need more than just ads &mdash; a landing page VSL, a next-steps video, and a complete video system for your funnel &mdash; the 511 Video Funnel covers every stage. 5 ads, 1 VSL, 1 next-steps video. Delivered in 5&ndash;7 days with a performance guarantee.</p>
              <ul className="service-card__features"><li>7 fully produced videos</li><li>Covers your entire funnel</li><li>I stay until they outperform</li></ul>
              <Link href="/511-funnel" className="btn btn--primary btn--block">Learn About the 511 Funnel</Link>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="section section--alt" aria-labelledby="results-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Proof</span><h2 id="results-heading">Results That Speak for Themselves</h2></div>
            <div className="case-study-grid">
              <div className="card case-study-card"><div className="case-study-card__accent"></div><span className="case-study-card__label" style={{ padding: "0 24px" }}>Boutique Financial Advisory (NDA)</span><div className="case-study-card__metric" style={{ padding: "0 24px" }}><span className="case-study-card__metric-number">2.28x</span><span className="case-study-card__metric-label">CTR Improvement</span></div><p>Running $30K+/month on Meta campaigns. Static ads were fatiguing. Created 5 video ads and 1 VSL &mdash; delivered in 5-7 days.</p><ul className="case-study-card__results"><li>CPA down 50%</li><li>Conversion rate up 3x</li><li>Same ad ran 7+ months</li></ul></div>
              <div className="card case-study-card"><div className="case-study-card__accent"></div><span className="case-study-card__brand" style={{ padding: "0 24px" }}>BusinessLoans.com</span><div className="case-study-card__metric" style={{ padding: "0 24px" }}><span className="case-study-card__metric-number">6 mo</span><span className="case-study-card__metric-label">Positive ROAS</span></div><p>Seasonal dip in lead generation during slow season. Created video ads to test during their slowest quarter.</p><ul className="case-study-card__results"><li>Best performing ad ever</li><li>Zero revisions needed</li><li>Slow season became busiest on record</li></ul></div>
              <div className="card case-study-card"><div className="case-study-card__accent"></div><span className="case-study-card__brand" style={{ padding: "0 24px" }}>Unilever</span><div className="case-study-card__metric" style={{ padding: "0 24px" }}><span className="case-study-card__metric-number">14</span><span className="case-study-card__metric-label">Videos in 2 Weeks</span></div><p>Quick turnaround needed on multiple video ads for a multi-market campaign. Traditional agencies quoted 6-8 weeks.</p><ul className="case-study-card__results"><li>$25,000 cost savings vs. agency</li><li>Delivered on schedule</li><li>Enterprise-scale proof of concept</li></ul></div>
            </div>
            <div className="section__cta"><Link href="/results" className="link-arrow">See All Results <span className="link-arrow__arrow">&rarr;</span></Link></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section--white" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">What Clients Say</span><h2 id="testimonials-heading">Real Feedback From Real Clients</h2></div>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.initials}>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
                  <blockquote className="testimonial-card__quote"><p>&ldquo;{t.quote}&rdquo;</p></blockquote>
                  <div className="testimonial-card__attribution"><div className="testimonial-card__avatar" aria-hidden="true">{t.initials}</div><div><strong>{t.name}</strong><span>{t.role}</span></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark" aria-labelledby="cta-heading">
          <div className="container">
            <div className="final-cta">
              <h2 id="cta-heading">Ready to Outperform Your Static Ads?</h2>
              <p>You&rsquo;re already running campaigns. You know video performs better. Let&rsquo;s talk about your ads and figure out if working together makes sense.</p>
              <p>No pressure. No pitch. Just a practical conversation about your campaigns and how video can improve them.</p>
              <div className="final-cta__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Ad Review</a>
                <Link href="/results" className="btn btn--secondary btn--large">Or see sample results first</Link>
              </div>
              <div className="final-cta__trust"><span>100% No-Pressure Conversation</span><span>Free Ad Review Included</span><span>500+ Videos for 250+ Brands</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <QualificationModal />
    </>
  );
}
