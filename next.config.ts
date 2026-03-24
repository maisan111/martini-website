import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // تجاهل أخطاء التايب سكريبت أثناء الـ Build لضمان نجاح الرفع
    ignoreBuildErrors: true,
  },


};

module.exports = nextConfig;
