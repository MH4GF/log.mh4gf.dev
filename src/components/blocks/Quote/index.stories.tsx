import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Quote } from '.'

import { quoteFactory } from '~/src/test/factories/blocks/quoteFactory'

export default {
  component: Quote,
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />

export const Default = Template.bind({})
Default.args = {
  block: quoteFactory.build(),
}
