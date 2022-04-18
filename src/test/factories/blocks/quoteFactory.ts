import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

import { BlockObject } from '~/src/lib/ntn'

export const quoteFactory = Factory.define<BlockObject<'quote'>>(() => ({
  ...baseBlock,
  type: 'quote',
  quote: {
    rich_text: [richTextFactory.build()],
    color: 'default',
  },
  has_children: false,
}))
