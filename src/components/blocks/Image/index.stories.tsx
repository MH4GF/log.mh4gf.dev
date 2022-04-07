import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Image } from '.'

export default {
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  block: {
    object: 'block',
    id: '5e240515-1ef0-43f7-a53c-3bd012acb973',
    created_time: '2021-11-19T07:44:00.000Z',
    last_edited_time: '2021-11-19T07:44:00.000Z',
    created_by: { object: 'user', id: '6460d764-91ab-4a7a-927b-7b23f3e1c621' },
    last_edited_by: {
      object: 'user',
      id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    },
    has_children: false,
    archived: false,
    type: 'image',
    image: {
      caption: [],
      type: 'external',
      external: {
        url: 'https://images.unsplash.com/photo-1602345553478-740db58ab250?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80',
      },
    },
  },
}
