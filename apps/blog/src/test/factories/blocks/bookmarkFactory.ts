import { Factory } from 'fishery'
import type { BlockObject } from 'notn'

import { baseBlock } from './baseBlock'

export const bookmarkFactory = Factory.define<BlockObject<'bookmark'>>(() => ({
  ...baseBlock,
  has_children: false,
  type: 'bookmark',
  bookmark: { caption: [], url: 'https://mh4gf.dev' },
}))
