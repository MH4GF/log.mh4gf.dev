import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArticleList } from '.'

export default {
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

export const Default = Template.bind({})
Default.args = {
  articles: [
    {
      slug: 'delonghi-magnifica-s',
      title: 'デロンギ マグニフィカS',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: '',
      tags: [],
      blocks: [],
    },
    {
      slug: 'hello-world',
      title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: '',
      tags: [{ name: 'Tech', color: 'red' }],
      blocks: [],
    },
    {
      slug: '',
      title: '外部執筆ページ',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: 'https://example.com',
      tags: [{ name: 'Zenn', color: 'blue' }],
      blocks: [],
    },
  ],
}
