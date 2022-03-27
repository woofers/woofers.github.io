const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  distDir: 'build',
  swcMinify: true,
  webpack5: true,
  reactStrictMode: true,
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
      '/': { page: '/[[...section]]' },
      '/projects/': { page: '/[[...section]]' }
    }
  }
}
