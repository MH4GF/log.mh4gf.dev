/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // https://www.npmjs.com/package/@svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { withSentryConfig } = require('@sentry/nextjs')
const sentryWebpackPluginOptions = {
  dryRun: process.env.RELEASE !== 'true',
}
const withTM = require('next-transpile-modules')(['notn'])

module.exports = withBundleAnalyzer(
  withTM(withSentryConfig(nextConfig, sentryWebpackPluginOptions)),
)
