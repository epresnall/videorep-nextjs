import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "VideoRep | Turn Blog Posts Into Human-Led Videos",
  description:
    "VideoRep turns your written blog content into clear, educational videos. 100% Done-For-You and presented by real, trained video presenters.",
};

const CAL_URL = "https://cal.com/videorep/videorep-discovery-call";
const IMG = "/images/blogvideos";

// ── Trust row: 4 avatar faces
const avatars = [
  `${IMG}/nKDeft0zC7xS5heaz62Mse0NIzA.webp`,
  `${IMG}/A8kV9PZhfbAF9zQQGYNog73BVvI.webp`,
  `${IMG}/njnx6m4sszDxdR63qMKU7JwQEo.webp`,
  `${IMG}/RsruacpjdFewW5HWISsPU1egpRI.webp`,
];

// ── Partner logos for trust bar
const logos = [
  { src: `${IMG}/hrvvQbAcb7KpLagZCPFutE0L54.png`, alt: "Unilever" },
  { src: `${IMG}/IPaVnY9oRXSnmdnGXWf6PYnB51s.png`, alt: "OptiMonk" },
  { src: `${IMG}/WrSKuZLyjX56TmD652yUy6VfpU.png`, alt: "ahrefs" },
  { src: `${IMG}/vTENgQSOImFswMq3PoVtk1QRSnc.png`, alt: "SEMRUSH" },
  { src: `${IMG}/WO3JWYt5rxRwgQRqyNywRvZ3ns.png`, alt: "FXEM" },
  { src: `${IMG}/KDZi3oLUb6pWj85jpssdyUr2w.png`, alt: "Partner" },
  { src: `${IMG}/Yt4k2dyZmG0D1FxpvuG9DPeXY.png`, alt: "Partner" },
  { src: `${IMG}/UvxhzWT6HcmZbhGgQNNkXEuQk.png`, alt: "Partner" },
  { src: `${IMG}/dys0PqbNtxaQ1RsmmGbZpqB5FXE.png`, alt: "Partner" },
];

const useCases = [
  {
    num: "1",
    title: "Turn SEO Blogs Into Video",
    desc: "Turn ranking posts into clear, human-led videos that keep the same topic and keywords—built for trust and conversion.",
  },
  {
    num: "2",
    title: "Show Up in AI Search",
    desc: "Get your expertise surfaced in AI answers and modern search results with human-led video built around your content.",
  },
  {
    num: "3",
    title: "Educate Buyers at Scale",
    desc: "Turn top-of-funnel content into educational videos that help prospects understand your category before they buy.",
  },
  {
    num: "4",
    title: "Support Busy Founders",
    desc: "Give your founder a dedicated video stand-in for educational content — so they stay focused on the business.",
  },
  {
    num: "5",
    title: "Enter the U.S. Market",
    desc: "Launch in new markets with consistent, U.S.-based human-led video that builds trust immediately.",
  },
];

const whatYouGet = [
  {
    title: "Your VideoRep",
    desc: "A vetted presenter trained to deliver clearly and consistently in your brand voice.",
  },
  {
    title: "SEO Scripts",
    desc: "Scripts adapted from your blog — keeping topic, intent, and key terms intact.",
  },
  {
    title: "On-Brand Editing",
    desc: "Clean edits with brand styling, captions, lower thirds, and visual consistency.",
  },
  {
    title: "Ready-To-Publish",
    desc: "Final videos delivered in the formats your team needs, so publishing is fast.",
  },
  {
    title: "Repurposed Clips",
    desc: "Short-form versions for social and snippets without rewriting from scratch.",
  },
  {
    title: "Content Queue",
    desc: "A managed content system that keeps video output consistent every week.",
  },
];

