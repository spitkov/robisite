/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig 