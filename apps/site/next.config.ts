import {
  createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin'
import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['@jaxson/ui', '@jaxson/hooks'],
  trailingSlash: true,
  experimental: {
    viewTransition: true
  }
} satisfies NextConfig

export default withContentlayer(withVanillaExtract(nextConfig))
