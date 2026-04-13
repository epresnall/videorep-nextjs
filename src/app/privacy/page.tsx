import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VideoRep Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="section" style={{ paddingTop: "8rem" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h1>Privacy Policy</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}><em>Last updated: April 2026</em></p>
            <p>This Privacy Policy is being updated. Please check back soon or contact <a href="mailto:eric@videorep.co">eric@videorep.co</a> with any questions.</p>
            <p style={{ marginTop: "3rem" }}><Link href="/" className="btn btn--secondary btn--small">&larr; Back to Home</Link></p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
