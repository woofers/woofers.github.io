const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: { unoptimized: true }
}

module.exports = withContentlayer(nextConfig)
