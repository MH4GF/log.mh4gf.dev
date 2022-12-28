import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Text } from './Text'

const meta: ComponentMeta<typeof Text> = {
  component: Text,
}

export default meta

type Story = ComponentStoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Hello world',
    className: 'another-class-name',
  },
}
