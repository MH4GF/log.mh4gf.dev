import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { LoadingLinkCard } from './LoadingLinkCard'

import { LinkCard } from '.'

export default {
  component: LinkCard,
} as ComponentMeta<typeof LinkCard>

const Template: ComponentStory<typeof LinkCard> = (args) => <LinkCard {...args} />

export const Default = Template.bind({})
Default.args = {
  url: 'https://mh4gf.dev',
  title: 'Me',
  description: 'my portfolio',
  imageSrc: 'https://cli.github.com/assets/images/social-card.png',
  className: 'another-class-name',
}

export const LongText = Template.bind({})
LongText.args = {
  url: 'https://mh4gf.dev',
  title:
    '長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル',
  description:
    '長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト',
  imageSrc: 'https://cli.github.com/assets/images/social-card.png',
}

export const Loading: ComponentStory<typeof LoadingLinkCard> = (args) => (
  <LoadingLinkCard {...args} />
)
