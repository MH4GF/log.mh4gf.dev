import { Factory } from 'fishery'
import type { BlockObject } from 'notn'

import { baseBlock } from './baseBlock'

export const imageFactory = Factory.define<BlockObject<'image'>>(() => ({
  ...baseBlock,
  type: 'image',
  image: {
    caption: [],
    type: 'external',
    external: {
      url: '/test-image.jpeg',
    },
  },
  has_children: false,
}))
