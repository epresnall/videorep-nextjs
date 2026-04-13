import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "About Eric Presnall",
  description: "Meet Eric Presnall — founder of VideoRep. 6 years, 500+ videos, 250+ companies. A dedicated video presenter who creates fully edited B2B video ads that outperform static creative.",
};

const aboutFAQ = [
  { question: "Why only 3\u20134 clients per month?", answer: <p>Because I&rsquo;m the one on camera and behind the edit. I write every script, present every video, and track every result. More clients means cutting corners, and that means worse results.</p> },
  { question: "Do you train other presenters?", answer: <p>Yes &mdash; through my coaching program. I work with B2B founders who want to become the on-camera face of their brand. Four sessions over four weeks. <Link href="/coaching">Learn more about coaching here.</Link></p> },
  { question: "Do you work internationally?", answer: <p>Absolutely. I&rsquo;ve worked with clients across the US, Australia, UK, Canada, and Europe. Everything is remote &mdash; strategy calls, script reviews, and delivery. I record in my studio and deliver files digitally.</p> },
  { question: "What if I want a long-term partnership?", answer: <p>Most of my best clients started with one project and came back. I offer retainers for ongoing production &mdash; typically 4&ndash;8 fully edited videos per month. Retainer clients get priority scheduling. We can talk about what that looks like on our strategy call.</p> },
  { question: "Any credentials?", answer: <p>Top 1% on Upwork with 100% Job Success Score across 200+ contracts. Named clients include Unilever, BusinessLoans.com, and ClickFunnels. But the best credential is the guarantee: I stay until your video ads beat your best static ad on CTR. No time limit. No extra charge.</p> },
  { question: "Why so confident in the guarantee?", answer: <p>Because the data supports it. Across 500+ videos, presenter-led ads have outperformed static creative in nearly every campaign. The system is built on six years of testing. When you follow a process refined over hundreds of real campaigns, the risk is low.</p> },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="section hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <span className="eyebrow">About VideoRep</span>
                <h1 id="hero-heading">6 Years. 500+ Videos.<br />One Guarantee.</h1>
                <p className="hero__subheadline">I&rsquo;m Eric Presnall. I create presenter-led video ads that outperform static creative. Here&rsquo;s my story.</p>
              </div>
              <div className="hero__video">
                <div className="video-wrapper" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe src="https://player.vimeo.com/video/991681290?badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="About Eric Presnall - VideoRep Origin Story" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="section section--white" aria-labelledby="origin-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">The Origin Story</span><h2 id="origin-heading">How This Started</h2></div>
            <div className="content-block">
              <p>In 2018, I was a freelance presenter in Sydney. Brands hired me to show up on camera, read their scripts, and deliver files. Simple.</p>
              <p>But I kept noticing something: the video ads I presented crushed the static ads running next to them. Same audience, same offer, same landing page &mdash; video won nearly every time.</p>
              <p>Over 200+ videos, the pattern held. So I stopped freelancing and started building a system. I studied what made certain videos convert &mdash; hooks, pacing, CTA placement, trust signals &mdash; and tested everything.</p>
              <p>VideoRep is the result. Not an agency. Not a marketplace. Just one dedicated presenter with a proven system for creating B2B video ads that outperform static creative.</p>
            </div>
          </div>
        </section>

        {/* WHY VIDEO */}
        <section className="section section--alt" aria-labelledby="why-video-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">The Evidence</span><h2 id="why-video-heading">Why Video Wins</h2></div>
            <div className="content-block">
              <p>The human face is the most powerful trust signal in advertising. When someone sees a real person speaking directly to them, engagement jumps 10&ndash;30x over static imagery.</p>
              <p>Presenter-led video builds trust through presence. A real person looking into the camera, explaining the offer, and making the ask. That&rsquo;s what moves people from scroll to click.</p>
              <p>Static ads fatigue in 2&ndash;4 weeks. Video ads run for months because the human element keeps attention fresh. Your audience isn&rsquo;t just seeing an ad &mdash; they&rsquo;re meeting a person.</p>
            </div>
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="section section--white" aria-labelledby="philosophy-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">My Approach</span><h2 id="philosophy-heading">How I Work</h2></div>
            <div className="principles-grid">
              {[
                { num: "01", title: "Results Over Ego", text: "I don\u2019t care about creative awards. I care about beating your CTR benchmark. Every decision is driven by what the data says works." },
                { num: "02", title: "Speed Over Perfection", text: "A good video ad running today beats a perfect one next quarter. I deliver fast because momentum matters in paid media." },
                { num: "03", title: "Clarity Over Cleverness", text: "Your audience wants to know what you do, why it matters, and what to do next. The best scripts are clear, direct, and human. That\u2019s what I deliver \u2014 fully edited and ready to run." },
              ].map((p) => (
                <div className="principle-card" key={p.num}><div className="principle-card__number">{p.num}</div><h3>{p.title}</h3><p>{p.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* MY DAY-TO-DAY */}
        <section className="section section--alt" aria-labelledby="daytoday-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">What I&rsquo;m Building</span><h2 id="daytoday-heading">My Day-to-Day</h2></div>
            <div className="lanes-grid">
              <div className="lane-card"><div className="lane-card__label">Lane 1 &mdash; Mon&ndash;Thu</div><h3>Creating Video Ads</h3><p>The core of VideoRep. Four days a week, I&rsquo;m writing scripts, filming, and editing fully edited presenter-led ads for B2B clients. Every video is built around a specific funnel goal.</p></div>
              <div className="lane-card"><div className="lane-card__label">Lane 2 &mdash; Coaching</div><h3>Coaching B2B Founders</h3><p>I work with founders who want to become the face of their brand on video. Four sessions, four weeks. Scripting, on-camera presence, storytelling, and publishing strategy.</p></div>
              <div className="lane-card"><div className="lane-card__label">Lane 3 &mdash; Future</div><h3>Building the System</h3><p>I&rsquo;m documenting everything into a repeatable system &mdash; templates, frameworks, and processes &mdash; all tested on real campaigns first.</p></div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section section--white" aria-labelledby="stats-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Track Record</span><h2 id="stats-heading">The Stats</h2></div>
            <div className="stats-grid">
              {[
                { num: "500+", label: "Videos Created", detail: "Fully edited presenter-led ads, VSLs, testimonials, and explainers across every B2B vertical" },
                { num: "250+", label: "Brands Served", detail: "From solo founders to enterprise teams at Unilever, Salesforce, and HubSpot" },
                { num: "6", label: "Years of Data", detail: "Every video tracked, measured, and improved. Real performance data, not vanity metrics" },
                { num: "Top 1%", label: "Upwork Talent", detail: "Top-rated Plus with 100% Job Success Score across 200+ contracts" },
                { num: "Named", label: "Clients", detail: "Unilever, BusinessLoans.com, ClickFunnels, and dozens of funded B2B startups" },
                { num: "Proven", label: "Key Proof Points", detail: "Avg 2x CTR improvement over static creative. 90%+ client retention. I stay until it works \u2014 no time limit" },
              ].map((s) => (
                <div className="stat-badge" key={s.label}><span className="stat-badge__number">{s.num}</span><span className="stat-badge__label">{s.label}</span><span className="stat-badge__detail">{s.detail}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="section section--alt" aria-labelledby="personal-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Honest Talk</span><h2 id="personal-heading">Why I Do This</h2></div>
            <div className="content-block">
              <p>I&rsquo;m not building a massive agency. I&rsquo;m not hiring a team of presenters. I&rsquo;m one person doing one thing really well: creating presenter-led B2B video ads that outperform static creative.</p>
              <p>I take on 3&ndash;4 clients per month. That&rsquo;s where I do my best work. More than that, quality drops &mdash; and quality is everything when your name is on every video.</p>
              <p>If you work with me, you get me. I write the scripts. I present on camera. I edit the final cuts. I track the results. No junior editors, no subcontractors.</p>
              <p>Limited availability in exchange for my best work. For the right clients, it&rsquo;s worth the wait.</p>
            </div>
          </div>
        </section>

        {/* PHOTO */}
        <section className="section section--white" style={{ textAlign: "center" }}>
          <div className="container">
            <Image src="/images/Eric Headshot.jpg" alt="Eric Presnall — Founder and Presenter, VideoRep" width={280} height={350} style={{ borderRadius: 12, objectFit: "cover", maxWidth: 280, margin: "0 auto" }} loading="lazy" />
            <p style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.125rem" }}>Eric Presnall</p>
            <p style={{ color: "var(--text-secondary)" }}>Founder &amp; Presenter, VideoRep</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--alt" aria-labelledby="faq-heading">
          <div className="container"><div className="section__header"><span className="eyebrow">Common Questions</span><h2 id="faq-heading">FAQ</h2></div><FAQ items={aboutFAQ} /></div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark" aria-labelledby="cta-heading">
          <div className="container">
            <div className="final-cta">
              <h2 id="cta-heading">Ready to Work Together?</h2>
              <p>I take on 3&ndash;4 clients per month. If you want presenter-led video ads that outperform your static creative, let&rsquo;s talk.</p>
              <div className="final-cta__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Strategy Call</a>
                <Link href="/results" className="btn btn--secondary btn--large">Or see sample results first</Link>
              </div>
              <div className="final-cta__trust"><span>3&ndash;4 Spots Per Month</span><span>Free Strategy Call</span><span>No Time Limit. No Extra Charge.</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
