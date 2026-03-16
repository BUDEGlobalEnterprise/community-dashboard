import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // fine for now; remove later if you want Next/Image optimizations
    remotePatterns: [
      { protocol: "https", hostname: "www.budeglobal.in", pathname: "/**" },
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
