const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  distDir: 'build',
  webpack5: true,
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new ESLintPlugin())
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    })
    return config
  }
}