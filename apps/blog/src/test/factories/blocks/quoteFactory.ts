import { Factory } from 'fishery'
import type { BlockObject } from 'notn'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

export const quoteFactory = Factory.define<BlockObject<'quote'>>(() => ({
  ...baseBlock,
  type: 'quote',
  quote: {
    rich_text: [richTextFactory.build()],
    color: 'default',
  },
  has_children: false,
}))
