import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SyncedBlock } from '.'

export default {
  component: SyncedBlock,
} as ComponentMeta<typeof SyncedBlock>

const Template: ComponentStory<typeof SyncedBlock> = (args) => <SyncedBlock {...args} />

export const SyncedFrom = Template.bind({})
SyncedFrom.args = {
  block: {
    object: 'block',
    id: 'b9004960-f29d-419c-9036-0aca6524f2ae',
    created_time: '2022-04-09T07:16:00.000Z',
    last_edited_time: '2022-04-09T07:16:00.000Z',
    created_by: {
      object: 'user',
      id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30',
    },
    last_edited_by: {
      object: 'user',
      id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30',
    },
    has_children: false,
    archived: false,
    type: 'synced_block',
    synced_block: {
      synced_from: {
        type: 'block_id',
        block_id: '1cc2ceb2-63e8-47fc-8b9e-a07173819f0e',
      },
    },
  },
}
