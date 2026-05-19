import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/report/:path*",
        destination: "https://ai-visibility-report-tau.vercel.app/report/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://ai-visibility-report-tau.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
