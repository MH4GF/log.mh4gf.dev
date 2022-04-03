import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IndexPage } from '.'

export default {
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
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
