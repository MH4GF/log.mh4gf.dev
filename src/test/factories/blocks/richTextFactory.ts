import { Factory } from 'fishery'

import { RichTextObject } from '~/src/lib/ntn'

export const richTextFactory = Factory.define<RichTextObject>(() => ({
  type: 'text',
  text: {
    content:
      'Sollicitudin sit amet metus. Etiam eget fringilla massa. In hac habitasse platea dictumst. Integer malesuada porta mauris sed pellentesque. Curabitur tempus nisi vitae metus convallis, sed ullamcorper ipsum iaculis.',
    link: null,
  },
  annotations: {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
    code: false,
    color: 'default',
  },
  plain_text:
    'Sollicitudin sit amet metus. Etiam eget fringilla massa. In hac habitasse platea dictumst. Integer malesuada porta mauris sed pellentesque. Curabitur tempus nisi vitae metus convallis, sed ullamcorper ipsum iaculis.',
  href: null,
}))
