import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { MarkdownArticle } from '.'

export default {
  component: MarkdownArticle,
} as ComponentMeta<typeof MarkdownArticle>

const Template: ComponentStory<typeof MarkdownArticle> = (args) => <MarkdownArticle {...args} />

export const Default = Template.bind({})
Default.args = {
  markdownText: `
  # Heading 1
  ## Heading 2
  ### Heading 3
  Welcome to my page 👀`,
}
