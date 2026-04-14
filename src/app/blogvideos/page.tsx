import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Turn Ranking Blogs Into Human-Led Videos | VideoRep",
  description:
    "VideoRep turns your written blog content into clear, educational videos. 100% Done-For-You and presented by real, trained video presenters.",
};

const logos = [
  { src: "/images/logos/optimonk.png", alt: "OptiMonk" },
  { src: "/images/logos/ahrefs.png", alt: "ahrefs" },
  { src: "/images/logos/semrush.png", alt: "SEMRUSH" },
];

const blogFAQ = [
  {
    question: "What kind of blogs work best for video?",
    answer: (
      <p>
        Any blog that ranks on Google or teaches your audience something
        valuable. How-to guides, listicles, thought leadership — we turn all of
        them into presenter-led videos that keep people watching.
      </p>
    ),
  },
  {
    question: "How long does each video take to produce?",
    answer: (
      <p>
        Most blog-to-video projects are delivered within 5-7 business days. We
        handle scripting, presenting, editing, and delivery — you just send us
        the blog.
      </p>
    ),
  },
  {
    question: "Do I need to be on camera?",
    answer: (
      <p>
        No — that&rsquo;s the whole point. I&rsquo;m the trained presenter who
        appears on camera for your brand. You stay focused on running your
        business.
      </p>
    ),
  },
  {
    question: "Can you match our brand style?",
    answer: (
      <p>
        Yes. We align on your brand guidelines during the first call —
        typography, colors, tone of voice. Every video looks and feels like it
        came from your team.
      </p>
    ),
  },
  {
    question: "What if I'm not happy with the video?",
    answer: (
      <p>
        We offer unlimited revisions until you&rsquo;re satisfied. If the first
        video completely misses the mark, we&rsquo;ll refund it. That&rsquo;s
        the guarantee.
      </p>
    ),
  },
];

export default function BlogVideosPage() {
  return (
    <>
      <Nav variant="standard" />
      <main id="main-content">
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #eef1ff 0%, #e8ecff 40%, #f5f3ff 100%)",
          }}
        >
          <div className="container" style={{ maxWidth: 1100 }}>
            <div
              className="mx-auto text-center"
              style={{ paddingTop: 100, paddingBottom: 60 }}
            >
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "#dde3ff",
                  color: "var(--brand-primary)",
                  marginBottom: 24,
                }}
              >
                For B2B SEO &amp; Content Teams
              </span>

              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#1a1a2e",
                  marginBottom: 20,
                }}
              >
                Turn Ranking Blogs Into
                <br />
                <span style={{ color: "var(--brand-primary)" }}>
                  Human-Led Videos
                </span>
              </h1>

              <p
                style={{
                  fontSize: 17,
                  color: "#555",
                  maxWidth: 480,
                  margin: "0 auto 32px",
                  lineHeight: 1.6,
                }}
              >
                VideoRep turns your written blog content into clear, educational
                videos. 100% Done-For-You and presented by real, trained video
                presenters.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://cal.com/videorep/videorep-discovery-call"
                  className="btn btn--primary btn--large"
                >
                  Book A Call ↗
                </a>
                <a href="#how-it-works" className="btn btn--secondary btn--large">
                  Watch How It Works ▷
                </a>
              </div>

              {/* Trust row */}
              <div
                className="flex flex-col items-center gap-3"
                style={{ marginTop: 32 }}
              >
                <div className="flex gap-1 text-yellow-400 text-lg">
                  ★★★★★
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#555" }}
                >
                  Trusted By 200+ Global B2B brands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section
          className="py-8"
          style={{
            background:
              "linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)",
          }}
        >
          <div
            className="container flex items-center justify-center gap-12 flex-wrap"
            style={{ maxWidth: 900 }}
          >
            {logos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className="h-7 w-auto opacity-50 grayscale"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="section section--white"
          aria-labelledby="hiw-heading"
        >
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">How It Works</span>
              <h2 id="hiw-heading">
                Three Simple Steps to Video Content
              </h2>
            </div>
            <div className="hiw-steps">
              <div className="hiw-step">
                <div className="hiw-step__number">1</div>
                <h3>Send Us Your Blog</h3>
                <p>
                  Published or not — just send us a link or copy of your
                  finished blog, plus your brand logo, typography and colors.
                </p>
              </div>
              <div className="hiw-step">
                <div className="hiw-step__number">2</div>
                <h3>We Script, Film &amp; Edit</h3>
                <p>
                  We create a script, present it on camera, and produce a
                  polished video — all without you lifting a finger.
                </p>
              </div>
              <div className="hiw-step">
                <div className="hiw-step__number">3</div>
                <h3>Publish &amp; Rank</h3>
                <p>
                  Add your new video to accompany the top of your published blog
                  or upload it to YouTube. Watch your content work harder.
                </p>
              </div>
            </div>
            <div className="section__cta">
              <a
                href="https://cal.com/videorep/videorep-discovery-call"
                className="btn btn--primary"
              >
                Book A Call
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="section testimonials-dark"
          aria-labelledby="testi-heading"
        >
          <div className="container">
            <div className="section__header">
              <span className="eyebrow eyebrow--light">What Clients Say</span>
              <h2 id="testi-heading" className="text-white">
                Real Feedback From Real Clients
              </h2>
            </div>
            <div className="td-written-grid">
              {[
                {
                  initials: "BB",
                  quote:
                    "Working with Eric has been an absolute pleasure. He is not only a talented professional but also exhibits a commendable work ethic.",
                  name: "Barbara Bartucz",
                  role: "Content Marketing Manager, OptiMonk",
                },
                {
                  initials: "HP",
                  quote:
                    "The customer experience was incredible. From day one, the team went beyond expectations — delivering more than what was promised.",
                  name: "Harshita Pulla",
                  role: "Strategy & Insights Manager, Unilever",
                },
                {
                  initials: "JV",
                  quote:
                    "To date, these videos have been our most successful for both sales and longevity.",
                  name: "Jill Vonier",
                  role: "Social Media Advertiser, BusinessLoans.com",
                },
              ].map((t) => (
                <div className="td-card" key={t.initials}>
                  <div className="td-card__stars" aria-label="5 out of 5 stars">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <blockquote className="td-card__quote">
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <div className="td-card__attribution">
                    <div className="td-card__avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section section--white"
          aria-labelledby="faq-heading"
        >
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">FAQ</span>
              <h2 id="faq-heading">Questions Answered</h2>
            </div>
            <FAQ items={blogFAQ} />
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="section final-cta-gradient"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="final-cta-gradient__inner">
              <h2 id="cta-heading" className="text-white">
                Ready to Turn Your Blogs Into Videos?
              </h2>
              <p className="text-white-muted">
                No pressure. No pitch. Just a practical talk about your content
                goals and how video can help your blogs work harder.
              </p>
              <div className="final-cta-gradient__buttons">
                <a
                  href="https://cal.com/videorep/videorep-discovery-call"
                  className="btn btn--white btn--large"
                >
                  Book Your Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
