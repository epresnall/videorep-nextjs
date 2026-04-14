import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VideoRep | Turn Blog Posts Into Human-Led Videos",
  description:
    "VideoRep turns your written blog content into clear, educational videos. 100% Done-For-You and presented by real, trained video presenters.",
};

const CAL = "https://cal.com/videorep/videorep-discovery-call";
const I = "/blogvideos/img";

const PURPLE = "#5064F6";
const NAVY = "#1B193D";
const GREY = "#636363";

// ── Avatar trust row
const AVATARS = [
  { src: `${I}/nKDeft0zC7xS5heaz62Mse0NIzA.webp`, alt: "Client" },
  { src: `${I}/A8kV9PZhfbAF9zQQGYNog73BVvI.webp`, alt: "Client" },
  { src: `${I}/njnx6m4sszDxdR63qMKU7JwQEo.webp`, alt: "Client" },
  { src: `${I}/RsruacpjdFewW5HWISsPU1egpRI.webp`, alt: "Client" },
  { src: `${I}/GkZOqYHIItqCEIVfZQPkecG3DL4.webp`, alt: "Client" },
];

const LOGOS = [
  { src: `${I}/hrvvQbAcb7KpLagZCPFutE0L54.png`, alt: "Unilever" },
  { src: `${I}/IPaVnY9oRXSnmdnGXWf6PYnB51s.png`, alt: "OptiMonk" },
  { src: `${I}/WrSKuZLyjX56TmD652yUy6VfpU.png`, alt: "Ahrefs" },
  { src: `${I}/vTENgQSOImFswMq3PoVtk1QRSnc.png`, alt: "SEMrush" },
  { src: `${I}/WO3JWYt5rxRwgQRqyNywRvZ3ns.png`, alt: "FXEM" },
  { src: `${I}/KDZi3oLUb6pWj85jpssdyUr2w.png`, alt: "Partner" },
  { src: `${I}/Yt4k2dyZmG0D1FxpvuG9DPeXY.png`, alt: "Partner" },
  { src: `${I}/UvxhzWT6HcmZbhGgQNNkXEuQk.png`, alt: "Partner" },
  { src: `${I}/dys0PqbNtxaQ1RsmmGbZpqB5FXE.png`, alt: "Partner" },
];

const STEPS = [
  { num: "1", img: `${I}/pjh1bm1b7piO09yAU31NmcCzvWU.gif`, title: "Share Your Blog", desc: "Send us your written blog content (published or not)." },
  { num: "2", img: `${I}/QnzjfNyA30vl86PViTkVrz7l0eA.gif`, title: "Choose Your VideoRep", desc: "Select a vetted presenter who represents your brand clearly." },
  { num: "3", img: `${I}/UIxTRa9Lv8ht0WoOHCOJJuH85M.gif`, title: "Get Your Videos", desc: "We deliver polished, on-brand video files ready to publish." },
];

const USE_CASES = [
  { n: "1", t: "Turn SEO Blogs Into Video", d: "Turn ranking posts into clear, human-led videos that keep the same topic and keywords—built for trust and conversion." },
  { n: "2", t: "Show Up in AI Search", d: "Get your expertise surfaced in AI answers and modern search results with human-led video built around your content." },
  { n: "3", t: "Educate Buyers at Scale", d: "Turn top-of-funnel content into educational videos that help prospects understand your category before they buy." },
  { n: "4", t: "Support Busy Founders", d: "Give your founder a dedicated video stand-in for educational content — so they stay focused on the business." },
  { n: "5", t: "Enter the U.S. Market", d: "Launch in new markets with consistent, U.S.-based human-led video that builds trust immediately." },
];

const WHAT_YOU_GET = [
  { t: "Your VideoRep", d: "A vetted presenter trained to deliver clearly and consistently in your brand voice." },
  { t: "SEO Scripts", d: "Scripts adapted from your blog — keeping topic, intent, and key terms intact." },
  { t: "On-Brand Editing", d: "Clean edits with brand styling, captions, lower thirds, and visual consistency." },
  { t: "Ready-To-Publish", d: "Final videos delivered in the formats your team needs, so publishing is fast." },
  { t: "Repurposed Clips", d: "Short-form versions for social and snippets — without rewriting from scratch." },
  { t: "Content Queue", d: "A managed content system that keeps video output consistent every week." },
];

const DISCOVERY = [
  { t: "User Searches a Topic", icon: "search" as const, faded: true },
  { t: "Video Appears in Results", icon: "play" as const },
  { t: "Pulled into AI Answers", icon: "wand" as const },
  { t: "Trusted Brand Visibility", icon: "check" as const, highlighted: true },
];

