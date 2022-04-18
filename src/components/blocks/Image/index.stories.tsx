import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Image } from '.'

import { imageFactory } from '~/src/test/factories/blocks/imageFactory'

export default {
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  block: imageFactory.build(),
}
