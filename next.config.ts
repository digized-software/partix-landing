import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/join/:path*',
        destination: 'https://app.partix.xyz/join/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
