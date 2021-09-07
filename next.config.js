module.exports = {
  distDir: 'build',
  webpack5: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    })
    return config
  }
}
