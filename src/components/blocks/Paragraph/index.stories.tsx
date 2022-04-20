import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Paragraph } from '.'

export default {
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  block: {
    type: 'paragraph',
    paragraph: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'text contents',
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
          plain_text: 'text contents',
          href: null,
        },
      ],
      color: 'default',
    },
    object: 'block',
    id: 'test',
    created_time: 'test',
    created_by: {
      id: 'test',
      object: 'user',
    },
    last_edited_time: 'test',
    last_edited_by: {
      id: 'test',
      object: 'user',
    },
    has_children: false,
    archived: false,
  },
}
