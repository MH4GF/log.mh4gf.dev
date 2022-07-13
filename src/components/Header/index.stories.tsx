import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Header } from '.'

export default {
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})
