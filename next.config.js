/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_API_BASE_URL: process.env.APP_API_BASE_URL,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['cdn.shopify.com'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig

