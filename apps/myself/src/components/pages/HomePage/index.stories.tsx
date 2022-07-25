import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { HomePage } from '.'

export default {
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />

export const Default = Template.bind({})
