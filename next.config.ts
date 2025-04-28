import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  experimental: {
    optimizeCss: true, 
  },
};

export default nextConfig;
