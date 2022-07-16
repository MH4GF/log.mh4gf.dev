import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Divider } from '.'

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Default = Template.bind({})
Default.args = {
  block: {
    object: 'block',
    id: '6d2676c8-cc52-4c34-a949-41ee8eb51503',
    created_time: '2021-11-19T07:44:00.000Z',
    last_edited_time: '2021-11-19T07:44:00.000Z',
    created_by: { object: 'user', id: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3' },
    last_edited_by: {
      object: 'user',
      id: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3',
    },
    has_children: false,
    archived: false,
    type: 'divider',
    divider: {},
  },
}
