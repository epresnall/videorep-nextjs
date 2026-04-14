import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blogvideos",
        destination: "https://worthy-level-665486.framer.app/",
        permanent: false,
      },
      {
        source: "/blogvideos/:path*",
        destination: "https://worthy-level-665486.framer.app/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
