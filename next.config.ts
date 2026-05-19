import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source:
          "/report/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
        destination: "https://ai-visibility-report-tau.vercel.app/report/:id",
      },
      {
        source: "/api/:path*",
        destination: "https://ai-visibility-report-tau.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