const TESTIMONIALS = [
  { name: "Barbara Bartucz", role: "OPTIMONK | Content Marketing Manager", photo: `${I}/rxraGrzi1RKPXIiXcRkCpW9B0I.jpeg`, quote: "Working with VideoRep has been an absolute pleasure. They have proven to be an invaluable asset to our projects, consistently delivering work of the highest quality. Eric was not only a talented professional but also exhibits a commendable work ethic that ensures timely and reliable results." },
  { name: "Ali Choker", role: "TETRA UNITY | CEO", photo: `${I}/86DPkPfqeGKt3KC9tLxGA88rkI.jpeg`, quote: "10/10 stars - Eric and the VideoRep team stand head and shoulders above the rest... Once you work with them, you immediately realize the difference in quality, solid process, and deliverability speed. They even provide an easy to use interface for leaving revision requests on the video itself to save a bunch of time going back and forth or recording looms." },
  { name: "Adam LeClair", role: "SEMRUSH | Video Producer", photo: `${I}/Kqnku3aNmIWmjpqarptuv8bpE.jpeg`, quote: "Eric at VideoRep was a real pleasure to work with! He came in with great energy, took direction extremely well, and delivered a polished performance that elevated the entire production. His professionalism and ability to bring scripts to life made the whole shoot smooth and successful." },
  { name: "Arina Dolgopolova", role: "VIZBL | Director of Operations", photo: `${I}/OVXZOtPFE5yb7sJRyRltReCdOI.jpeg`, quote: "I'm very glad I had the chance to work with Eric. His expertise on camera was outstanding and the final videos exceeded our expectations. His ability to deliver clean, on-brand, professional content quickly made the whole process effortless." },
  { name: "Jim Sullivan", role: "OXSOME | CEO", photo: `${I}/Yhu8ViBXC0s57qVpen7ReWi9rds.jpeg`, quote: "They did a great job across the entire production. Eric understood what we were trying to communicate, brought a level of polish to the delivery, and made sure the videos hit our brand tone. The turnaround was quick and the quality consistent." },
  { name: "Jill Voinier", role: "BUSINESSLOANS.COM | Paid Social Manager", photo: `${I}/joBQ6opA1j0PSy6GI6UrWEaleOc.jpeg`, quote: "Video creators that consistently understand B2B finance content are hard to find — Eric and the VideoRep team are a rare exception. Our paid creatives improved noticeably and the team was incredibly easy to collaborate with." },
  { name: "Pia Cohn Larson", role: "Brand Owner", photo: `${I}/GIA95QuWJRtfi4UcOV0dzX5Y818.jpeg`, quote: "Eric was a charm to work with. His on-camera talent was spot on and he executed our project with flair. He is extremely detailed and thorough. Looking forward to working with him again soon." },
  { name: "Brandon Grimes", role: "Marketing Manager", photo: `${I}/Pp5KcsxJyJ8Yk48ZgDQomrSpF4.jpeg`, quote: "Our experience with VideoRep has been nothing short of excellent. Eric's ability to deliver great content with such quick turnaround times has elevated our brand beyond our expectations. Higher engagement and stronger time on page." },
  { name: "Yuriy Kuzminov", role: "CEO & Co-founder", photo: `${I}/CgDIw32l7bYwWxGqa91FKpDkOpw.jpeg`, quote: "Video presenting done by Eric have transformed our company's online presence. The professional touch and seamless production made our videos look polished and captivating." },
  { name: "Brecker Bees", role: "SaaS Co-Founder", photo: `${I}/1ajIXeTTHOik6gJfAX7SLSgEm8.jpeg`, quote: "Eric is a true professional that can provide an excellent service to small businesses who don't have a massive budget to hire an agency. Script, filming, editing, graphics, music — turned out 10/10 and ahead of schedule." },
  { name: "Harshita Pulla", role: "Global Manager", photo: `${I}/zbKrbmT8yVwDM1u5jBN9SsZg0.jpeg`, quote: "Out of all the other brand representatives we considered, the quality of the VideoRep portfolio was extremely impressive. Very professional, very easy to work with, and very quick on the turnaround time." },
];

const OUTCOMES = [
  { v: "3×", l: "Higher Conversion Rates" },
  { v: "45%", l: "Lower Production Costs" },
  { v: "30%", l: "Higher Audience Engagement" },
  { v: "120+", l: "Hours Saved Per Quarter" },
  { v: "4×", l: "Faster Publishing Output" },
];

