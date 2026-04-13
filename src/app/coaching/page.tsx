import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Founder Video Coaching",
  description: "Founder Video Coaching by Eric Presnall. Learn to create compelling video content on your own. On-camera coaching, script development, and publishing strategy.",
};

const CheckIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
const XIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>);

const coachingFAQ = [
  { question: "I\u2019m terrible on camera. Can this really help?", answer: <p>That&rsquo;s exactly who this is for. Most founders I coach start by saying they hate being on camera. By session 3, they&rsquo;re recording on their own. Once you know what to say and how to say it, the awkwardness disappears.</p> },
  { question: "What if I hate the results?", answer: <p>We review your videos together at every stage. If something isn&rsquo;t working, we adjust. The goal isn&rsquo;t to turn you into someone else &mdash; it&rsquo;s to find the version of you that works best on camera and amplify it.</p> },
  { question: "How much time do I need to commit?", answer: <p>About 2&ndash;3 hours per week for 4 weeks. That includes our 60-minute session plus practice recording between calls. The founders who get the best results are the ones who do the reps.</p> },
  { question: "Do I need expensive equipment?", answer: <p>No. A recent smartphone, a $30 clip-on mic, and natural window light gets you 90% of the way. In session 1, I&rsquo;ll assess your setup and give specific, affordable recommendations if needed. Most founders don&rsquo;t need to buy anything.</p> },
  { question: "How is this different from VideoRep\u2019s production service?", answer: <p>Coaching teaches you how to create video content yourself. VideoRep&rsquo;s <Link href="/511-funnel">done-for-you production service</Link> is the opposite &mdash; I write, film, and edit everything. Some clients do coaching first to build confidence, then hire me for campaign videos. We can talk through the best fit on a call.</p> },
];

