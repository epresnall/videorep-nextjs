"use client";

import { useState } from "react";
import Link from "next/link";

const stories = [
  { industry: "finance", tag: "Finance", initials: "FA", quote: "We had to pause our ad spend because we were acquiring clients faster than we could handle. That\u2019s never happened with static creative.", name: "Client Under NDA", title: "Managing Partner", company: "Boutique Financial Advisory", metrics: [{ value: "2.28x", label: "CTR Improvement" }, { value: "50%", label: "CPA Reduction" }, { value: "3x", label: "Conversion Rate" }, { value: "7+ mo", label: "No Ad Fatigue" }], link: "/case-study-financial-advisory" },
  { industry: "finance", tag: "Finance", initials: "JV", quote: "Best performing ad we\u2019ve ever run. Zero revisions needed. Our slowest season turned into our busiest.", name: "Jill Vonier", title: "Social Media Advertiser", company: "BusinessLoans.com", metrics: [{ value: "6 mo", label: "Positive ROAS" }, { value: "#1", label: "Best Ad in Company History" }, { value: "0", label: "Revisions Needed" }], link: null },
  { industry: "enterprise", tag: "Enterprise", initials: "HP", quote: "14 videos delivered in 2 weeks. Saved us $25K compared to our usual agency. Every single one was on-brand and on-time.", name: "Harshita Pulla", title: "Strategy & Insights Manager", company: "Unilever", metrics: [{ value: "$25K", label: "Cost Savings" }, { value: "14", label: "Videos Delivered" }, { value: "2 wk", label: "Turnaround" }], link: null },
  { industry: "services", tag: "Services", initials: "IC", quote: "3x ROAS on our first campaign. We\u2019d been struggling with static ads for months. Eric\u2019s video ads cracked the code.", name: "Idan Cohen", title: "Owner", company: "Electric Heroes", metrics: [{ value: "3x", label: "Return on Ad Spend" }, { value: "Top", label: "Most Profitable Channel" }], link: null },
  { industry: "finance", tag: "FinTech", initials: "TR", quote: "22 leads in 7 days at $5 per lead. Our previous campaigns never came close. Eric\u2019s process is efficient and the results speak for themselves.", name: "Tomas Ribero", title: "CEO", company: "Fyntra", metrics: [{ value: "22", label: "Leads in 7 Days" }, { value: "$5\u20136", label: "Cost Per Lead" }], link: null },
  { industry: "finance", tag: "Finance", initials: "AD", quote: "Eric\u2019s presenter-led videos gave us a consistent, scalable format that kept performing long after our static ads burned out.", name: "Marketing Team", title: "Paid Media", company: "Accredited Debt Relief", metrics: [{ value: "4+ mo", label: "Ad Longevity" }, { value: "Lower", label: "CPA vs Static Ads" }], link: null },
  { industry: "saas", tag: "SaaS", initials: "TS", quote: "Eric took our complex AI product and turned it into a clear, compelling video that our audience actually responded to.", name: "Timeshark AI", title: "SaaS & AI", company: "Timeshark AI", metrics: [{ value: "Clear", label: "Messaging for Complex Product" }, { value: "Higher", label: "Engagement Rate" }], link: null },
  { industry: "services", tag: "Marketing Agency", initials: "CB", quote: "We white-labeled Eric\u2019s video production for our own clients. The quality and turnaround made us look like heroes.", name: "Coinbound Team", title: "Web3 Marketing Agency", company: "Coinbound", metrics: [{ value: "Fast", label: "White-Label Turnaround" }, { value: "Scalable", label: "Agency Partnership" }], link: null },
  { industry: "ecommerce", tag: "E-Commerce", initials: "GG", quote: "Eric produced video content that captured the excitement of travel experiences in a way that drove real bookings.", name: "GetYourGuide", title: "Travel & Experiences", company: "GetYourGuide", metrics: [{ value: "Higher", label: "Booking Conversions" }, { value: "Multiple", label: "Campaign Formats" }], link: null },
];

const filters = [
  { key: "all", label: "All" },
  { key: "finance", label: "Finance" },
  { key: "saas", label: "SaaS" },
  { key: "enterprise", label: "Enterprise" },
  { key: "services", label: "Services" },
  { key: "ecommerce", label: "E-Commerce" },
];

export default function ResultsFilter() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? stories : stories.filter((s) => s.industry === active);

  return (
    <section className="section" id="case-studies" aria-labelledby="stories-heading">
      <div className="container">
        <div className="section__header">
          <h2 id="stories-heading">Client Success Stories</h2>
          <p>Every project is backed by our performance guarantee. I stay until your video ads beat your best static ad on CTR. No time limit. No extra charge.</p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Filter by industry">
          {filters.map((f) => (
            <button key={f.key} className={`filter-tab${active === f.key ? " filter-tab--active" : ""}`} role="tab" aria-selected={active === f.key} onClick={() => setActive(f.key)}>{f.label}</button>
          ))}
        </div>

        <div className="stories-grid" role="list">
          {filtered.map((s, i) => (
            <article className="story-card" role="listitem" key={i}>
              <div className="story-card__top">
                <div className="story-card__logo-wrap">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect width="48" height="48" rx="8" fill="var(--brand-light)" /><text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="var(--brand)" fontFamily="var(--font-sans)" fontWeight="700" fontSize="16">{s.initials}</text></svg>
                </div>
                <span className="story-card__tag">{s.tag}</span>
              </div>
              <blockquote className="story-card__quote"><p>&ldquo;{s.quote}&rdquo;</p></blockquote>
              <div className="story-card__person">
                <div className="story-card__avatar"><span>{s.initials}</span></div>
                <div><p className="story-card__name">{s.name}</p><p className="story-card__title">{s.title}</p><p className="story-card__company">{s.company}</p></div>
              </div>
              <div className="story-card__metrics">
                {s.metrics.map((m) => (
                  <div className="story-card__metric" key={m.label}><span className="story-card__metric-value">{m.value}</span><span className="story-card__metric-label">{m.label}</span></div>
                ))}
              </div>
              {s.link ? (
                <Link href={s.link} className="btn btn--secondary btn--block story-card__btn">Read Full Case Study</Link>
              ) : (
                <span className="story-card__coming-soon">Full case study coming soon</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
