import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable error overlay to work around global-error bug in Next.js 16.2.3
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
