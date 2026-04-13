"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./funnel.css";

const logos = [
  { src: "/images/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/images/logos/meta.svg", alt: "Meta" },
  { src: "/images/logos/unilever.svg", alt: "Unilever" },
  { src: "/images/logos/semrush.svg", alt: "Semrush" },
  { src: "/images/logos/hbs.svg", alt: "Harvard Business School" },
  { src: "/images/logos/meltwater.svg", alt: "Meltwater" },
  { src: "/images/logos/businessloans.svg", alt: "BusinessLoans.com" },
  { src: "/images/logos/insead.svg", alt: "INSEAD" },
  { src: "/images/logos/huron.svg", alt: "Huron Consulting" },
  { src: "/images/logos/garmin.svg", alt: "Garmin" },
];

const testimonials = [
  { quote: "To date, these videos have been our most successful for both sales and longevity. Can\u2019t recommend VideoRep enough.", name: "Jill Vonier", role: "Social Media Advertiser, BusinessLoans.com" },
  { quote: "The customer experience was incredible. From day one, the team went beyond expectations \u2014 delivering more than what was promised.", name: "Harshita Pulla", role: "Strategy & Insights Manager, Unilever" },
  { quote: "The turnaround time was insane \u2014 in the best way. Having the VSL and ad variations ready so quickly meant we could start testing immediately.", name: "Sean Flynn", role: "Founder, EyeFly Digital" },
  { quote: "Professional, very responsive, very quick to fix any little comment. The price is super reasonable. Super recommended.", name: "Idan Cohen", role: "Owner, Electric Heroes" },
  { quote: "The process was collaborative and enjoyable. The presentation was warm, the copy was strong, and the editing was excellent.", name: "Tim Wallace", role: "Founder, Suite Solutions Group" },
  { quote: "Working with Eric has been an absolute pleasure. He is not only a talented professional but also exhibits a commendable work ethic.", name: "Barbara Bartucz", role: "Content Marketing Manager, OptiMonk" },
];

const faqItems = [
  { q: "How much does the 511 Video Funnel cost?", a: "Let\u2019s talk about it on the call. Every project is scoped based on your specific funnel, audience, and goals. I\u2019ll give you a clear number after our free strategy call \u2014 no surprises." },
  { q: "What if I already have a landing page?", a: "Even better. The VSL drops right into your existing page. We review your funnel on the strategy call and I\u2019ll tell you exactly where each video fits." },
  { q: "How long does the process take?", a: "Most 511 funnels are delivered in 5\u20137 business days from the strategy call. Some clients launch in under two weeks from first contact." },
  { q: "What if the videos don\u2019t outperform my static ads?", a: "That\u2019s what the guarantee covers. I stay until your video ads beat your best static ad on CTR. No time limit. No extra charge. We run a true A/B test \u2014 same spend, same audience, same landing page." },
  { q: "Can I just get ads without the full funnel?", a: "Yes. Check out my Video Ads service for individual ad production. But if you\u2019re running a funnel with a landing page, the 511 is usually the better ROI because it covers every touchpoint." },
  { q: "Do you work with companies outside the US?", a: "Absolutely. I\u2019ve worked with brands across the US, Australia, UK, Canada, and Europe. Everything is remote \u2014 strategy calls, script reviews, and delivery." },
];

