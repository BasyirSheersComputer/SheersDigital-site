import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/features',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/pilot',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/',
        permanent: true,
      },
      {
        source: '/book-demo',
        destination: '/apply',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
