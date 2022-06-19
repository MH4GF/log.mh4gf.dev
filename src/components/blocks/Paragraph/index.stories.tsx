import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Paragraph } from '.'

import { paragraphFactory } from '~/src/test/factories/blocks/paragraphFactory'

export default {
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  block: paragraphFactory.build(),
}
