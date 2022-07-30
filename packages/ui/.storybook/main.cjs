const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')

module.exports = {
  stories: ['../lib/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin())
    return config
  },
}
