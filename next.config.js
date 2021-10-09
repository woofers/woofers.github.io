const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  distDir: 'build',
  webpack5: true,
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  webpack(config, { isServer }) {
    config.plugins.push(new ESLintPlugin())
    const image = config.module.rules.find(({ loader }) => loader === 'next-image-loader')
    const options = image.options
    image.test = /\.(png|jpg|jpeg|gif|webp|ico|bmp)$/i
    image.use = [
      { loader: path.resolve('image.js') },
      { loader: 'next-image-loader', options }
    ]
    delete image.loader
    delete image.options
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
  basePath: '/jx-next',
  assetPrefix: '/jx-next/',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/[[...section]]' },
      '/projects/': { page: '/[[...section]]' },
      //'/me/intro/': { page: '/[[...section]]' },
      //'/me/tech/': { page: '/[[...section]]' },
      //'/me/hobby-1/': { page: '/[[...section]]' },
      //'/me/hobby-2/': { page: '/[[...section]]' },
      //'/work/': { page: '/[[...section]]' },
      //'/work/liv-rent/': { page: '/[[...section]]' },
      //'/work/fts/': { page: '/[[...section]]' },
      //'/work/react-wavify/': { page: '/[[...section]]' },
      //'/work/alien-expansion/': { page: '/[[...section]]' },
      //'/contact/': { page: '/[[...section]]' }
    }
  }
}