const COMPARE_HEADERS = ["Feature", "VideoRep", "Agency", "AI Avatars", "Freelancer", "Influencer Creators"];
const COMPARE_ROWS: string[][] = [
  ["Turnaround Time", "1-2 Days", "10+ days", "Instant", "5–7 Days", "Varies"],
  ["Video Quality", "Authentic & Clear", "High Quality", "Robotic", "Inconsistent", "UGC-Style"],
  ["Human Presenters", "Included", "Extra Cost", "Not available", "Extra cost", "Included"],
  ["Script Writing", "Included", "Extra Cost + Time", "Basic", "Sometimes", "Not Aligned"],
  ["Revisions", "Fast & included", "Slow & costly", "Unlimited", "Slow", "Limited"],
  ["Pricing", "~$500+ Per Video", "$10k Per Video", "$100 Per Month", "$1k Per Video", "$5k Per Video"],
  ["Results Focus", "Conversion-Driven", "Campaign-Driven", "Trust Risk", "Task-Driven", "Audience-Driven"],
];

const FIT_FOR = [
  "We publish blog content every month",
  "We believe video matters, but don't want to film internally",
  "We want real humans — not AI avatars",
  "We care about SEO and long-term authority (DR 30+)",
  "We want consistent video, not one-offs",
];
const FIT_NOT = [
  "We don't have blog content",
  "We just want to \u201Ctest one video\u201D",
  "We need heavy animation or ad creatives",
  "We're looking for instant, AI-generated content",
  "We don't plan to publish consistently",
];

const FAQ = [
  { q: "1. How Do You Turn Our Blog Into A Video Script?", a: "We start with your existing blog post and adapt it into a structured video script that keeps the original topic, intent, and keywords intact. Our scripting process is built specifically for human-led on-camera delivery — pacing, transitions, and clear structure — so the final video reads naturally and educates the viewer." },
  { q: "2. Do You Keep Our SEO Keywords And Search Intent?", a: "Yes. Every script preserves the search intent, keywords, and topical depth from the original blog so the resulting video continues to support your SEO strategy and shows up alongside the written ranking content." },
  { q: "3. Can We Write Our Own Script Instead?", a: "Absolutely. If your team prefers to write the script, we can film and edit from your script directly. Most teams choose our scripting service because it is included and built specifically for video, but it is fully optional." },
  { q: "4. What If Our Blog Is Long Or Complex?", a: "Long-form blogs are condensed and restructured into focused, on-camera videos that hit the key points without losing depth. For very large pieces, we recommend splitting into a series so each topic gets the time it deserves." },
  { q: "5. How Do You Keep Videos On-Brand If We're Not On Camera?", a: "We work to your brand kit — colors, fonts, lower thirds, intro/outro — and the VideoRep presenter is briefed on your tone, vocabulary, and audience so delivery feels native to your brand from the first frame." },
  { q: "6. Are VideoReps Real People?", a: "Yes. Every VideoRep is a vetted human presenter trained for B2B educational delivery. No AI avatars, no synthetic voices — real on-camera talent representing your brand." },
  { q: "7. What Quality Control Is In Place?", a: "Each video goes through scripting review, on-camera direction, editing review, and a final brand check before delivery. You also get unlimited revisions on the first pass, so anything off-brand or unclear gets corrected before you publish." },
  { q: "8. How Does This Help With AI Search And LLM Visibility?", a: "AI answer engines and modern search increasingly surface video for educational and trust-driven queries. Publishing human-led video tied to your existing blog topics makes your expertise eligible to be cited and shown in AI results, not just text rankings." },
  { q: "9. Where Should We Publish The Videos?", a: "We deliver formats ready for YouTube, your blog post, LinkedIn, your website, and email. Most teams publish on YouTube + embed in the original blog post for compounding SEO and AI search visibility." },
  { q: "10. What Do We Receive For Each Video?", a: "Final 16:9 video, captions, optional short-form vertical clip, thumbnail, and any social-ready cuts agreed to in scope. Files are delivered ready to publish — no extra editing required." },
  { q: "11. What's The Typical Turnaround Time?", a: "Most videos are delivered within 1–2 days from final script approval. Larger batches and series are scheduled across the month based on your publishing cadence." },
  { q: "12. What Usage Rights Do We Get?", a: "You get full usage rights to publish the finished video on your owned channels — website, blog, YouTube, LinkedIn, email, and paid social. Videos are licensed for your brand's distribution and not for resale or sublicensing." },
];

