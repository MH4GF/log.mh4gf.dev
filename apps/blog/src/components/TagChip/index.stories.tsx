import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { TagChip } from '.'

export default {
  component: TagChip,
} as ComponentMeta<typeof TagChip>

export const Default: ComponentStory<typeof TagChip> = () => (
  <div className="flex gap-4">
    <TagChip tag={{ name: 'default', color: 'default' }} />
    <TagChip tag={{ name: 'blue', color: 'blue' }} />
    <TagChip tag={{ name: 'brown', color: 'brown' }} />
    <TagChip tag={{ name: 'gray', color: 'gray' }} />
    <TagChip tag={{ name: 'green', color: 'green' }} />
    <TagChip tag={{ name: 'orange', color: 'orange' }} />
    <TagChip tag={{ name: 'pink', color: 'pink' }} />
    <TagChip tag={{ name: 'purple', color: 'purple' }} />
    <TagChip tag={{ name: 'red', color: 'red' }} />
    <TagChip tag={{ name: 'yellow', color: 'yellow' }} />
  </div>
)
