import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Turn Ranking Blogs Into Human-Led Videos",
  description: "VideoRep — Eric Presnall is the B2B video presenter trusted by 250+ brands. Presenter-led video ads, VSLs, and video funnels that outperform static creative.",
};

const CheckSVG = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const logos = [
  { src: "/images/logos/microsoft.svg", alt: "Microsoft", h: 28 },
  { src: "/images/logos/meta.svg", alt: "Meta", h: 28 },
  { src: "/images/logos/unilever.svg", alt: "Unilever", h: 28 },
  { src: "/images/logos/semrush.svg", alt: "Semrush", h: 28 },
  { src: "/images/logos/hbs.svg", alt: "Harvard Business School", h: 26 },
  { src: "/images/logos/meltwater.svg", alt: "Meltwater", h: 28 },
  { src: "/images/logos/businessloans.svg", alt: "BusinessLoans.com", h: 26 },
  { src: "/images/logos/insead.svg", alt: "INSEAD", h: 28 },
  { src: "/images/logos/huron.svg", alt: "Huron Consulting", h: 26 },
  { src: "/images/logos/garmin.svg", alt: "Garmin", h: 28 },
];

const blogVideosFAQ = [
  { question: "What kind of video do you specialize in?", answer: <p>I specialize in presenter-led video for B2B brands &mdash; video ads, landing page VSLs, explainer videos, and video funnels. I&rsquo;m the face on camera, which means every video has a consistent, professional presence that builds trust with your audience.</p> },
  { question: "How do I know which service is right for me?", answer: <p>Book a free strategy call and I&rsquo;ll help you figure it out. If you&rsquo;re running paid ads and want a complete video system, the <Link href="/511-funnel">511 Video Funnel</Link> is usually the best fit. If you just need standalone ads, check out the <Link href="/ads">Video Ads</Link> packages. And if you want to learn to create your own videos, <Link href="/coaching">coaching</Link> might be your move.</p> },
  { question: "Do you have experience in my industry?", answer: <p>I&rsquo;ve worked with 250+ B2B brands across SaaS, financial services, logistics, healthcare, education, and more. If you&rsquo;re running paid social campaigns, chances are I&rsquo;ve worked with a company like yours. Book a call and I&rsquo;ll tell you straight up if it&rsquo;s a good fit.</p> },
  { question: "Can you work with our in-house team?", answer: <p>Yes. Some clients use me alongside their creative team, others use me as their go-to video source. Either way, we align on brand guidelines during the first call so everything fits your look and feel.</p> },
  { question: "What if I just need one video?", answer: <p>We can talk about that. Book a free call and we&rsquo;ll figure out the best approach for your specific needs. I&rsquo;ve done everything from single explainer videos to full 7-video funnels &mdash; there&rsquo;s always a way to make it work.</p> },
];

const testimonials = [
  { initials: "JV", quote: "To date, these videos have been our most successful for both sales and longevity. Can\u2019t recommend VideoRep enough.", name: "Jill Vonier", role: "Social Media Advertiser, BusinessLoans.com" },
  { initials: "HP", quote: "The customer experience was incredible. From day one, the team went beyond expectations \u2014 delivering more than what was promised.", name: "Harshita Pulla", role: "Strategy & Insights Manager, Unilever" },
  { initials: "IC", quote: "Professional, very responsive, very quick to fix any little comment. The price is super reasonable. Super recommended.", name: "Idan Cohen", role: "Owner, Electric Heroes" },
  { initials: "SF", quote: "The turnaround time was insane \u2014 in the best way. Having both the VSL and ad variations ready so quickly meant we could start testing immediately.", name: "Sean Flynn", role: "Founder, EyeFly Digital" },
  { initials: "BB", quote: "Working with Eric has been an absolute pleasure. He is not only a talented professional but also exhibits a commendable work ethic.", name: "Barbara Bartucz", role: "Content Marketing Manager, OptiMonk" },
];

