import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AnchorLink } from '.'

export default {
  component: AnchorLink,
} as ComponentMeta<typeof AnchorLink>

const Template: ComponentStory<typeof AnchorLink> = (args) => <AnchorLink {...args} />

export const Default = Template.bind({})
