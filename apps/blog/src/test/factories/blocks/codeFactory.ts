import { Factory } from 'fishery'

import { baseBlock } from './baseBlock'
import { richTextFactory } from './richTextFactory'

import { BlockObject } from '~/src/lib/ntn'

const htmlText = '<html>\n\t<head>\n\t\t<title> Hello Nobelium! </title> \n\t</head> \n</html>'
export const codeFactory = Factory.define<BlockObject<'code'>>(() => ({
  ...baseBlock,
  has_children: false,
  type: 'code',
  code: {
    caption: [],
    rich_text: [richTextFactory.build({ text: { content: htmlText }, plain_text: htmlText })],
    language: 'html',
  },
}))
