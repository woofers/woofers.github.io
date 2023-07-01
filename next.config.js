const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
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
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      // config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    return config
  }
}

module.exports = withContentlayer(nextConfig)
