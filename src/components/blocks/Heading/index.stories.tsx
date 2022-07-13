import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Heading1, Heading2, Heading3 } from '.'

import {
  heading1Factory,
  heading2Factory,
  heading3Factory,
} from '~/src/test/factories/blocks/headingFactory'

export default {
  component: Heading1,
} as ComponentMeta<typeof Heading1>

export const Default: ComponentStory<typeof Heading1> = () => (
  <div className="grid gap-4">
    <Heading1 block={heading1Factory.build()} />
    <Heading2 block={heading2Factory.build()} />
    <Heading3 block={heading3Factory.build()} />
  </div>
)
