import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArticlePage } from '.'

export default {
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />

export const Default = Template.bind({})
Default.args = {
  markdownText: `# Hello, world!
  Welcome to my page 👀`,
}
