import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //domains: ["cdn.dummyjson.com", "fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
