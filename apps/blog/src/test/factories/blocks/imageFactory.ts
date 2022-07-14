import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'

import { BlockObject } from '~/src/lib/ntn'

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
