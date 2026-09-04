import type { NextConfig } from "next";

const BACKEND_APP = "https://ai-visibility-report-tau.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.mentionbee.ai" }],
        destination: "https://mentionbee.ai/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mentionbee.ai" }],
        destination: "https://mentionbee.ai/:path*",
        permanent: true,
      },
      {
        source:
          "/report/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
        destination: `${BACKEND_APP}/report/:id`,
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND_APP}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
