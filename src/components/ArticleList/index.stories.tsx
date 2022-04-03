import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArticleList } from '.'

export default {
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  articles: [
    {
      slug: 'delonghi-magnifica-s',
      title: 'デロンギ マグニフィカS',
      publishedAt: '2022/04/03',
    },
    {
      slug: 'hello-world',
      title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
      publishedAt: '2022/04/03',
    },
  ],
}
