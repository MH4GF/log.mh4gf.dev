import { BlockObject } from '~/src/lib/ntn'

export const baseBlock: Omit<BlockObject, 'has_children' | 'type'> = {
  object: 'block',
  id: '5e240515-1ef0-43f7-a53c-3bd012acb973',
  created_time: '2021-11-19T07:44:00.000Z',
  last_edited_time: '2021-11-19T07:44:00.000Z',
  created_by: { object: 'user', id: '6460d764-91ab-4a7a-927b-7b23f3e1c621' },
  last_edited_by: {
    object: 'user',
    id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
  },
  archived: false,
}
