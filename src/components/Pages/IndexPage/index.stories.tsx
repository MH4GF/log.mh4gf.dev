import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IndexPage } from '.'

export default {
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />

export const Default = Template.bind({})
Default.args = {
  articles: [
    {
      slug: 'delonghi-magnifica-s',
      title: 'デロンギ マグニフィカS',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: '',
    },
    {
      slug: 'hello-world',
      title: 'Next.js + Notion API + Tailwind CSSでブログを作った',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: '',
    },
    {
      slug: '',
      title: '外部執筆ページ',
      publishedAt: '2022-04-25T14:31:00.000Z',
      outerLink: 'https://example.com',
    },
  ],
}
