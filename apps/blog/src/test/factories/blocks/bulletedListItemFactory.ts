import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

import { BlockObject } from '~/src/lib/ntn'

export const bulletedListItemFactory = Factory.define<BlockObject<'bulleted_list_item'>>(() => ({
  ...baseBlock,
  has_children: false,
  type: 'bulleted_list_item',
  bulleted_list_item: {
    rich_text: [
      richTextFactory.transient({ type: 'mention', mentionType: 'page' }).build(),
      richTextFactory.build({ annotations: { bold: true } }),
      richTextFactory.build({ annotations: { italic: true } }),
    ],
    color: 'default',
  },
}))
