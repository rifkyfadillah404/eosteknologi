import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