function Star() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 6 }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function Phone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 8 }}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9 11a16 16 0 006 6l1.36-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PlayTri() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={PURPLE} aria-hidden style={{ marginLeft: 8 }}>
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function DiscoveryIcon({ name, color }: { name: "search" | "play" | "wand" | "check"; color: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
  if (name === "play") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><polygon points="10 9 16 12 10 15 10 9" fill={color} stroke="none" /></svg>;
  if (name === "wand") return <svg {...common}><path d="M15 4V2M15 14v-2M8 9h2M20 9h2M17.8 11.8l1.4 1.4M17.8 6.2l1.4-1.4M3 21l9-9M12.2 6.2l-1.4-1.4" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9" fill={color} stroke="none" /><polyline points="8 12 11 15 16 9" stroke="white" /></svg>;
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
        <path d="M4 4 L16 28 L28 4 Z" fill="white" />
      </svg>
      <span style={{ color: "white", fontFamily: "Cal Sans, sans-serif", fontSize: 22, fontWeight: 600, letterSpacing: 0 }}>
        Video<span style={{ fontWeight: 400 }}>Rep</span>
      </span>
    </div>
  );
}

function Nav() {
  const linkStyle: React.CSSProperties = { color: "white", fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "0.48px" };
  return (
    <header style={{ position: "sticky", top: 16, zIndex: 50, padding: "0 20px" }}>
      <nav style={{ maxWidth: 1200, margin: "0 auto", background: PURPLE, borderRadius: 16, padding: "12px 14px 12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 8px 30px rgba(80,100,246,.2)" }}>
        <Logo />
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#how" style={linkStyle}>How It Works</a>
          <a href="#cases" style={linkStyle}>Use Cases</a>
          <a href="#studies" style={linkStyle}>Case Studies</a>
          <a href="#faq" style={linkStyle}>FAQ</a>
        </div>
        <a href={CAL} target="_blank" rel="noopener noreferrer" style={{ background: NAVY, color: "white", padding: "10px 14px 10px 18px", borderRadius: 10, fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "0.48px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          Book a Call <ArrowRight />
        </a>
      </nav>
    </header>
  );
}

function Eyebrow({ children, color = NAVY, bg }: { children: React.ReactNode; color?: string; bg?: string }) {
  return (
    <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 999, background: bg || "rgba(80,100,246,0.12)", color, fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.42px" }}>
      {children}
    </div>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 60, fontWeight: 600, lineHeight: "72px", color: NAVY, margin: 0, letterSpacing: "-0.5px" }}>{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 48, fontWeight: 600, lineHeight: "57.6px", color: NAVY, margin: 0, letterSpacing: "-0.5px" }}>{children}</h2>;
}

function P({ children, c = GREY, size = 16, weight = 400 }: { children: React.ReactNode; c?: string; size?: number; weight?: number }) {
  return <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: size, fontWeight: weight, lineHeight: `${Math.round(size * 1.6)}px`, color: c, margin: 0, letterSpacing: "0.48px" }}>{children}</p>;
}

function PrimaryButton({ href, children, big = false }: { href: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ background: PURPLE, color: "white", padding: big ? "16px 24px" : "12px 18px", borderRadius: 12, fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.48px", display: "inline-flex", alignItems: "center", boxShadow: "0 6px 24px rgba(80,100,246,.35)" }}>
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ background: "white", color: PURPLE, padding: "12px 20px", borderRadius: 12, border: `1px solid ${PURPLE}`, fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.48px", display: "inline-flex", alignItems: "center" }}>
      {children}
    </a>
  );
}

const sectionPad: React.CSSProperties = { padding: "100px 20px", maxWidth: 1240, margin: "0 auto" };

