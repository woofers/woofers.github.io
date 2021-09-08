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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/[[...section]]' },
      '/work': { page: '/[[...section]]' },
      '/contact': { page: '/[[...section]]' }
    }
  }
}
