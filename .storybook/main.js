const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // @see https://github.com/storybookjs/storybook/issues/3916#issuecomment-407681239
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')]
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../'),
    }

    // @see https://github.com/storybookjs/storybook/issues/9070
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    // https://www.npmjs.com/package/@svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
  // @see https://github.com/storybookjs/storybook/issues/15336#issuecomment-906809203
  typescript: { reactDocgen: false },
}
