import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Bookmark } from '.'

import { handlers } from '~/src/features/article/parseOGP/__mocks__/handlers'
import { bookmarkFactory } from '~/src/test/factories/blocks/bookmarkFactory'

export default {
  component: Bookmark,
} as ComponentMeta<typeof Bookmark>

const Template: ComponentStory<typeof Bookmark> = (args) => <Bookmark {...args} />

export const Default = Template.bind({})
Default.args = {
  block: bookmarkFactory.build(),
}
Default.parameters = {
  msw: {
    handlers: [handlers.api],
  },
}
