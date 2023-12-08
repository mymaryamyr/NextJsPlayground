/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    reactMode: 'concurrent',
    reactStrictMode: true,
    reactRefresh: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
