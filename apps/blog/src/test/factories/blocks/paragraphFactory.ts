import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

import { BlockObject } from '~/src/lib/ntn'

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
