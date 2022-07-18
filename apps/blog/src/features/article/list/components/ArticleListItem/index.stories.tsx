import type { ComponentMeta, ComponentStory } from '@storybook/react'
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
    id: 'article-id',
    slug: 'hello-world',
    title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
    publishedAt: '2022-04-25T14:31:00.000Z',
    outerLink: '',
    tags: [],
    blocks: [],
  },
}

export const External = Template.bind({})
External.args = {
  article: {
    id: 'article-id',
    slug: 'hello-world',
    title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
    publishedAt: '2022-04-25T14:31:00.000Z',
    outerLink: 'https://example.com',
    tags: [{ name: 'Zenn', color: 'blue' }],
    blocks: [],
  },
}
