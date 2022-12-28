import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Bookmark } from './'

import { handlers } from '~/src/features/article/parseOGP/__mocks__/handlers'
import { bookmarkFactory } from '~/src/test/factories/blocks/bookmarkFactory'

const meta: ComponentMeta<typeof Bookmark> = {
  component: Bookmark,
  args: {
    block: bookmarkFactory.build(),
  },
  parameters: {
    msw: {
      handlers: [handlers.api],
    },
  },
}

export default meta

type Story = ComponentStoryObj<typeof Bookmark>

export const Default: Story = {}
export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [handlers.apiLoading],
    },
  },
}
