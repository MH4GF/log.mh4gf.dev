import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Layout } from '.'

export default {
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>hello!</div>,
  title: 'log.mh4gf.dev',
}
