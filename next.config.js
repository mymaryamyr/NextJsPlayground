/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    reactMode: 'concurrent',
    reactStrictMode: true,
    reactRefresh: true,
  },
};

module.exports = nextConfig;
