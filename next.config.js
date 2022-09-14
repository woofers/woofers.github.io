const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')
const bundle = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundle({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  distDir: 'build',
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
    domains: ['jaxs.onl']
  },
  webpack(config, { isServer }) {
    config.plugins.push(new ESLintPlugin())
    config.module.rules.push({
      test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false
                }
              }
            }
          },
          'file-loader'
        ],
    })
    return config
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/[[...section]]' }
    }
  }
})