export default function BlogVideosPage() {
  return (
    <main style={{ background: "white", overflowX: "hidden" }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg, rgba(80,100,246,0.18) 0%, white 47%)", paddingTop: 60, paddingBottom: 80, textAlign: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 20px 0" }}>
          <Eyebrow color={NAVY}>For B2B SEO &amp; Content Teams</Eyebrow>
          <div style={{ marginTop: 24 }}>
            <H1>
              Turn Ranking Blogs Into<br />
              <span style={{ color: PURPLE }}>Human-Led Videos</span>
            </H1>
          </div>
          <div style={{ maxWidth: 600, margin: "24px auto 0" }}>
            <P size={18}>VideoRep turns your written blog content into clear, educational videos. 100% Done-For-You and presented by real, trained video presenters.</P>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 36 }}>
            <PrimaryButton href={CAL}>Book A Call <Phone /></PrimaryButton>
            <SecondaryButton href="#how">Watch How It Works <PlayTri /></SecondaryButton>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 36 }}>
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} />)}
          </div>
          <div style={{ marginTop: 16 }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY, margin: 0, letterSpacing: "0.42px" }}>Trusted By 200+ Global B2B brands</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 24 }}>
            {AVATARS.map((a) => (
              <div key={a.src} style={{ width: 60, height: 60, borderRadius: 999, overflow: "hidden", border: "3px solid white", boxShadow: "0 4px 14px rgba(0,0,0,.08)" }}>
                <Image src={a.src} alt={a.alt} width={60} height={60} style={{ width: 60, height: 60, objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Logo bar */}
        <div style={{ marginTop: 80, padding: "0 20px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 48 }}>
            {LOGOS.map((l) => (
              <Image key={l.src} src={l.src} alt={l.alt} width={120} height={36} style={{ height: 32, width: "auto", opacity: 0.7, objectFit: "contain" }} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ ...sectionPad, textAlign: "center" }}>
        <Eyebrow color={PURPLE}>How It Works</Eyebrow>
        <div style={{ marginTop: 20 }}>
          <H2>From Blog To Video<br /><span style={{ color: PURPLE }}>Without The Headache</span></H2>
        </div>
        <div style={{ maxWidth: 560, margin: "20px auto 0" }}>
          <P>You provide the written content. We turn it into consistent, human-led video… ready to publish.</P>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 64 }}>
          {STEPS.map((s) => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ width: 220, height: 160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={s.img} alt={s.title} width={220} height={160} style={{ width: 220, height: 160, objectFit: "contain" }} unoptimized />
              </div>
              <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 24, fontWeight: 600, color: NAVY, margin: "20px 0 10px" }}>{s.title}</h3>
              <P>{s.desc}</P>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section id="cases" style={{ background: "#F9FAFC" }}>
        <div style={{ ...sectionPad, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <Eyebrow color={PURPLE}>Use Cases</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>How Teams Use <span style={{ color: PURPLE }}>VideoRep</span></H2>
            </div>
            <div style={{ marginTop: 20 }}>
              <P>Five common ways SEO and content teams turn written content into consistent video… without relying on founders or internal teams.</P>
            </div>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 16 }}>
              {USE_CASES.map((u, i) => (
                <details key={u.n} open={i === 0} style={{ background: "white", borderRadius: 14, padding: "20px 24px", border: "1px solid #EEF0F7" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none" }}>
                    <span style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 20, fontWeight: 600, color: NAVY }}>{u.n}. {u.t}</span>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 22, color: PURPLE, fontWeight: 400 }}>+</span>
                  </summary>
                  <div style={{ marginTop: 14 }}>
                    <P>{u.d}</P>
                  </div>
                </details>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <PrimaryButton href={CAL}>Book A Call <Phone /></PrimaryButton>
            </div>
          </div>
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 40px rgba(27,25,61,.08)" }}>
              <div style={{ position: "relative", paddingTop: "56.25%", background: NAVY }}>
                <Image src={`${I}/yt-bL7lUv0E7oY.webp`} alt="MedShadow case study video" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 22, fontWeight: 600, color: NAVY, margin: 0 }}>86,000+ Views From A Single Educational YouTube Video</h3>
                <div style={{ marginTop: 8 }}>
                  <P size={14}>MedShadow · Healthcare Education · Blog → Video</P>
                </div>
                <div style={{ marginTop: 20 }}>
                  <a href={CAL} target="_blank" rel="noopener noreferrer" style={{ color: PURPLE, fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                    View Use Case <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ ...sectionPad, textAlign: "center" }}>
        <Eyebrow color={PURPLE}>What You Get</Eyebrow>
        <div style={{ marginTop: 20 }}>
          <H2>Trust That <span style={{ color: PURPLE }}>Compounds Over Time</span></H2>
        </div>
        <div style={{ maxWidth: 620, margin: "20px auto 0" }}>
          <P>Not just videos — but clarity, consistency, and credibility your audience (and team) can rely on.</P>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginTop: 56, textAlign: "left" }}>
          {WHAT_YOU_GET.map((w) => (
            <div key={w.t} style={{ background: "white", border: "1px solid #EEF0F7", borderRadius: 14, padding: 28 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(80,100,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Check />
              </div>
              <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 22, fontWeight: 600, color: NAVY, margin: "0 0 10px" }}>{w.t}</h3>
              <P>{w.d}</P>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH + AI DISCOVERY */}
      <section>
        <div style={{ ...sectionPad, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <Eyebrow color={PURPLE}>Search + AI Discovery</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>Written Content Alone <br /><span style={{ color: PURPLE }}>Isn&apos;t Enough Anymore</span></H2>
            </div>
            <div style={{ maxWidth: 480, marginTop: 20 }}>
              <P>AI answers and modern search increasingly surface video for educational queries. Video helps your expertise get shown — and trusted.</P>
            </div>
            <div style={{ marginTop: 36 }}>
              <PrimaryButton href={CAL}>Book A Call <Phone /></PrimaryButton>
            </div>
          </div>
          <div style={{ background: "rgba(80,100,246,0.10)", borderRadius: 20, padding: "48px 32px", position: "relative", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: 14 }}>
            <div style={{ position: "absolute", left: "50%", top: 60, bottom: 60, width: 2, background: PURPLE, opacity: 0.5, transform: "translateX(-50%)" }} />
            {DISCOVERY.map((d) => (
              <div key={d.t} style={{ position: "relative", zIndex: 1, background: d.highlighted ? PURPLE : "white", border: d.highlighted ? "none" : "1px solid #EEF0F7", borderRadius: 12, padding: "14px 20px", display: "inline-flex", alignItems: "center", gap: 12, boxShadow: "0 6px 18px rgba(27,25,61,0.06)", opacity: d.faded ? 0.55 : 1, minWidth: 240 }}>
                <DiscoveryIcon name={d.icon} color={d.highlighted ? "white" : PURPLE} />
                <span style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 17, fontWeight: 600, color: d.highlighted ? "white" : NAVY }}>{d.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY VIDEO ENGINE */}
      <section style={{ background: "#F9FAFC" }}>
        <div style={{ ...sectionPad, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ background: "#F1F2F7", borderRadius: 20, padding: "56px 32px", position: "relative", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={`${I}/Mg36dwWhJ7Jb0JhrBJQiFHDaTM.png`} alt="Monthly Video Engine" width={550} height={430} style={{ width: "100%", height: "auto", maxWidth: 550, objectFit: "contain" }} />
          </div>
          <div>
            <Eyebrow color={PURPLE}>Monthly Video Engine</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>You Bring the Blogs.<br /><span style={{ color: PURPLE }}>We Ship The Videos.</span></H2>
            </div>
            <div style={{ maxWidth: 480, marginTop: 20 }}>
              <P>Choose how many posts you want converted each month. We handle everything end-to-end… from managing your VideoRep and script adaptation to editing and final delivery.</P>
            </div>
            <div style={{ marginTop: 36 }}>
              <PrimaryButton href={CAL}>Book A Call <Phone /></PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FREE VIDEO SCRIPT CTA */}
      <section style={{ background: "linear-gradient(180deg, rgba(80,100,246,0.06), white)" }}>
        <div style={{ ...sectionPad, textAlign: "center" }}>
          <div style={{ background: "white", border: "1px solid #EEF0F7", borderRadius: 24, padding: "60px 40px", boxShadow: "0 20px 60px rgba(27,25,61,.06)" }}>
            <Eyebrow color={PURPLE}>Free Video Script</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>Turn Your Best Blog Into a<br /><span style={{ color: PURPLE }}>Video Script For Free!</span></H2>
            </div>
            <div style={{ maxWidth: 620, margin: "20px auto 0" }}>
              <P>Paste your highest-performing blog. We&apos;ll convert it into a structured, human-led video script using our internal system.</P>
            </div>
            <div style={{ marginTop: 32 }}>
              <PrimaryButton href={CAL} big>Get My Free Script <ArrowRight /></PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="studies" style={{ background: "#F9FAFC" }}>
        <div style={{ ...sectionPad }}>
          <div style={{ textAlign: "center" }}>
            <Eyebrow color={PURPLE}>Case Studies</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>Turning Search Authority Into <span style={{ color: PURPLE }}>Video Authority</span></H2>
            </div>
            <div style={{ maxWidth: 660, margin: "20px auto 0" }}>
              <P>How content teams converted ranking blog posts into trusted, on-camera education.</P>
            </div>
          </div>
          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                tag: "Non-Profit | Health Education",
                title: "86,000+ Views On A Single Educational YouTube Video",
                body: "Human-led health education videos built for clarity and trust.",
                quote: "\u201CTop-notch presentation and production.\u201D",
                attr: "Dante Steward | Creative Director",
                photo: `${I}/Q1hPJghRTXSieZgxVWtEobc0OE8.png`,
                videoTitle: "\u201CSpleen Organ Health - Enlarged Spleen, A Big Red Flag\u201D",
                embed: "https://www.youtube.com/embed/bL7lUv0E7oY",
              },
              {
                tag: "B2B SaaS | Workflow Automation",
                title: "3x Increase In Qualified Audience Engagement",
                body: "Turned SEO blog content into thought-leadership video that held attention.",
                quote: "\u201CHigher engagement and stronger time on page.\u201D",
                attr: "Brandon Grimes | Marketing Manager",
                photo: `${I}/43haqKLV5VPslFL2XPqXsJczGE.png`,
                videoTitle: "\u201CProcess Excellence, Operational Excellence and Business Excellence\u201D",
                embed: "https://player.vimeo.com/video/642263700?autopause=0",
              },
              {
                tag: "Career Tech | Content Marketing",
                title: "$7,000+ In Production Cost Savings",
                body: "Converted a high-performing blog into video \u2014 without agencies or internal filming.",
                quote: "\u201CSeriously impressive quality and execution.\u201D",
                attr: "Jacob Jacquet | CEO",
                photo: `${I}/GkZOqYHIItqCEIVfZQPkecG3DL4.webp`,
                videoTitle: "\u201CBest Cover Letters: Examples, Templates, and Writing Tips\u201D",
                embed: "https://player.vimeo.com/video/642263700?autopause=0",
              },
            ].map((c) => (
              <div key={c.title} style={{ background: "white", borderRadius: 20, overflow: "hidden", border: "1px solid #EEF0F7", padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: PURPLE, margin: 0, letterSpacing: "0.5px", textTransform: "uppercase" }}>{c.tag}</p>
                  <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 34, fontWeight: 600, color: NAVY, margin: "14px 0 16px", lineHeight: "40px" }}>{c.title}</h3>
                  <P>{c.body}</P>
                  <div style={{ marginTop: 24, background: "#F9FAFC", border: "1px solid #EEF0F7", borderRadius: 12, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 999, overflow: "hidden", flexShrink: 0 }}>
                      <Image src={c.photo} alt={c.attr} width={40} height={40} style={{ width: 40, height: 40, objectFit: "cover" }} />
                    </div>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 500, color: NAVY, margin: 0, lineHeight: "20px" }}>
                      {c.quote} <span style={{ color: GREY, fontWeight: 400 }}>— {c.attr}</span>
                    </p>
                  </div>
                  <div style={{ marginTop: 28, display: "flex", gap: 16, alignItems: "center" }}>
                    <PrimaryButton href={CAL}>Book a Call <Phone /></PrimaryButton>
                    <a href={CAL} target="_blank" rel="noopener noreferrer" style={{ color: NAVY, fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                      Read the Full Case Study <ArrowRight />
                    </a>
                  </div>
                </div>
                <div>
                  <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 14, overflow: "hidden", background: NAVY, boxShadow: "0 14px 40px rgba(27,25,61,0.12)" }}>
                    <iframe src={c.embed} title={c.videoTitle} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} />
                  </div>
                  <p style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 22, fontWeight: 600, color: NAVY, margin: "16px 0 0", lineHeight: "28px", textAlign: "center" }}>{c.videoTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section style={{ background: NAVY, color: "white" }}>
        <div style={{ ...sectionPad }}>
          <div style={{ textAlign: "center" }}>
            <Eyebrow color={PURPLE} bg="rgba(80,100,246,0.18)">Client Reviews</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <h2 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 48, fontWeight: 600, lineHeight: "57.6px", color: "white", margin: 0 }}>
                Trusted By Teams Who <span style={{ color: PURPLE }}>Care About Quality</span>
              </h2>
            </div>
            <div style={{ maxWidth: 640, margin: "20px auto 0" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "25.6px", color: "rgba(255,255,255,0.7)", margin: 0, letterSpacing: "0.48px" }}>
                From SaaS &amp; Service founders to CMOs, teams choose VideoRep for clarity, speed, and consistent delivery.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 56, columnCount: 2, columnGap: 28 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ breakInside: "avoid", marginBottom: 28, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 999, overflow: "hidden", flexShrink: 0 }}>
                    <Image src={t.photo} alt={t.name} width={48} height={48} style={{ width: 48, height: 48, objectFit: "cover" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "white", margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 600, color: PURPLE, margin: "2px 0 0", letterSpacing: "0.4px" }}>{t.role}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.85)", margin: 0, letterSpacing: "0.4px" }}>{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN OUTCOMES */}
      <section style={{ ...sectionPad, textAlign: "center" }}>
        <Eyebrow color={PURPLE}>Proven Outcomes</Eyebrow>
        <div style={{ marginTop: 20 }}>
          <H2>What Changes When Blogs <br /><span style={{ color: PURPLE }}>Become Human-Led Video</span></H2>
        </div>
        <div style={{ maxWidth: 660, margin: "20px auto 0" }}>
          <P>Higher engagement. Lower production friction. Stronger visibility.</P>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 56 }}>
          {OUTCOMES.map((o) => (
            <div key={o.l} style={{ background: "white", border: "1px solid #EEF0F7", borderRadius: 14, padding: "28px 16px" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 56, fontWeight: 700, color: PURPLE, margin: 0, letterSpacing: "-2.2px", lineHeight: 1 }}>{o.v}</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 500, color: NAVY, margin: "12px 0 0", letterSpacing: "0.4px" }}>{o.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ background: "#F9FAFC" }}>
        <div style={{ ...sectionPad }}>
          <div style={{ textAlign: "center" }}>
            <Eyebrow color={PURPLE}>Comparison</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>The Smarter Alternative To <span style={{ color: PURPLE }}>AI &amp; Agencies</span></H2>
            </div>
            <div style={{ maxWidth: 640, margin: "20px auto 0" }}>
              <P>The fastest path to consistent, trustworthy video, without internal production.</P>
            </div>
          </div>
          <div style={{ marginTop: 48, background: "white", borderRadius: 20, border: "1px solid #EEF0F7", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Inter Tight', sans-serif" }}>
              <thead>
                <tr style={{ background: "rgba(80,100,246,0.08)" }}>
                  {COMPARE_HEADERS.map((h, i) => (
                    <th key={h} style={{ padding: "20px 16px", textAlign: "left", fontSize: 14, fontWeight: 700, color: i === 1 ? PURPLE : NAVY, letterSpacing: "0.4px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, ri) => (
                  <tr key={row[0]} style={{ borderTop: "1px solid #EEF0F7", background: ri % 2 ? "white" : "#FBFBFD" }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: "18px 16px", fontSize: 14, fontWeight: ci === 0 ? 600 : ci === 1 ? 600 : 400, color: ci === 1 ? PURPLE : ci === 0 ? NAVY : GREY, letterSpacing: "0.3px" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FIT CHECK */}
      <section style={{ ...sectionPad }}>
        <div style={{ textAlign: "center" }}>
          <Eyebrow color={PURPLE}>Fit Check</Eyebrow>
          <div style={{ marginTop: 20 }}>
            <H2>Built for Teams Who <span style={{ color: PURPLE }}>Take Content Seriously</span></H2>
          </div>
          <div style={{ maxWidth: 680, margin: "20px auto 0" }}>
            <P>For B2B teams who already invest in content — and want their videos to build the same trust, authority, and AI visibility.</P>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 56 }}>
          <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 24, fontWeight: 600, color: NAVY, margin: "0 0 20px" }}>Built for</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FIT_FOR.map((f) => (
                <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 2 }}><Check /></span>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 500, color: NAVY, lineHeight: "24px" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 24, fontWeight: 600, color: NAVY, margin: "0 0 20px" }}>Not for</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {FIT_NOT.map((f) => (
                <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 2 }}><Cross /></span>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 500, color: NAVY, lineHeight: "24px" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#F9FAFC" }}>
        <div style={{ ...sectionPad, maxWidth: 880 }}>
          <div style={{ textAlign: "center" }}>
            <Eyebrow color={PURPLE}>FAQ</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <H2>Frequently Asked <span style={{ color: PURPLE }}>Questions</span></H2>
            </div>
          </div>
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0} style={{ background: "white", borderRadius: 14, border: "1px solid #EEF0F7", padding: "22px 26px" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none" }}>
                  <span style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 18, fontWeight: 600, color: NAVY }}>{f.q}</span>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 22, color: PURPLE, fontWeight: 400 }}>+</span>
                </summary>
                <div style={{ marginTop: 14 }}>
                  <P>{f.a}</P>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "linear-gradient(180deg, white, rgba(80,100,246,0.10))" }}>
        <div style={{ ...sectionPad, textAlign: "center" }}>
          <div style={{ background: NAVY, borderRadius: 24, padding: "80px 40px", color: "white", backgroundImage: `radial-gradient(circle at 50% 0%, rgba(80,100,246,0.4), transparent 60%)` }}>
            <Eyebrow color={PURPLE} bg="rgba(80,100,246,0.18)">Ready When You Are</Eyebrow>
            <div style={{ marginTop: 20 }}>
              <h2 style={{ fontFamily: "'Cal Sans', sans-serif", fontSize: 48, fontWeight: 600, lineHeight: "57.6px", color: "white", margin: 0 }}>
                Turn Your Best Blogs Into <br /><span style={{ color: PURPLE }}>High Quality, Branded Video Content</span>
              </h2>
            </div>
            <div style={{ maxWidth: 640, margin: "20px auto 0" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "25.6px", color: "rgba(255,255,255,0.7)", margin: 0, letterSpacing: "0.48px" }}>
                If you already publish content, the next step is simple: make it visible, watchable, and trustworthy.
              </p>
            </div>
            <div style={{ marginTop: 36 }}>
              <PrimaryButton href={CAL} big>Book a Call <Phone /></PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NAVY, color: "rgba(255,255,255,0.6)", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <Logo />
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14 }}>
            © {new Date().getFullYear()} VideoRep. Presenter-led video for B2B teams.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "'Inter Tight', sans-serif", fontSize: 14 }}>Privacy</Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "'Inter Tight', sans-serif", fontSize: 14 }}>Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