export default function CoachingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="section hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <span className="eyebrow">Founder Video Coaching</span>
                <h1 id="hero-heading">Learn to Create Video<br />That Builds Real Authority.</h1>
                <p className="hero__subheadline">A hands-on coaching program for B2B founders who want to show up on camera with confidence &mdash; and actually enjoy doing it.</p>
                <div className="hero__ctas">
                  <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book a Free Strategy Call</a>
                  <a href="#coaching-video" className="btn btn--secondary btn--large">Watch the Overview</a>
                </div>
              </div>
              <div className="hero__video" id="coaching-video">
                <div className="video-wrapper" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe src="https://player.vimeo.com/video/986124880?badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Founder Video Coaching Overview" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section section--alt" aria-labelledby="who-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Right Fit?</span><h2 id="who-heading">Is This For You?</h2></div>
            <div className="fit-grid">
              <div className="fit-card fit-card--yes">
                <h3>This is for you if&hellip;</h3>
                <ul className="fit-list">
                  {["You\u2019re a B2B founder who knows video matters but hasn\u2019t started","You want to build a personal brand through video","You\u2019ve tried video before and it felt awkward","You want to use video for LinkedIn, email, or speaking","You\u2019re willing to put in the reps over 4 weeks"].map((t)=>(<li key={t}><CheckIcon /><span>{t}</span></li>))}
                </ul>
              </div>
              <div className="fit-card fit-card--no">
                <h3>Not a fit if&hellip;</h3>
                <ul className="fit-list">
                  {["You want someone else to be on camera for you","You\u2019re looking for a full production team","You can\u2019t commit 2\u20133 hours per week for 4 weeks","You want polished corporate videos, not founder-led content"].map((t)=>(<li key={t}><XIcon /><span>{t}</span></li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section section--white" aria-labelledby="package-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">The Package</span><h2 id="package-heading">What You Get</h2></div>
            <div className="package-details">
              <div className="package-includes">
                <div className="deliverables-grid">
                  {["4 one-on-one coaching sessions (60 min each)","Custom scripts written for your brand and audience","Live on-camera coaching with real-time feedback","Video review and notes between sessions","Editing direction guide (what to tell your editor)","Publishing strategy for LinkedIn, email, and beyond"].map((d)=>(
                    <div className="deliverable-item" key={d}><CheckIcon /><span>{d}</span></div>
                  ))}
                </div>
              </div>
              <div className="package-meta">
                <div className="package-meta__item"><span className="package-meta__label">Timeline</span><span className="package-meta__value">4 weeks</span></div>
                <div className="package-meta__item"><span className="package-meta__label">Investment</span><span className="package-meta__value">$2,500</span></div>
                <div className="package-meta__item"><span className="package-meta__label">Format</span><span className="package-meta__value">Remote via Zoom</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="section section--alt" aria-labelledby="curriculum-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">The Curriculum</span><h2 id="curriculum-heading">4 Sessions.<br />4 Weeks.<br />Total Confidence on Camera.</h2></div>
            <div className="sessions-grid">
              {[
                { num: "Session 1", title: "Foundation", items: ["Define your on-camera style and tone","Identify the topics your audience actually cares about","Set up your recording environment (lighting, audio, framing)","Record your first practice video and review it together"] },
                { num: "Session 2", title: "On-Camera Presence", items: ["Master eye contact, pacing, and energy","Learn when to use a teleprompter vs. bullet points","Practice hooks that grab attention in the first 3 seconds","Get real-time feedback on delivery and body language"] },
                { num: "Session 3", title: "Storytelling & Scripting", items: ["Write scripts that sound natural, not rehearsed","Structure videos for maximum retention (hook, body, CTA)","Turn customer stories into compelling video content","Build reusable frameworks you can use again and again"] },
                { num: "Session 4", title: "Launch & Iteration", items: ["Finalize your first 4\u20136 videos for publishing","Create a 30-day publishing calendar","Learn how to measure what\u2019s working","Build an editing workflow you can repeat consistently"] },
              ].map((s)=>(
                <div className="session-card" key={s.num}><div className="session-card__number">{s.num}</div><h3>{s.title}</h3><ul>{s.items.map((i)=>(<li key={i}>{i}</li>))}</ul></div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section className="section section--white" aria-labelledby="stories-heading">
          <div className="container">
            <div className="section__header"><span className="eyebrow">Real Results</span><h2 id="stories-heading">Before &amp; After</h2></div>
            <div className="case-studies-grid">
              <div className="case-study-card">
                <div className="case-study-card__header"><span className="eyebrow">Case Study 1</span><h3>Series B SaaS Founder</h3></div>
                <div className="case-study-card__body">
                  <div className="case-study-card__before"><h4>Before</h4><p>All written content. Never appeared on camera. People opened emails but didn&rsquo;t click.</p></div>
                  <div className="case-study-card__after"><h4>After</h4><p>Created 12 founder-led videos in 4 weeks. Used them in emails, LinkedIn, and investor updates. Email engagement jumped 40%. Two inbound partnerships came directly from LinkedIn videos.</p></div>
                  <div className="case-study-card__stats">
                    <div className="case-study-stat"><span className="case-study-stat__number">12</span><span className="case-study-stat__label">Videos Created</span></div>
                    <div className="case-study-stat"><span className="case-study-stat__number">+40%</span><span className="case-study-stat__label">Email Engagement</span></div>
                  </div>
                </div>
              </div>
              <div className="case-study-card">
                <div className="case-study-card__header"><span className="eyebrow">Case Study 2</span><h3>B2B Service Founder</h3></div>
                <div className="case-study-card__body">
                  <div className="case-study-card__before"><h4>Before</h4><p>Great expertise, zero video presence. Wanted speaking opportunities but had no video to show event organizers.</p></div>
                  <div className="case-study-card__after"><h4>After</h4><p>Built a library of short-form videos. Email CTR improved 60%. Used clips as a speaking reel. Landed 3 conference talks within 6 months.</p></div>
                  <div className="case-study-card__stats">
                    <div className="case-study-stat"><span className="case-study-stat__number">+60%</span><span className="case-study-stat__label">Email CTR</span></div>
                    <div className="case-study-stat"><span className="case-study-stat__number">3</span><span className="case-study-stat__label">Conference Talks</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--alt" aria-labelledby="faq-heading">
          <div className="container"><div className="section__header"><span className="eyebrow">Common Questions</span><h2 id="faq-heading">FAQ</h2></div><FAQ items={coachingFAQ} /></div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark" aria-labelledby="cta-heading">
          <div className="container">
            <div className="final-cta">
              <h2 id="cta-heading">Ready to Show Up<br />on Camera?</h2>
              <p>Book a free call. We&rsquo;ll talk about your goals, your audience, and whether coaching is the right fit. No pressure &mdash; just an honest conversation.</p>
              <div className="final-cta__buttons">
                <a href="https://cal.com/videorep/videorep-discovery-call" className="btn btn--primary btn--large">Book Your Free Strategy Call</a>
                <Link href="/511-funnel" className="btn btn--secondary btn--large">Or explore done-for-you video</Link>
              </div>
              <div className="final-cta__trust"><span>4-Week Program</span><span>$2,500 Investment</span><span>Limited Spots Available</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
