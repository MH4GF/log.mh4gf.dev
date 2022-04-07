import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Quote } from '.'

export default {
  component: Quote,
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />

export const Default = Template.bind({})
Default.args = {
  block: {
    object: 'block',
    id: 'c3850b3e-df30-4716-b1d9-e184ee7846df',
    created_time: '2021-11-19T07:44:00.000Z',
    last_edited_time: '2021-11-19T07:44:00.000Z',
    created_by: { object: 'user', id: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3' },
    last_edited_by: {
      object: 'user',
      id: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3',
    },
    has_children: false,
    archived: false,
    type: 'quote',
    quote: {
      rich_text: [
        {
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
      ],
      color: 'default',
    },
  },
}
