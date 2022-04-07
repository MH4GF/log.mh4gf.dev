/** @type {import('next').NextConfig} */

const { ESBuildMinifyPlugin } = require('esbuild-loader')

function useEsbuildMinify(config, options) {
  const { minimizer } = config.optimization
  const terserIndex = minimizer.findIndex(
    (minifier) => minifier.constructor.name === 'TerserPlugin',
  )

  minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options))
}

function useEsbuildLoader(config, options) {
  const { rules } = config.module
  const rule = rules.find((rule) => rule.test.test('.js'))

  rule.use = {
    loader: 'esbuild-loader',
    options,
  }
}

module.exports = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    )

    useEsbuildMinify(config)
    useEsbuildLoader(config, {
      loader: 'tsx',
      target: 'es2020',
    })

    return config
  },
}
