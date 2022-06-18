import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'

import { BlockObject } from '~/src/lib/ntn'

export const bookmarkFactory = Factory.define<BlockObject<'bookmark'>>(() => ({
  ...baseBlock,
  has_children: false,
  type: 'bookmark',
  bookmark: { caption: [], url: 'https://mh4gf.dev' },
}))
