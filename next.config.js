/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return []
  },
  // Change port to 3003
  server: {
    port: 3003,
  },
} 