const testimonials = [
  {
    name: "Barbara Bartucz",
    role: "OPTIMONK | Content Marketing Manager",
    photo: `${IMG}/rxraGrzi1RKPXIiXcRkCpW9B0I.jpeg`,
    quote:
      "Working with VideoRep has been an absolute pleasure. They have proven to be an invaluable asset to our projects, consistently delivering work of the highest quality. Eric was not only a talented professional but also exhibits a commendable work ethic that ensures timely and reliable results.",
  },
  {
    name: "Ali Choker",
    role: "TETRA UNITY | CEO",
    photo: `${IMG}/86DPkPfqeGKt3KC9tLxGA88rkI.jpeg`,
    quote:
      "10/10 stars — Eric and the VideoRep team stand head and shoulders above the rest... Once you work with them, you immediately realize the difference in quality, solid process, and deliverability speed. They even provides an easy to use interface for leaving revision requests on the video itself to save a bunch of time going back and forth or recording looms.",
  },
  {
    name: "Adam LeClair",
    role: "SEMRUSH | Video Producer",
    photo: `${IMG}/Kqnku3aNmIWmjpqarptuv8bpE.jpeg`,
    quote:
      "Eric at VideoRep was a real pleasure to work with! He came in with great energy, knew how to look good and sound good on camera, and takes direction very well.",
  },
  {
    name: "Arina Dolgopolova",
    role: "VIZBL | Director of Operations",
    photo: `${IMG}/OVXZOtPFE5yb7sJRyRltReCdOI.jpeg`,
    quote:
      "I'm very glad we found VideoRep for our projects! The team were extremely professional in both presenting and editing our videos. When it comes to presenting, VideoRep are simply the best — their voice tone, intonation, and overall delivery engagingly showcased our company for our clients.",
  },
  {
    name: "Danil Nezhdanov",
    role: "NAVIXY | CEO",
    photo: `${IMG}/Yhu8ViBXC0s57qVpen7ReWi9rds.jpeg`,
    quote:
      "VideoRep was a standout choice for our SaaS product videos. Their approach combined professionalism with a knack for understanding our vision quickly. Their work, spanning from acting to editing, was executed with precision and speed, meeting our high standards.",
  },
  {
    name: "Daniel Ben Shitrit",
    role: "KMS Lighthouse | CMO",
    photo: `${IMG}/zbKrbmT8yVwDM1u5jBN9SsZg0.jpeg`,
    quote:
      "VideoRep was able to create excellent video content for us with little effort on our part; they took the initiative to learn about our company on their own and researched relevant content to create the appropriate content (which they did really well). They not only wrote the scripts for us, but they also made special edits to the videos to make them more engaging. We will unquestionably hire VideoRep again for future projects.",
  },
  {
    name: "Jim Sullivan",
    role: "OXSOME | CEO",
    photo: `${IMG}/joBQ6opA1j0PSy6GI6UrWEaleOc.jpeg`,
    quote:
      "They did a great job across the board, but the part that really impressed me was their ability to take on all aspects of the project (writing the script, shooting the video, and editing) on a fairly complex technical issue without much guidance. This was our first time making a video from a blog, and the process couldn't have been easier.",
  },
  {
    name: "Igor Efimenko",
    role: "GEONIX | CEO",
    photo: `${IMG}/GIA95QuWJRtfi4UcOV0dzX5Y818.jpeg`,
    quote:
      "I highly recommend the VideoRep team for any video production needs. They did an outstanding job creating a promotional video for our company. From the initial concept to the final product, they were professional, responsive, and easy to work with.",
  },
  {
    name: "Jessie Huang",
    role: "D5 RENDER | CMO",
    photo: `${IMG}/Pp5KcsxJyJ8Yk48ZgDQomrSpF4.jpeg`,
    quote:
      "What a great video partner. The communication is highly efficient, and they are able to grasp your needs and provide demos in a very short amount of time. They are very professional.",
  },
  {
    name: "Jill Voinier",
    role: "BUSINESSLOANS.COM | Paid Social Manager",
    photo: `${IMG}/CgDIw32l7bYwWxGqa91FKpDkOpw.jpeg`,
    quote:
      "VideoRep is the best! We hired them for 3 different projects and each time their communication was prompt and clear — the product was delivered quickly and the deliverable was super professional and exactly what we were looking for.",
  },
  {
    name: "Kabir Suda",
    role: "RIPPLOR | CEO",
    photo: `${IMG}/1ajIXeTTHOik6gJfAX7SLSgEm8.jpeg`,
    quote:
      "From the start, they demonstrated a high level of professionalism, delivering quality work with impressive speed. Their proactive approach ensured that the project ran smoothly, and they was always ahead of schedule, which I truly appreciated.",
  },
  {
    name: "Konstantin Shyshkin",
    role: "SPIRAL TECHNOLOGY | CEO",
    photo: `${IMG}/A8kV9PZhfbAF9zQQGYNog73BVvI.webp`,
    quote:
      "We asked VideoRep to record a product tutorial for one of our VIP clients. They asked all the questions to understand the script and completed everything on the first try. The team loved the video!",
  },
];

const comparison = {
  features: [
    {
      label: "Turnaround Time",
      videorep: "5–7 Days",
      agency: "10+ days",
      ai: "Instant",
      freelancer: "Varies",
      influencer: "1–2 Days",
    },
    {
      label: "Video Quality",
      videorep: "Authentic & Clear",
      agency: "High Quality",
      ai: "Robotic",
      freelancer: "Inconsistent",
      influencer: "UGC-Style",
    },
    {
      label: "Human Presenters",
      videorep: "Included",
      agency: "Extra Cost",
      ai: "Not available",
      freelancer: "Extra cost",
      influencer: "Included",
    },
    {
      label: "Script Writing",
      videorep: "Included",
      agency: "Extra Cost + Time",
      ai: "Basic",
      freelancer: "Sometimes",
      influencer: "Not Aligned",
    },
    {
      label: "Revisions",
      videorep: "Fast & included",
      agency: "Slow & costly",
      ai: "Unlimited",
      freelancer: "Slow",
      influencer: "Limited",
    },
    {
      label: "Results Focus",
      videorep: "Conversion-Driven",
      agency: "Campaign-Driven",
      ai: "Trust Risk",
      freelancer: "Task-Driven",
      influencer: "Audience-Driven",
    },
  ],
};

const builtFor = [
  "We publish blog content every month",
  "We believe video matters, but don't want to film internally",
  "We want real humans — not AI avatars",
  "We care about SEO and long-term authority (DR 30+)",
  "We want consistent video, not one-offs",
];

const notFor = [
  "We don't have blog content",
  "We just want to test one video",
  "We need heavy animation or ad creatives",
  "We're looking for instant, AI-generated content",
  "We don't plan to publish consistently",
];

