/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // https://www.npmjs.com/package/@svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
