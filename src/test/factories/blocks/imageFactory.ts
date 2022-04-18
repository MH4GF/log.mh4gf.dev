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
      url: 'https://images.unsplash.com/photo-1602345553478-740db58ab250?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80',
    },
  },
  has_children: false,
}))
