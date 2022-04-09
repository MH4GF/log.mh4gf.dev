import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BulletedListItem } from '.'

export default {
  component: BulletedListItem,
} as ComponentMeta<typeof BulletedListItem>

const Template: ComponentStory<typeof BulletedListItem> = (args) => (
  <BulletedListItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  block: {
    object: 'block',
    id: 'a52ecd87-a43a-4bd1-b512-95bd68402b77',
    created_time: '2021-11-19T07:44:00.000Z',
    last_edited_time: '2022-04-09T06:24:00.000Z',
    created_by: { object: 'user', id: '6460d764-91ab-4a7a-927b-7b23f3e1c621' },
    last_edited_by: {
      object: 'user',
      id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30',
    },
    has_children: false,
    archived: false,
    type: 'bulleted_list_item',
    bulleted_list_item: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'Donec sed aliquam sapien, tincidunt tristique neque. ',
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
          plain_text: 'Donec sed aliquam sapien, tincidunt tristique neque. ',
          href: null,
        },
      ],
      color: 'default',
    },
  },
}
