import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Image } from '.'

export default {
  component: Image,
} as ComponentMeta<typeof Image>

// eslint-disable-next-line jsx-a11y/alt-text
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '/assets/profile.jpeg',
  alt: 'profile.jpeg',
}
