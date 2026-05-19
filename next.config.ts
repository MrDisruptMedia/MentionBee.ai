import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/report/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
        destination: "https://ai-visibility-report-tau.vercel.app/report/:id",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ai-visibility-report-tau.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