export default function FunnelClient() {
  const [activeTab, setActiveTab] = useState("ads");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".f-reveal, .f-reveal--left, .f-reveal--right");
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const StarSVG = () => (<svg viewBox="0 0 18 18"><path d="M9 1l2.5 5 5.5.8-4 3.9.9 5.3L9 13.5 4.1 16l.9-5.3-4-3.9L6.5 6z" /></svg>);

  return (
    <>
      {/* NAV */}
      <nav className={`f-nav${scrolled ? " f-nav--scrolled" : ""}`} id="fNav">
        <div className="f-container">
          <div className="f-nav__inner">
            <Link href="/" className="f-nav__logo">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="16" stroke="white" strokeWidth="2.5" /><path d="M12 12 L12 24 L26 18 Z" fill="white" /></svg>
              <span className="f-nav__logo-text">VideoRep</span>
            </Link>
            <div className="f-nav__links">
              <Link href="/results" className="f-nav__link">Results</Link>
              <Link href="/about" className="f-nav__link">About</Link>
              <Link href="/coaching" className="f-nav__link">Coaching</Link>
            </div>
            <div className="f-nav__cta">
              <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn" style={{ padding: "12px 24px", fontSize: 15 }}>Book a Free Call</a>
            </div>
            <button className="f-nav__toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`f-nav__mobile${mobileOpen ? " active" : ""}`}>
        <button className="f-nav__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">&times;</button>
        <Link href="/results" onClick={() => setMobileOpen(false)}>Results</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/coaching" onClick={() => setMobileOpen(false)}>Coaching</Link>
        <Link href="/ads" onClick={() => setMobileOpen(false)}>Video Ads</Link>
        <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank">Book a Free Call</a>
      </div>

      {/* HERO */}
      <section className="f-hero">
        <div className="f-hero__bg-circle"></div>
        <div className="f-container">
          <div className="f-vertical-center">
            <div className="f-hero__badge">
              <div className="f-badge f-badge--hero">
                <span className="f-badge__text" style={{ WebkitTextFillColor: "#ffffffcc", background: "none" }}>Performance Guaranteed</span>
              </div>
            </div>
            <h1 className="f-h1 f-center f-max-900 f-hero__heading">The Complete Video Funnel for B2B Brands Running Paid Ads</h1>
            <p className="f-hero__subtitle">5 video ads. 1 landing page VSL. 1 next-steps video. Delivered in 5&#8211;7 days with a performance guarantee.</p>
          </div>

          <div className="f-hero__split">
            <div className="f-hero__bullets">
              {["Same face in every video \u2014 consistency builds trust", "Fully edited and delivered in 5\u20137 days", "I stay until your ads outperform static creative", "500+ videos created for 250+ B2B brands"].map((text) => (
                <div className="f-hero__bullet" key={text}>
                  <div className="f-hero__bullet-icon">
                    <svg viewBox="0 0 25 25" fill="none"><circle cx="12.5" cy="12.5" r="11" stroke="#059669" strokeWidth="2" /><path d="M7 12.5 L11 16.5 L18 9" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className="f-hero__bullet-text">{text}</span>
                </div>
              ))}
            </div>
            <div className="f-hero__video">
              <div className="f-hero__video-wrap">
                <iframe src="https://player.vimeo.com/video/991681290?title=0&byline=0&portrait=0&color=1e71e7" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div className="f-hero__cta">
            <div className="f-btn-wrapper">
              <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn">
                Get Your Free Funnel Review
                <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="f-logos">
        <p className="f-logos__label">Trusted by teams at</p>
        <div className="f-logos__track-wrapper">
          <div className="f-logos__fade f-logos__fade--left"></div>
          <div className="f-logos__fade f-logos__fade--right"></div>
          <div className="f-logos__track">
            {[...logos, ...logos].map((l, i) => (
              <img key={`${l.alt}-${i}`} src={l.src} alt={l.alt} className="f-logos__logo" />
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN-LED FUNNEL */}
      <section className="f-funnel-section f-reveal">
        <div className="f-container">
          <div className="f-funnel-visual">
            <div className="f-funnel-visual__title">The Human-Led Funnel</div>
            <div className="f-funnel-visual__subtitle">Optimize With <span>Trust</span>.</div>
            <div className="f-funnel-graphic">
              <div className="f-funnel-layer f-funnel-layer--1">Video Ads &#8212; Stop the Scroll</div>
              <div className="f-funnel-layer f-funnel-layer--2">Landing Page VSL &#8212; Build Trust</div>
              <div className="f-funnel-layer f-funnel-layer--3">Next-Steps Video &#8212; Show Up</div>
              <div className="f-funnel-layer f-funnel-layer--4">Close the Deal</div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA OF TRUST */}
      <section className="f-data-section f-reveal">
        <div className="f-container">
          <div className="f-data-visual">
            <div className="f-data-visual__title">The Data of Trust</div>
            <div className="f-data-visual__subtitle">Proven impact on the funnel.</div>
            <div className="f-data-cards">
              <div className="f-data-card f-reveal">
                <div className="f-data-card__number">83%</div>
                <div className="f-data-card__label">Increased Sales</div>
                <div className="f-data-card__source">(Video Marketers)</div>
              </div>
              <div className="f-data-arrow f-reveal">
                <svg viewBox="0 0 32 32"><path d="M8 16h16M20 12l4 4-4 4" /></svg>
                *Proven Link
              </div>
              <div className="f-data-card f-reveal">
                <div className="f-data-card__number">89%</div>
                <div className="f-data-card__label">Impacted Trust</div>
                <div className="f-data-card__source">(Consumers)</div>
              </div>
            </div>
            <div className="f-data-flow f-reveal">
              <span className="f-data-flow__step f-data-flow__step--highlight">Trust</span>
              <span className="f-data-flow__arrow">&#8594;</span>
              <span className="f-data-flow__step">Conversions</span>
              <span className="f-data-flow__arrow">&#8594;</span>
              <span className="f-data-flow__step f-data-flow__step--highlight">Sales</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DIVIDER */}
      <section className="f-cta-divider">
        <div className="f-container">
          <div className="f-cta-divider__text">Ready to put a human face on your funnel?</div>
          <div className="f-btn-wrapper" style={{ justifyContent: "center", display: "flex" }}>
            <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn f-btn--white">
              Get Your Free Funnel Review
              <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="f-problems f-section--neutral">
        <div className="f-container">
          <div className="f-problems__grid">
            <div className="f-problems__left f-reveal">
              <div className="f-badge"><span className="f-badge__text">Sound familiar?</span></div>
              <h2 className="f-h2">Your Static Ads Are Burning Budget</h2>
              <p className="f-p">Most B2B brands waste thousands on ads that blend into the feed. Your landing page loads, visitors skim, and they leave. Your pipeline is full of no-shows. You know video could fix this &#8212; but the process has always been too slow, too expensive, or too generic.</p>
              <div className="f-btn-wrapper" style={{ marginTop: 10 }}>
                <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn">Let&#39;s Fix That <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
            <div className="f-problems__cards">
              {[
                { title: "Ad fatigue is killing your campaigns", text: "Your static ads stop working after a few weeks. CTR drops, CPAs climb, and you\u2019re stuck refreshing creative that never really worked in the first place." },
                { title: "Your landing page isn\u2019t converting", text: "Visitors land, skim a wall of text, and bounce. Without video, they never feel the trust they need to take the next step." },
                { title: "Leads book but don\u2019t show up", text: "Your calendar fills up, but half the calls are no-shows. Without a personal touch in the follow-up, you\u2019re just another booking confirmation." },
                { title: "Agencies are slow and overpriced", text: "Traditional video production takes 6\u20138 weeks and costs $10K+ per video. By the time you get your assets, the campaign window has closed." },
                { title: "Generic video doesn\u2019t perform", text: "Marketplace presenters read scripts without conviction. Your audience can tell immediately \u2014 and they scroll right past." },
              ].map((p) => (
                <div className="f-problem-card f-reveal" key={p.title}><div className="f-problem-card__title">{p.title}</div><p className="f-problem-card__text">{p.text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="f-benefits f-section">
        <div className="f-container">
          <div className="f-benefits__layout">
            <div className="f-benefits__left f-reveal">
              <div className="f-badge"><span className="f-badge__text">What&rsquo;s included</span></div>
              <h2 className="f-h2">Everything in the 511 Video Funnel</h2>
              <p className="f-p">Seven videos. One dedicated presenter. A full funnel built around your brand, your audience, and your offer &#8212; delivered in days, not months.</p>
              <div className="f-btn-wrapper" style={{ marginTop: 10 }}>
                <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn">Build My 511 Funnel <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
            <div className="f-benefits__grid f-stagger">
              {[
                { title: "5 Video Ads", text: "Short presenter-led ads (15\u201360s) that stop the scroll, build instant trust, and get clicks on Meta and paid social." },
                { title: "1 Landing Page VSL", text: "A 5\u20137 minute video that builds trust, handles objections, and qualifies visitors while they watch." },
                { title: "1 Next-Steps Video", text: "A short follow-up video that sets expectations, builds excitement, and gets booked calls to actually show up." },
                { title: "Performance Guarantee", text: "I stay until your video ads beat your best static ad on CTR. No time limit. No extra charge." },
                { title: "All Formats Delivered", text: "Landscape (16:9), vertical (9:16), captions baked in. Ready for Meta, LinkedIn, YouTube." },
                { title: "5\u20137 Day Turnaround", text: "From strategy call to fully edited videos. Most clients launch in under two weeks." },
              ].map((b) => (
                <div className="f-benefit-item f-reveal" key={b.title}><div className="f-benefit-item__title">{b.title}</div><p className="f-benefit-item__text">{b.text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE VIDEOS */}
      <section className="f-cta-divider">
        <div className="f-container">
          <div className="f-cta-divider__text">See what the 511 Funnel looks like in action.</div>
          <div className="f-cta-divider__sub">Real sample videos from real client projects &#8212; organized by type.</div>
        </div>
      </section>

      <section className="f-samples f-section f-section--neutral">
        <div className="f-container">
          <div className="f-vertical-center f-reveal">
            <div className="f-badge"><span className="f-badge__text">See the Work</span></div>
            <h2 className="f-h2 f-center">Sample Videos From the 511 Funnel</h2>
            <p className="f-p f-center f-max-700 f-mx-auto">Each 511 Funnel includes three types of video. Browse samples from each category.</p>
          </div>

          <div className="f-tabs__nav">
            {[{ key: "ads", label: "Video Ads" }, { key: "vsls", label: "Landing Page VSLs" }, { key: "nextsteps", label: "Next-Steps Videos" }].map((t) => (
              <button key={t.key} className={`f-tabs__btn${activeTab === t.key ? " active" : ""}`} onClick={() => setActiveTab(t.key)}>{t.label}</button>
            ))}
          </div>

          {activeTab === "ads" && (
            <div className="f-tabs__panel active" id="tab-ads">
              <div className="f-tabs__stat f-reveal"><div className="f-tabs__stat-number">2.28x</div><div className="f-tabs__stat-label">Higher CTR vs. static ads</div></div>
              <div className="f-samples__grid">
                {[{ id: "986109897", title: "Stop-the-Scroll Ad", text: "Short, punchy, presenter-led. Built to earn clicks in the first 3 seconds." }, { id: "1166223348", title: "Trust-Building Ad", text: "A face your audience can trust. Builds credibility before the click." }, { id: "896798849", title: "Problem-Agitation Ad", text: "Calls out the pain point directly. Gets the right audience to lean in." }].map((v) => (
                  <div className="f-sample-card f-reveal" key={v.id}>
                    <div className="f-sample-card__video"><iframe src={`https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0&color=1e71e7`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe></div>
                    <div className="f-sample-card__body"><div className="f-sample-card__label">Video Ad</div><div className="f-sample-card__title">{v.title}</div><p className="f-sample-card__text">{v.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "vsls" && (
            <div className="f-tabs__panel active" id="tab-vsls">
              <div className="f-tabs__stat f-reveal"><div className="f-tabs__stat-number">80%</div><div className="f-tabs__stat-label">Higher conversion with video on landing pages</div></div>
              <div className="f-samples__grid">
                {[{ id: "986121043", title: "Conversion Video", text: "5\u20137 minutes that build trust, handle objections, and qualify visitors." }, { id: "894194604", title: "Authority Builder", text: "Positions the brand as the obvious choice before visitors even scroll." }, { id: "986111510", title: "Objection Handler", text: "Addresses doubts head-on so visitors convert with confidence." }].map((v) => (
                  <div className="f-sample-card f-reveal" key={v.id}>
                    <div className="f-sample-card__video"><iframe src={`https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0&color=1e71e7`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe></div>
                    <div className="f-sample-card__body"><div className="f-sample-card__label">Landing Page VSL</div><div className="f-sample-card__title">{v.title}</div><p className="f-sample-card__text">{v.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "nextsteps" && (
            <div className="f-tabs__panel active" id="tab-nextsteps">
              <div className="f-tabs__stat f-reveal"><div className="f-tabs__stat-number">50%+</div><div className="f-tabs__stat-label">Higher show-up rates with video follow-up</div></div>
              <div className="f-samples__grid">
                {[{ id: "1180666007", title: "Show-Up Booster", text: "A personal follow-up that gets booked calls to actually happen." }, { id: "894181254", title: "Expectation Setter", text: "Sets the stage for the call so leads arrive prepared and engaged." }, { id: "1180667153", title: "Excitement Builder", text: "Builds anticipation so leads are excited when they show up." }].map((v) => (
                  <div className="f-sample-card f-reveal" key={v.id}>
                    <div className="f-sample-card__video"><iframe src={`https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0&color=1e71e7`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe></div>
                    <div className="f-sample-card__body"><div className="f-sample-card__label">Next-Steps Video</div><div className="f-sample-card__title">{v.title}</div><p className="f-sample-card__text">{v.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="f-testimonials f-section">
        <div className="f-container">
          <div className="f-vertical-center">
            <h2 className="f-h2 f-white f-center">Real Results. Real Feedback.</h2>
            <p className="f-p f-center" style={{ color: "#ffffffb3", maxWidth: 600 }}>Don&rsquo;t take my word for it. Here&rsquo;s what the brands I&rsquo;ve worked with have to say about the process and the results.</p>
          </div>
          <div className="f-testimonials__grid f-reveal">
            <div className="f-testimonial-video"><iframe src="https://player.vimeo.com/video/1172772497?title=0&byline=0&portrait=0&color=1e71e7" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe></div>
            <div className="f-testimonial-video"><iframe src="https://player.vimeo.com/video/1172031150?title=0&byline=0&portrait=0&color=1e71e7" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy"></iframe></div>
          </div>
          <div className="f-testimonials__written-grid f-stagger" style={{ marginTop: 40 }}>
            {testimonials.map((t) => (
              <div className="f-quote-card f-reveal" key={t.name}>
                <div className="f-quote-card__stars"><StarSVG /><StarSVG /><StarSVG /><StarSVG /><StarSVG /></div>
                <p className="f-quote-card__text">&ldquo;{t.quote}&rdquo;</p>
                <div className="f-quote-card__author">{t.name}</div>
                <div className="f-quote-card__role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="f-guarantee f-section f-reveal">
        <div className="f-container">
          <div className="f-guarantee__card">
            <div className="f-guarantee__shield">
              <svg viewBox="0 0 80 80" fill="none"><path d="M40 8L12 20v20c0 16.5 11.5 31.5 28 36 16.5-4.5 28-19.5 28-36V20L40 8z" fill="#059669" opacity="0.1" stroke="#059669" strokeWidth="2.5" /><path d="M28 42l8 8 16-16" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="f-guarantee__title">Our Promise to You</div>
            <p className="f-guarantee__text">When you work with me on video ads, I stay until they outperform your best static ad on click-through rate. No time limit. No extra charge. I&rsquo;d rather prove it with your results than ask you to take my word for it.</p>
            <div className="f-guarantee__terms">
              {["No time limit", "No extra charge", "True A/B test"].map((t) => (
                <div className="f-guarantee__term" key={t}><svg viewBox="0 0 22 22"><path d="M6 11l4 4 6-6" /><circle cx="11" cy="11" r="9" /></svg>{t}</div>
              ))}
            </div>
            <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn" style={{ background: "#059669" }}>Book Your Guaranteed Funnel Review <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="f-faq f-section f-section--neutral">
        <div className="f-container">
          <div className="f-vertical-center f-reveal">
            <div className="f-badge"><span className="f-badge__text">FAQ</span></div>
            <h2 className="f-h2 f-center">Common Questions</h2>
          </div>
          <div className="f-faq__list">
            {faqItems.map((item, i) => (
              <div className={`f-faq-item${openFaq === i ? " active" : ""}`} key={i}>
                <button className="f-faq-item__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <svg className="f-faq-item__icon" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                {openFaq === i && <div className="f-faq-item__answer"><p>{item.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="f-final-cta f-section">
        <div className="f-container">
          <div className="f-vertical-center f-reveal">
            <h2 className="f-h2 f-white f-center">Ready to Build Your 511 Video Funnel?</h2>
            <p className="f-p f-center" style={{ color: "#ffffffb3", maxWidth: 600 }}>Book a free strategy call. I&rsquo;ll review your current funnel and give you a clear plan for how the 511 system improves your metrics.</p>
            <div className="f-btn-wrapper">
              <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn">
                Book Your Free Strategy Call
                <svg viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="f-footer">
        <div className="f-container">
          <div className="f-footer__top">
            <div className="f-footer__brand">
              <div className="f-footer__logo"><svg viewBox="0 0 32 32" fill="none" width="32" height="32"><circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" /><path d="M11 10 L11 22 L24 16 Z" fill="white" /></svg><span className="f-footer__logo-text">VideoRep</span></div>
              <p className="f-footer__desc">Presenter-led video ads, VSLs, and video funnels for B2B brands running paid campaigns. Founded &amp; presented by Eric Presnall.</p>
              <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-btn" style={{ padding: "12px 20px", fontSize: 14 }}>Book a Free Call</a>
            </div>
            <div>
              <div className="f-footer__column-title">Services</div>
              <div className="f-footer__links">
                <Link href="/511-funnel" className="f-footer__link">511 Video Funnel</Link>
                <Link href="/ads" className="f-footer__link">Video Ads</Link>
                <Link href="/coaching" className="f-footer__link">Video Coaching</Link>
              </div>
            </div>
            <div>
              <div className="f-footer__column-title">Company</div>
              <div className="f-footer__links">
                <Link href="/about" className="f-footer__link">About Eric</Link>
                <Link href="/results" className="f-footer__link">Results</Link>
              </div>
            </div>
            <div>
              <div className="f-footer__column-title">Get Started</div>
              <div className="f-footer__links">
                <a href="https://cal.com/videorep/videorep-discovery-call" target="_blank" className="f-footer__link">Book a Free Call</a>
                <a href="mailto:eric@videorep.co" className="f-footer__link">eric@videorep.co</a>
              </div>
            </div>
          </div>
          <div className="f-footer__bottom">
            <span className="f-footer__copy">&copy; {new Date().getFullYear()} VideoRep. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
