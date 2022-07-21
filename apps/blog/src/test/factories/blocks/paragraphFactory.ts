import { Factory } from 'fishery'
import type { BlockObject } from 'notn'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

export const paragraphFactory = Factory.define<BlockObject<'paragraph'>>(() => ({
  ...baseBlock,
  has_children: false,
  type: 'paragraph',
  paragraph: {
    rich_text: [
      richTextFactory.transient({ type: 'mention', mentionType: 'page' }).build(),
      richTextFactory.build({ annotations: { bold: true } }),
      richTextFactory.build({ annotations: { italic: true } }),
    ],
    color: 'default',
  },
}))