export default function BlogVideosPage() {
  return (
    <>
      <Nav variant="mega" />
      <main id="main-content">
        {/* HERO */}
        <section className="section hero--split" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-split__grid">
              <div className="hero-split__text">
                <div className="guarantee-badge guarantee-badge--inline" aria-label="Performance guarantee"><CheckSVG /><span>Performance Guaranteed</span></div>
                <h1 id="hero-heading">The B2B Video Presenter Brands&nbsp;Trust</h1>
                <p className="hero-split__sub">I&rsquo;m Eric Presnall. I create presenter-led video ads, VSLs, and video funnels for B2B brands running paid campaigns. Same face. Same energy. Same results&nbsp;&mdash;&nbsp;every&nbsp;time.</p>
                <div className="hero__ctas">
                  <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large btn--shimmer">Book a Free Strategy Call</a>
                  <Link href="/results" className="btn btn--secondary btn--large">See My Work</Link>
                </div>
                <div className="hero-split__trust"><span>500+ videos</span><span className="hero-split__trust-dot"></span><span>250+ brands</span><span className="hero-split__trust-dot"></span><span>Top 1% Upwork</span></div>
              </div>
              <div className="hero-split__image">
                <Image src="/images/Eric Presnall In Studio.png" alt="Eric Presnall in his video production studio" width={560} height={640} priority style={{ borderRadius: "var(--r-xl)", objectFit: "cover", maxHeight: 640 }} />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section className="section logo-bar" aria-label="Trusted by leading brands">
          <div className="container">
            <p className="logo-bar__label">TRUSTED BY TEAMS AT</p>
            <div className="logo-bar__logos">{logos.map((l) => (<img key={l.alt} src={l.src} alt={l.alt} className="logo-bar__img" height={l.h} loading="lazy" />))}</div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section" aria-labelledby="services-heading">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">Services</span>
              <h2 id="services-heading">Three Ways I Can Help You Win With Video</h2>
              <p className="text-secondary">Whether you need done-for-you video production, a complete ad funnel, or coaching to create your own &mdash; I&rsquo;ve got you covered.</p>
            </div>
            <div className="services-v2-grid">
              <div className="service-v2-card service-v2-card--blue">
                <span className="service-v2-card__badge">Most Popular</span>
                <div className="service-v2-card__icon service-v2-card__icon--blue"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="3" y="6" width="26" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" /><polygon points="13,10 13,18 20,14" fill="currentColor" /><line x1="10" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>The 511 Video Funnel</h3>
                <p>5 video ads, 1 landing page VSL, and 1 next-steps video &mdash; built for your B2B funnel and delivered in 5-7 days. Performance guaranteed.</p>
                <ul className="service-v2-card__features"><li><CheckSVG /> 7 fully produced videos</li><li><CheckSVG /> Delivered in 5-7 days</li><li><CheckSVG /> I stay until they outperform</li></ul>
                <Link href="/511-funnel" className="btn btn--primary btn--block">Learn About the 511 Funnel</Link>
              </div>
              <div className="service-v2-card service-v2-card--teal">
                <div className="service-v2-card__icon service-v2-card__icon--teal"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" /><polygon points="13,10 13,22 23,16" fill="currentColor" /></svg></div>
                <h3>Video Ads</h3>
                <p>Need individual presenter-led video ads without the full funnel? Custom packages for teams already running paid social campaigns.</p>
                <ul className="service-v2-card__features"><li><CheckSVG /> Individual ad production</li><li><CheckSVG /> Multiple hook variations</li><li><CheckSVG /> Ready for Meta, LinkedIn, YouTube</li></ul>
                <Link href="/ads" className="btn btn--secondary btn--block">See Ad Packages</Link>
              </div>
              <div className="service-v2-card service-v2-card--green">
                <div className="service-v2-card__icon service-v2-card__icon--green"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg></div>
                <h3>Founder Video Coaching</h3>
                <p>Want to create your own videos with confidence? I coach B2B founders on presenting on camera, scripting, and building a video content system.</p>
                <ul className="service-v2-card__features"><li><CheckSVG /> On-camera confidence training</li><li><CheckSVG /> Script development</li><li><CheckSVG /> Publishing strategy</li></ul>
                <Link href="/coaching" className="btn btn--secondary btn--block">Learn About Coaching</Link>
              </div>
            </div>
          </div>
        </section>

        {/* MEET ERIC */}
        <section className="section meet-eric" aria-labelledby="guide-heading">
          <div className="container">
            <div className="meet-eric__grid">
              <div className="meet-eric__photo"><Image src="/images/Eric Presnall In Studio.png" alt="Eric Presnall in his video production studio" width={400} height={500} loading="lazy" style={{ borderRadius: "var(--r-lg)", objectFit: "cover" }} /></div>
              <div className="meet-eric__content">
                <span className="eyebrow eyebrow--light">Meet Eric</span>
                <h2 id="guide-heading" className="text-white">I&rsquo;ve Created 500+ B2B Videos.<br />I Know What Converts.</h2>
                <p className="text-white-muted">I&rsquo;ve spent 6 years as a dedicated video presenter for B2B brands &mdash; 500+ videos for 250+ companies, with nearly all five-star reviews.</p>
                <p className="text-white-muted">Brands like Unilever, BusinessLoans.com, and Simplify LLC trust me to be the face of their campaigns. One client cut their CPA by 50% and ran the same ad for 7 months. Another got their best-performing ad ever.</p>
                <p className="text-white-muted">I&rsquo;m not a faceless agency. I&rsquo;m not a marketplace. I&rsquo;m your dedicated video partner &mdash; same face in every video, same energy, same commitment to results.</p>
                <Link href="/about" className="link-arrow link-arrow--light">More About Me <span className="link-arrow__arrow">&rarr;</span></Link>
              </div>
            </div>
            <div className="meet-eric__stats">
              <div className="meet-eric__stat"><span className="meet-eric__stat-number">500+</span><span className="meet-eric__stat-label">Videos Created</span></div>
              <div className="meet-eric__stat"><span className="meet-eric__stat-number">250+</span><span className="meet-eric__stat-label">Brands Trusted</span></div>
              <div className="meet-eric__stat"><span className="meet-eric__stat-number">Top 1%</span><span className="meet-eric__stat-label">Rated on Upwork</span></div>
              <div className="meet-eric__stat"><span className="meet-eric__stat-number">6</span><span className="meet-eric__stat-label">Years Experience</span></div>
              <div className="meet-eric__stat"><span className="meet-eric__stat-number">~100%</span><span className="meet-eric__stat-label">5-Star Rating</span></div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section how-it-works" aria-labelledby="plan-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">How It Works</span><h2 id="plan-heading">Simple Process. Serious Results.</h2></div>
            <div className="hiw-steps">
              <div className="hiw-step"><div className="hiw-step__number">1</div><h3>We Talk About Your Goals</h3><p>We hop on a free strategy call and I look at your current ads, funnel, and goals. I&rsquo;ll tell you exactly where video will make the biggest difference &mdash; and which service is right for you.</p></div>
              <div className="hiw-step"><div className="hiw-step__number">2</div><h3>I Build Your Video Strategy</h3><p>Whether it&rsquo;s a full 511 funnel, standalone ads, or coaching you to create your own &mdash; I put together a plan tailored to your brand, your audience, and your budget.</p></div>
              <div className="hiw-step"><div className="hiw-step__number">3</div><h3>You Launch With Confidence</h3><p>Videos delivered, ready to run. I don&rsquo;t disappear after delivery &mdash; we track results together and I stay until the work performs. That&rsquo;s the guarantee.</p></div>
            </div>
            <div className="section__cta"><a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary">Start With a Free Call</a></div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="section case-studies-section" aria-labelledby="results-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Proof</span><h2 id="results-heading">Results That Speak for Themselves</h2></div>
            <div className="case-v2-grid">
              <div className="case-v2-card"><div className="case-v2-card__accent"></div><div className="case-v2-card__body"><span className="case-v2-card__label">Boutique Financial Advisory (NDA)</span><div className="case-v2-card__metric"><span className="case-v2-card__metric-number">2.28x</span><span className="case-v2-card__metric-label">CTR Improvement</span></div><p>Running $30K+/month on Meta campaigns. Static ads were fatiguing. Created 5 video ads and 1 VSL &mdash; delivered in 5-7 days.</p><ul className="case-v2-card__results"><li>CPA down 50%</li><li>Conversion rate up 3x</li><li>Same ad ran 7+ months</li></ul></div></div>
              <div className="case-v2-card"><div className="case-v2-card__accent"></div><div className="case-v2-card__body"><span className="case-v2-card__brand">BusinessLoans.com</span><div className="case-v2-card__metric"><span className="case-v2-card__metric-number">6 mo</span><span className="case-v2-card__metric-label">Positive ROAS</span></div><p>Seasonal dip in lead generation during slow season. Created video ads to test during their slowest quarter.</p><ul className="case-v2-card__results"><li>Best performing ad ever</li><li>Zero revisions needed</li><li>Slow season became busiest on record</li></ul></div></div>
              <div className="case-v2-card"><div className="case-v2-card__accent"></div><div className="case-v2-card__body"><span className="case-v2-card__brand">Unilever</span><div className="case-v2-card__metric"><span className="case-v2-card__metric-number">14</span><span className="case-v2-card__metric-label">Videos in 2 Weeks</span></div><p>Quick turnaround needed on multiple video ads for a multi-market campaign. Traditional agencies quoted 6-8 weeks.</p><ul className="case-v2-card__results"><li>$25,000 cost savings vs. agency</li><li>Delivered on schedule</li><li>Enterprise-scale proof of concept</li></ul></div></div>
            </div>
            <div className="section__cta"><Link href="/results" className="link-arrow">See All Results <span className="link-arrow__arrow">&rarr;</span></Link></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section testimonials-dark" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow eyebrow--light">What Clients Say</span><h2 id="testimonials-heading" className="text-white">Real Feedback From Real Clients</h2></div>
            <div className="td-video-grid">
              <div className="td-video-wrap"><div className="video-container"><iframe src="https://player.vimeo.com/video/1172772497?title=0&byline=0&portrait=0&color=1e71e7" allow="autoplay; fullscreen; picture-in-picture" title="Client video testimonial 1" loading="lazy"></iframe></div></div>
              <div className="td-video-wrap"><div className="video-container"><iframe src="https://player.vimeo.com/video/1172031150?title=0&byline=0&portrait=0&color=1e71e7" allow="autoplay; fullscreen; picture-in-picture" title="Client video testimonial 2" loading="lazy"></iframe></div></div>
            </div>
            <div className="td-written-grid">
              {testimonials.map((t) => (
                <div className="td-card" key={t.initials}>
                  <div className="td-card__stars" aria-label="5 out of 5 stars">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
                  <blockquote className="td-card__quote"><p>&ldquo;{t.quote}&rdquo;</p></blockquote>
                  <div className="td-card__attribution"><div className="td-card__avatar" aria-hidden="true">{t.initials}</div><div><strong>{t.name}</strong><span>{t.role}</span></div></div>
                </div>
              ))}
            </div>
            <div className="section__cta" style={{ marginTop: "2rem" }}><Link href="/results" className="link-arrow link-arrow--light">See All Results <span className="link-arrow__arrow">&rarr;</span></Link></div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="section guarantee-section" aria-labelledby="guarantee-heading">
          <div className="container">
            <div className="guarantee-content">
              <div className="guarantee-icon-animated" aria-hidden="true"><svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 4L8 16v16c0 14.4 10.24 27.84 24 32 13.76-4.16 24-17.6 24-32V16L32 4z" fill="#059669" opacity="0.15" /><path d="M32 4L8 16v16c0 14.4 10.24 27.84 24 32 13.76-4.16 24-17.6 24-32V16L32 4z" stroke="#059669" strokeWidth="2.5" fill="none" /><path d="M22 32l7 7 13-13" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg></div>
              <span className="eyebrow" style={{ color: "var(--success-text)" }}>Performance Guarantee</span>
              <h2 id="guarantee-heading">I Stand Behind Every Video I Create</h2>
              <p className="guarantee-content__text">When you work with me on video ads, I stay until they outperform your best static ad on click-through rate. No time limit. No extra charge. I&rsquo;d rather prove it with your results than ask you to take my word for it.</p>
              <p className="guarantee-content__text">I&rsquo;ve created 500+ videos for 250+ brands. I know what converts.</p>
              <Link href="/511-funnel" className="btn btn--success">See How the Guarantee Works</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--white" aria-labelledby="faq-heading">
          <div className="container"><div className="section__header"><span className="eyebrow">FAQ</span><h2 id="faq-heading">Questions Answered</h2></div><FAQ items={blogVideosFAQ} /></div>
        </section>

        {/* FINAL CTA */}
        <section className="section final-cta-gradient" aria-labelledby="cta-heading">
          <div className="container">
            <div className="final-cta-gradient__inner">
              <h2 id="cta-heading" className="text-white">Ready to Win With Video?</h2>
              <p className="text-white-muted">Whether you need a full video funnel, standalone ads, or coaching to create your own &mdash; it starts with a conversation.</p>
              <p className="text-white-muted">No pressure. No pitch. Just a practical talk about your goals and how video can help.</p>
              <div className="final-cta-gradient__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--white btn--large">Book Your Free Strategy Call</a>
                <Link href="/results" className="btn btn--white-outline btn--large">Or See Sample Results First</Link>
              </div>
              <div className="final-cta-gradient__trust"><span>100% No-Pressure Conversation</span><span>Free Strategy Session Included</span><span>Find the Right Fit for Your Brand</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
