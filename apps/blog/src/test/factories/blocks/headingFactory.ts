import { Factory } from 'fishery'
import type { BlockObject } from 'notn'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

export const heading1Factory = Factory.define<BlockObject<'heading_1'>>(() => ({
  ...baseBlock,
  type: 'heading_1',
  heading_1: {
    rich_text: [richTextFactory.build()],
    color: 'default',
  },
  has_children: false,
}))

export const heading2Factory = Factory.define<BlockObject<'heading_2'>>(() => ({
  ...baseBlock,
  type: 'heading_2',
  heading_2: {
    rich_text: [richTextFactory.build()],
    color: 'default',
  },
  has_children: false,
}))

export const heading3Factory = Factory.define<BlockObject<'heading_3'>>(() => ({
  ...baseBlock,
  type: 'heading_3',
  heading_3: {
    rich_text: [richTextFactory.build()],
    color: 'default',
  },
  has_children: false,
}))
