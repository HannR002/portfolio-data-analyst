import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normal Next.js hosting remains the default. Static exports are opt-in.
  ...(process.env.PORTFOLIO_STATIC_EXPORT === "1"
    ? { output: "export", distDir: ".next-static", trailingSlash: true }
    : {}),
};

export default nextConfig;
