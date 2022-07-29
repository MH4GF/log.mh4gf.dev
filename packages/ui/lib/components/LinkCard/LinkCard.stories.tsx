import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { LinkCard } from '.'

export default {
  component: LinkCard,
} as ComponentMeta<typeof LinkCard>

const Template: ComponentStory<typeof LinkCard> = (args) => <LinkCard {...args} />

export const Default = Template.bind({})
