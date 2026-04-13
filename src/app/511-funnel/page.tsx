import type { Metadata } from "next";
import Link from "next/link";
import FunnelClient from "./FunnelClient";

export const metadata: Metadata = {
  title: "The 511 Video Funnel — Outperform Static Ads",
  description: "The 511 Video Funnel — 5 video ads, 1 VSL, 1 next-steps video. Built for your B2B funnel in 5-7 days with a performance guarantee. By Eric Presnall at VideoRep.",
};

export default function FunnelPage() {
  return <FunnelClient />;
}
