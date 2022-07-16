import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BulletedListItem } from '.'

import { bulletedListItemFactory } from '~/src/test/factories/blocks/bulletedListItemFactory'

export default {
  component: BulletedListItem,
} as ComponentMeta<typeof BulletedListItem>

const Template: ComponentStory<typeof BulletedListItem> = (args) => <BulletedListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  block: bulletedListItemFactory.build(),
}
