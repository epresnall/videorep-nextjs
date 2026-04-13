import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VideoRep Terms of Service — the terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="section" style={{ paddingTop: "8rem" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h1>Terms of Service</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}><em>Last updated: April 2026</em></p>
            <p>These Terms of Service are being updated. Please check back soon or contact <a href="mailto:eric@videorep.co">eric@videorep.co</a> with any questions.</p>
            <p style={{ marginTop: "3rem" }}><Link href="/" className="btn btn--secondary btn--small">&larr; Back to Home</Link></p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
