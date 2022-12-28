import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SkeletonText } from './SkeletonText'

const meta: ComponentMeta<typeof SkeletonText> = {
  component: SkeletonText,
}

export default meta

type Story = ComponentStoryObj<typeof SkeletonText>

export const Default: Story = {
  args: {
    height: '1rem',
  },
}
