const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    typedRoutes: true
  },
  images: { unoptimized: true }
}

module.exports = withContentlayer(nextConfig)
