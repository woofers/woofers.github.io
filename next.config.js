const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  distDir: 'build',
  webpack5: true,
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  webpack(config) {
    config.plugins.push(new ESLintPlugin())
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    })
    return config
  },
  trailingSlash: true,
  basePath: '/jx-next',
  assetPrefix: '/jx-next/',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/[[...section]]' },
      '/me.': { page: '/[[...section]]' },
      '/me/intro/': { page: '/[[...section]]' },
      '/me/tech/': { page: '/[[...section]]' },
      '/me/hobby-1/': { page: '/[[...section]]' },
      '/me/hobby-2/': { page: '/[[...section]]' },
      '/work/': { page: '/[[...section]]' },
      '/work/liv-rent/': { page: '/[[...section]]' },
      '/work/fts/': { page: '/[[...section]]' },
      '/work/react-wavify/': { page: '/[[...section]]' },
      '/work/alien-expansion/': { page: '/[[...section]]' },
      '/contact/': { page: '/[[...section]]' }
    }
  }
}
