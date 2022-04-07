import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { RichText } from '.'

export default {
  component: RichText,
} as ComponentMeta<typeof RichText>

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
)

export const Default = Template.bind({})
Default.args = {
  richText: {
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
  },
}
