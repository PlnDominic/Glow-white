import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Without this, browsers revalidate every public/ image on each visit and each check counts as a CDN request.
  // Replaced images can stay stale for a week unless renamed. PDF is left out so price changes show at once.
  async headers() {
    return [
      {
        source: "/:path*.(webp|jpeg)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
  // Disable error overlay to work around global-error bug in Next.js 16.2.3
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
