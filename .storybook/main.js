const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
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
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../'),
    }

    return config
  },
}
