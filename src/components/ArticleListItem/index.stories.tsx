import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArticleListItem } from '.'

export default {
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ul>
    <ArticleListItem {...args} />
  </ul>
)

export const Internal = Template.bind({})
Internal.args = {
  article: {
    slug: 'hello-world',
    title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
    publishedAt: '2022-04-25T14:31:00.000Z',
    outerLink: '',
    blocks: [],
  },
}

export const External = Template.bind({})
External.args = {
  article: {
    slug: 'hello-world',
    title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
    publishedAt: '2022-04-25T14:31:00.000Z',
    outerLink: 'https://example.com',
    blocks: [],
  },
}
