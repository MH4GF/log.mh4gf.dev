import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Code } from '.'

import { codeFactory } from '~/src/test/factories/blocks/codeFactory'

export default {
  component: Code,
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Default = Template.bind({})
Default.args = {
  block: codeFactory.build(),
}