const faqItems = [
  {
    question: "1. How Do You Turn Our Blog Into A Video Script?",
    answer: (
      <p>
        We use our internal script system to adapt your blog into a
        presenter-led video script. We keep your topic, intent, SEO keywords,
        and key terms intact — and rewrite the structure so it lands clearly
        on camera. You review and approve the script before we film.
      </p>
    ),
  },
  {
    question: "2. Do You Keep Our SEO Keywords And Search Intent?",
    answer: (
      <p>
        Yes. Every script is built to preserve the core keywords, topic focus,
        and search intent of your original blog so the video supports the same
        SEO and AI-visibility work your content already does.
      </p>
    ),
  },
  {
    question: "3. Can We Write Our Own Script Instead?",
    answer: (
      <p>
        Absolutely. If your team prefers to write the script, we&rsquo;ll
        present and produce from it. We&rsquo;ll only flag anything that might
        not land well on camera and suggest light adjustments for clarity.
      </p>
    ),
  },
  {
    question: "4. What If Our Blog Is Long Or Complex?",
    answer: (
      <p>
        Long blogs are common — we break them down into the clearest,
        highest-value core and structure the video around that. For especially
        dense topics, we can also deliver a series of shorter videos from one
        blog.
      </p>
    ),
  },
  {
    question: "5. How Do You Keep Videos On-Brand If We're Not On Camera?",
    answer: (
      <p>
        We align on your brand guidelines during onboarding — typography,
        colors, tone of voice, visual style. Your VideoRep is trained to
        deliver in your brand voice, and every edit is styled to match your
        look and feel.
      </p>
    ),
  },
  {
    question: "6. Are VideoReps Real People?",
    answer: (
      <p>
        Yes. Every VideoRep is a real, vetted human presenter. No AI avatars,
        no synthetic voices. That&rsquo;s the whole point — trust compounds
        when real people explain your content.
      </p>
    ),
  },
  {
    question: "7. What Quality Control Is In Place?",
    answer: (
      <p>
        Every video goes through script review, presenter rehearsal, multi-pass
        editing, and a final QA check before delivery. Revisions are fast and
        included.
      </p>
    ),
  },
  {
    question: "8. How Does This Help With AI Search And LLM Visibility?",
    answer: (
      <p>
        AI answer engines and modern search increasingly pull video content
        into results for educational queries. Human-led video attached to your
        blog content makes your expertise more likely to be surfaced — and
        trusted — in both traditional and AI-driven search.
      </p>
    ),
  },
  {
    question: "9. Where Should We Publish The Videos?",
    answer: (
      <p>
        We deliver formats ready for your blog (embedded at the top of the
        post), YouTube, LinkedIn, and social. Most teams publish to their blog
        and YouTube first, then repurpose short-form clips for social.
      </p>
    ),
  },
  {
    question: "10. What Do We Receive For Each Video?",
    answer: (
      <p>
        You receive the finished long-form video, short-form repurposed clips,
        captions/transcripts, and any relevant brand-styled exports. Everything
        is ready to publish.
      </p>
    ),
  },
  {
    question: "11. What's The Typical Turnaround Time?",
    answer: (
      <p>
        Our standard turnaround is 5–7 business days per blog. Once we&rsquo;re
        in rhythm with your monthly queue, publishing stays consistent with no
        gaps.
      </p>
    ),
  },
  {
    question: "12. What Usage Rights Do We Get?",
    answer: (
      <p>
        Full usage rights for your own social and marketing distribution.
        Videos are licensed for your brand&rsquo;s channels — not for resale or
        sublicensing.
      </p>
    ),
  },
];

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function BlogVideosPage() {
  return (
    <>
      {/* Custom Nav — matches Framer header exactly */}
      <header
        className="sticky top-0 z-50 w-full"
        style={{ background: "transparent", paddingTop: "1rem" }}
      >
        <div
          className="mx-auto flex items-center justify-between rounded-full px-6 py-3"
          style={{
            maxWidth: 1200,
            background: "#5856ff",
            color: "white",
            margin: "0 auto",
            boxShadow: "0 4px 20px rgba(88, 86, 255, 0.2)",
          }}
        >
          <Link href="/blogvideos" className="flex items-center gap-2">
            <span className="text-lg font-bold">
              Video<span className="italic">Rep</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#how-it-works" className="hover:opacity-80">
              How It Works
            </a>
            <a href="#use-cases" className="hover:opacity-80">
              Use Cases
            </a>
            <a href="#case-studies" className="hover:opacity-80">
              Case Studies
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
          </nav>
          <a
            href={CAL_URL}
            className="rounded-full px-5 py-2 text-sm font-semibold"
            style={{ background: "#0d0d1a", color: "white" }}
          >
            Book a Call ›
          </a>
        </div>
      </header>

      <main
        id="main-content"
        style={{ background: "#ffffff", color: "#1a1a2e" }}
      >
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #e9ecff 0%, #edefff 45%, #f5f3ff 100%)",
          }}
        >
          <div
            className="mx-auto text-center relative"
            style={{
              maxWidth: 1100,
              paddingTop: 80,
              paddingBottom: 80,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <span
              className="inline-block rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{
                background: "#d8ddff",
                color: "#1a1a2e",
                padding: "6px 14px",
                marginBottom: 28,
              }}
            >
              For B2B SEO &amp; Content Teams
            </span>

            <h1
              style={{
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.08,
                color: "#0d0d1a",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Turn Ranking Blogs Into
              <br />
              <span style={{ color: "#5856ff" }}>Human-Led Videos</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "#4a4a6e",
                maxWidth: 500,
                margin: "0 auto 36px",
                lineHeight: 1.6,
              }}
            >
              VideoRep turns your written blog content into clear, educational
              videos. 100% Done-For-You and presented by real, trained video
              presenters.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CAL_URL}
                className="rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
                style={{ background: "#5856ff", color: "white" }}
              >
                Book A Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
                style={{
                  background: "white",
                  color: "#1a1a2e",
                  border: "1.5px solid #d8ddff",
                }}
              >
                Watch How It Works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              </a>
            </div>

            {/* Stars + Trust */}
            <div className="flex flex-col items-center gap-3 mt-10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    style={{ color: "#FFB800", fontSize: 20 }}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-sm font-semibold"
                style={{ color: "#1a1a2e" }}
              >
                Trusted By 200+ Global B2B brands
              </p>
              <div className="flex -space-x-2 mt-2">
                {avatars.map((a, i) => (
                  <Image
                    key={i}
                    src={a}
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGO BAR ── */}
        <section
          className="py-14"
          style={{
            background:
              "linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)",
          }}
        >
          <div
            className="mx-auto px-6 flex items-center justify-center flex-wrap"
            style={{ maxWidth: 1100, gap: "3rem 3.5rem" }}
          >
            {logos.map((l, i) => (
              <img
                key={i}
                src={l.src}
                alt={l.alt}
                className="h-7 w-auto"
                style={{ opacity: 0.55, filter: "grayscale(100%)" }}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          id="how-it-works"
          className="py-24"
          style={{ background: "#ffffff" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                How It Works
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                From Blog To Video
                <br />
                <span style={{ color: "#5856ff" }}>Without The Headache</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 620,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                You provide the written content. We turn it into consistent,
                human-led video… ready to publish.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  n: "01",
                  t: "Share Your Blog",
                  d: "Send us your written blog content (published or not).",
                },
                {
                  n: "02",
                  t: "Choose Your VideoRep",
                  d: "Select a vetted presenter who represents your brand clearly.",
                },
                {
                  n: "03",
                  t: "Get Your Videos",
                  d: "We deliver polished, on-brand video files ready to publish.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-3xl p-8"
                  style={{
                    background: "#f5f3ff",
                    border: "1px solid #e8e5ff",
                  }}
                >
                  <div
                    className="text-5xl font-bold mb-6"
                    style={{ color: "#5856ff" }}
                  >
                    {s.n}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0d0d1a" }}
                  >
                    {s.t}
                  </h3>
                  <p style={{ color: "#4a4a6e", lineHeight: 1.6 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section
          id="use-cases"
          className="py-24"
          style={{ background: "#0d0d1a", color: "white" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#a5a3ff", marginBottom: 16 }}
              >
                Use Cases
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "white",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                How Teams Use{" "}
                <span style={{ color: "#a5a3ff" }}>VideoRep</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#b4b2d4",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Five common ways SEO and content teams turn written content into
                consistent video… without relying on founders or internal teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {useCases.map((uc) => (
                <div
                  key={uc.num}
                  className="rounded-3xl p-7"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="text-sm font-bold mb-3"
                    style={{ color: "#a5a3ff" }}
                  >
                    {uc.num}.
                  </div>
                  <h3 className="text-lg font-bold mb-3">{uc.title}</h3>
                  <p
                    className="text-sm"
                    style={{ color: "#b4b2d4", lineHeight: 1.6 }}
                  >
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <a
                href={CAL_URL}
                className="rounded-full px-8 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
                style={{ background: "#5856ff", color: "white" }}
              >
                Book A Call
              </a>
            </div>

            {/* Featured use case */}
            <div
              className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex-1">
                <div
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{ color: "#a5a3ff", letterSpacing: "-0.02em" }}
                >
                  86,000+
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Views From A Single Educational YouTube Video
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{ color: "#b4b2d4" }}
                >
                  MedShadow Healthcare Education Blog Video
                </p>
                <a
                  href="#case-studies"
                  className="text-sm font-semibold inline-flex items-center gap-1"
                  style={{ color: "#a5a3ff" }}
                >
                  View Use Case →
                </a>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2">
                <div
                  className="rounded-2xl overflow-hidden aspect-video"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <img
                    src={`${IMG}/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg`}
                    alt="MedShadow Healthcare"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-24" style={{ background: "#ffffff" }}>
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                What You Get
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Trust That{" "}
                <span style={{ color: "#5856ff" }}>
                  Compounds Over Time
                </span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Not just videos — but clarity, consistency, and credibility
                your audience (and team) can rely on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatYouGet.map((w) => (
                <div
                  key={w.title}
                  className="rounded-3xl p-7"
                  style={{
                    background: "#f8f7ff",
                    border: "1px solid #e8e5ff",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "#0d0d1a" }}
                  >
                    {w.title}
                  </h3>
                  <p style={{ color: "#4a4a6e", lineHeight: 1.6, fontSize: 15 }}>
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEARCH + AI DISCOVERY ── */}
        <section
          className="py-24"
          style={{
            background:
              "linear-gradient(180deg, #f5f3ff 0%, #eef1ff 100%)",
          }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Search + AI Discovery
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Written Content Alone
                <br />
                <span style={{ color: "#5856ff" }}>Isn&rsquo;t Enough Anymore</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto 28px",
                  lineHeight: 1.6,
                }}
              >
                AI answers and modern search increasingly surface video for
                educational queries. Video helps your expertise get shown —
                and trusted.
              </p>
              <a
                href={CAL_URL}
                className="rounded-full px-7 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
                style={{ background: "#5856ff", color: "white" }}
              >
                Book A Call
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "User Searches a Topic",
                "Video Appears in Results",
                "Pulled into AI Answers",
                "Trusted Brand Visibility",
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "white",
                    border: "1px solid #e8e5ff",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#5856ff" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#0d0d1a" }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MONTHLY VIDEO ENGINE ── */}
        <section className="py-24" style={{ background: "#ffffff" }}>
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Monthly Video Engine
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                You Bring the Blogs.
                <br />
                <span style={{ color: "#5856ff" }}>We Ship The Videos.</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto 28px",
                  lineHeight: 1.6,
                }}
              >
                Choose how many posts you want converted each month. We handle
                everything end-to-end — from managing your VideoRep and script
                adaptation to editing and final delivery.
              </p>
              <a
                href={CAL_URL}
                className="rounded-full px-7 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
                style={{ background: "#5856ff", color: "white" }}
              >
                Book A Call
              </a>
            </div>
          </div>
        </section>

        {/* ── FREE SCRIPT CTA ── */}
        <section
          className="py-16"
          style={{ background: "#f5f3ff" }}
        >
          <div
            className="mx-auto px-6 rounded-3xl p-10 md:p-14 text-center"
            style={{
              maxWidth: 900,
              background: "white",
              border: "1px solid #e8e5ff",
            }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#5856ff", marginBottom: 16 }}
            >
              Free Video Script
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.8vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#0d0d1a",
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              Turn Your Best Blog Into a Video Script
              <br />
              <span style={{ color: "#5856ff" }}>For Free!</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#4a4a6e",
                maxWidth: 520,
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Paste your highest-performing blog. We&rsquo;ll convert it into a
              structured, human-led video script using our internal system.
            </p>
            <a
              href={CAL_URL}
              className="rounded-full px-8 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
              style={{ background: "#5856ff", color: "white" }}
            >
              Get My Free Script
            </a>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section
          id="case-studies"
          className="py-24"
          style={{ background: "#ffffff" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Case Studies
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Turning Search Authority Into
                <br />
                <span style={{ color: "#5856ff" }}>Video Authority</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                How content teams converted ranking blog posts into trusted,
                on-camera education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div
                className="rounded-3xl p-7 flex flex-col"
                style={{
                  background: "#f8f7ff",
                  border: "1px solid #e8e5ff",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "#4a4a6e" }}
                >
                  Non-Profit | Health Education
                </div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#5856ff", letterSpacing: "-0.02em" }}
                >
                  86,000+ Views
                </div>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#0d0d1a" }}
                >
                  On A Single Educational YouTube Video
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#4a4a6e", lineHeight: 1.6 }}
                >
                  Human-led health education videos built for clarity and trust.
                </p>
                <blockquote
                  className="text-sm italic mb-5"
                  style={{ color: "#4a4a6e" }}
                >
                  &ldquo;Top-notch presentation and production.&rdquo;
                  <footer
                    className="mt-2 not-italic text-xs"
                    style={{ color: "#5856ff" }}
                  >
                    — Dante Steward | Creative Director
                  </footer>
                </blockquote>
                <ul
                  className="text-sm space-y-1.5 mb-5"
                  style={{ color: "#4a4a6e" }}
                >
                  <li>&ldquo;Spleen Organ Health&rdquo;</li>
                  <li>&ldquo;Process Excellence&rdquo;</li>
                </ul>
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={CAL_URL}
                    className="rounded-full px-5 py-2.5 text-xs font-semibold text-center"
                    style={{ background: "#5856ff", color: "white" }}
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              {/* Case 2 */}
              <div
                className="rounded-3xl p-7 flex flex-col"
                style={{
                  background: "#f8f7ff",
                  border: "1px solid #e8e5ff",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "#4a4a6e" }}
                >
                  B2B SaaS | Workflow Automation
                </div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#5856ff", letterSpacing: "-0.02em" }}
                >
                  3x Increase
                </div>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#0d0d1a" }}
                >
                  In Qualified Audience Engagement
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#4a4a6e", lineHeight: 1.6 }}
                >
                  Turned SEO blog content into thought-leadership video that
                  held attention.
                </p>
                <blockquote
                  className="text-sm italic mb-5"
                  style={{ color: "#4a4a6e" }}
                >
                  &ldquo;Higher engagement and stronger time on page.&rdquo;
                  <footer
                    className="mt-2 not-italic text-xs"
                    style={{ color: "#5856ff" }}
                  >
                    — Brandon Grimes | Marketing Manager
                  </footer>
                </blockquote>
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={CAL_URL}
                    className="rounded-full px-5 py-2.5 text-xs font-semibold text-center"
                    style={{ background: "#5856ff", color: "white" }}
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              {/* Case 3 */}
              <div
                className="rounded-3xl p-7 flex flex-col"
                style={{
                  background: "#f8f7ff",
                  border: "1px solid #e8e5ff",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "#4a4a6e" }}
                >
                  Career Tech | Content Marketing
                </div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#5856ff", letterSpacing: "-0.02em" }}
                >
                  $7,000+
                </div>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#0d0d1a" }}
                >
                  In Production Cost Savings
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#4a4a6e", lineHeight: 1.6 }}
                >
                  Converted a high-performing blog into video, without agencies
                  or internal filming.
                </p>
                <blockquote
                  className="text-sm italic mb-5"
                  style={{ color: "#4a4a6e" }}
                >
                  &ldquo;Seriously impressive quality and execution.&rdquo;
                  <footer
                    className="mt-2 not-italic text-xs"
                    style={{ color: "#5856ff" }}
                  >
                    — Jacob Jacquet | CEO
                  </footer>
                </blockquote>
                <p
                  className="text-xs mb-5"
                  style={{ color: "#4a4a6e" }}
                >
                  &ldquo;Best Cover Letters: Examples, Templates, and Writing
                  Tips&rdquo;
                </p>
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={CAL_URL}
                    className="rounded-full px-5 py-2.5 text-xs font-semibold text-center"
                    style={{ background: "#5856ff", color: "white" }}
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT REVIEWS ── */}
        <section
          className="py-24"
          style={{ background: "#0d0d1a", color: "white" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#a5a3ff", marginBottom: 16 }}
              >
                Client Reviews
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "white",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Trusted By Teams Who
                <br />
                <span style={{ color: "#a5a3ff" }}>Care About Quality</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#b4b2d4",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                From SaaS &amp; Service founders to CMOs, teams choose VideoRep
                for clarity, speed, and consistent delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl p-7 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: "#FFB800", fontSize: 14 }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote
                    className="text-sm italic mb-6 flex-1"
                    style={{ color: "#d4d2f0", lineHeight: 1.65 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p
                        className="text-xs"
                        style={{ color: "#a5a3ff" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROVEN OUTCOMES ── */}
        <section className="py-24" style={{ background: "#ffffff" }}>
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Proven Outcomes
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                What Changes When Blogs Become
                <br />
                <span style={{ color: "#5856ff" }}>Human-Led Video</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Higher engagement. Lower production friction. Stronger
                visibility.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { n: "3x", big: "Higher", label: "Conversion Rates" },
                { n: "45%", big: "Lower", label: "Production Costs" },
                { n: "30%", big: "Higher", label: "Audience Engagement" },
                { n: "120+", big: "Hours Saved", label: "Per Quarter" },
                { n: "4x", big: "Faster", label: "Publishing Output" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-6 text-center"
                  style={{
                    background: "#f8f7ff",
                    border: "1px solid #e8e5ff",
                  }}
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "#5856ff", letterSpacing: "-0.02em" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#0d0d1a" }}
                  >
                    {s.big}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "#4a4a6e" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section
          className="py-24"
          style={{
            background:
              "linear-gradient(180deg, #f5f3ff 0%, #eef1ff 100%)",
          }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Comparison
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                The Smarter Alternative
                <br />
                <span style={{ color: "#5856ff" }}>To AI &amp; Agencies</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                The fastest path to consistent, trustworthy video, without
                internal production.
              </p>
            </div>

            <div
              className="rounded-3xl overflow-hidden overflow-x-auto"
              style={{
                background: "white",
                border: "1px solid #e8e5ff",
              }}
            >
              <table className="w-full text-sm" style={{ minWidth: 800 }}>
                <thead>
                  <tr style={{ background: "#f8f7ff" }}>
                    <th
                      className="text-left p-4 font-semibold"
                      style={{ color: "#0d0d1a" }}
                    >
                      Feature
                    </th>
                    <th
                      className="text-left p-4 font-bold"
                      style={{ color: "#5856ff" }}
                    >
                      VideoRep
                    </th>
                    <th
                      className="text-left p-4 font-semibold"
                      style={{ color: "#4a4a6e" }}
                    >
                      Agency
                    </th>
                    <th
                      className="text-left p-4 font-semibold"
                      style={{ color: "#4a4a6e" }}
                    >
                      AI Avatars
                    </th>
                    <th
                      className="text-left p-4 font-semibold"
                      style={{ color: "#4a4a6e" }}
                    >
                      Freelancer
                    </th>
                    <th
                      className="text-left p-4 font-semibold"
                      style={{ color: "#4a4a6e" }}
                    >
                      Influencer Creators
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.features.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderTop: "1px solid #e8e5ff",
                        background: i % 2 === 0 ? "white" : "#fafaff",
                      }}
                    >
                      <td
                        className="p-4 font-semibold"
                        style={{ color: "#0d0d1a" }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="p-4 font-semibold"
                        style={{ color: "#5856ff" }}
                      >
                        {row.videorep}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: "#4a4a6e" }}
                      >
                        {row.agency}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: "#4a4a6e" }}
                      >
                        {row.ai}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: "#4a4a6e" }}
                      >
                        {row.freelancer}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: "#4a4a6e" }}
                      >
                        {row.influencer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FIT CHECK ── */}
        <section className="py-24" style={{ background: "#ffffff" }}>
          <div className="mx-auto px-6" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                Fit Check
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Built for Teams Who
                <br />
                <span style={{ color: "#5856ff" }}>
                  Take Content Seriously
                </span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#4a4a6e",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                For B2B teams who already invest in content — and want their
                videos to build the same trust, authority, and AI visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "#eefce9",
                  border: "1px solid #c7eabc",
                }}
              >
                <h3
                  className="text-xl font-bold mb-5 flex items-center gap-2"
                  style={{ color: "#0a6b2e" }}
                >
                  <span
                    className="inline-flex items-center justify-center rounded-full w-7 h-7"
                    style={{ background: "#0a6b2e", color: "white" }}
                  >
                    <CheckIcon />
                  </span>
                  Built for
                </h3>
                <ul className="space-y-3">
                  {builtFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm"
                      style={{ color: "#0d4a1e", lineHeight: 1.55 }}
                    >
                      <span
                        style={{
                          color: "#0a6b2e",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-3xl p-8"
                style={{
                  background: "#fff0f0",
                  border: "1px solid #f5cfcf",
                }}
              >
                <h3
                  className="text-xl font-bold mb-5 flex items-center gap-2"
                  style={{ color: "#a4262c" }}
                >
                  <span
                    className="inline-flex items-center justify-center rounded-full w-7 h-7"
                    style={{ background: "#a4262c", color: "white" }}
                  >
                    <XIcon />
                  </span>
                  Not for
                </h3>
                <ul className="space-y-3">
                  {notFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm"
                      style={{ color: "#6e1b20", lineHeight: 1.55 }}
                    >
                      <span
                        style={{
                          color: "#a4262c",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <XIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="py-24"
          style={{ background: "#f8f7ff" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: 900 }}>
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#5856ff", marginBottom: 16 }}
              >
                FAQ
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0d0d1a",
                  letterSpacing: "-0.02em",
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="py-24"
          style={{
            background:
              "linear-gradient(135deg, #5856ff 0%, #8a88ff 100%)",
            color: "white",
          }}
        >
          <div
            className="mx-auto px-6 text-center"
            style={{ maxWidth: 900 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.8)", marginBottom: 16 }}
            >
              Ready When You Are
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Turn Your Best Blogs Into
              <br />
              High Quality, Branded Video Content
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 640,
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              If you already publish content, the next step is simple: make it
              visible, watchable, and trustworthy.
            </p>
            <a
              href={CAL_URL}
              className="rounded-full px-8 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
              style={{ background: "white", color: "#5856ff" }}
            >
              Book a Call
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── FOOTER NOTE (before main Footer) ── */}
        <section
          className="py-12 text-center"
          style={{ background: "#ffffff" }}
        >
          <p
            className="text-sm"
            style={{ color: "#4a4a6e", maxWidth: 600, margin: "0 auto" }}
          >
            Human-led video for B2B teams who care about clarity, trust, and
            results.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
