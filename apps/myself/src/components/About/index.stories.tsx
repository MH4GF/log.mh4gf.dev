import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { About } from '.'

export default {
  component: About,
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = (args) => <About {...args} />

export const Default = Template.bind({})
