/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
}

module.exports = nextConfig