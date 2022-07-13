import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ColumnList } from '.'

export default {
  component: ColumnList,
} as ComponentMeta<typeof ColumnList>

const Template: ComponentStory<typeof ColumnList> = (args) => <ColumnList {...args} />

export const Default = Template.bind({})
Default.args = {
  block: {
    object: 'block',
    id: 'b11044ae-c006-4796-ac70-27bbf0175cbf',
    created_time: '2021-11-19T07:44:00.000Z',
    last_edited_time: '2021-11-19T07:44:00.000Z',
    created_by: { object: 'user', id: '6460d764-91ab-4a7a-927b-7b23f3e1c621' },
    last_edited_by: {
      object: 'user',
      id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    },
    has_children: true,
    archived: false,
    type: 'column_list',
    column_list: {},
    // TODO: エラーが出る一旦後回し
    // children: [
    //   {
    //     object: 'block',
    //     id: '8389377e-374d-4d2c-8675-25b4241839df',
    //     created_time: '2021-11-19T07:44:00.000Z',
    //     last_edited_time: '2021-11-19T07:44:00.000Z',
    //     created_by: {
    //       object: 'user',
    //       id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    //     },
    //     last_edited_by: {
    //       object: 'user',
    //       id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    //     },
    //     has_children: true,
    //     archived: false,
    //     type: 'column',
    //     column: {},
    //     children: [
    //       {
    //         object: 'block',
    //         id: 'db98a183-03ee-4ab0-9013-a7419c4b5b68',
    //         created_time: '2021-11-19T07:44:00.000Z',
    //         last_edited_time: '2021-11-19T07:44:00.000Z',
    //         created_by: {
    //           object: 'user',
    //           id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    //         },
    //         last_edited_by: {
    //           object: 'user',
    //           id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
    //         },
    //         has_children: false,
    //         archived: false,
    //         type: 'quote',
    //         quote: {
    //           rich_text: [
    //             {
    //               type: 'text',
    //               text: {
    //                 content:
    //                   'The only limitation of possibility is your imagination',
    //                 link: null,
    //               },
    //               annotations: {
    //                 bold: false,
    //                 italic: false,
    //                 strikethrough: false,
    //                 underline: false,
    //                 code: false,
    //                 color: 'default',
    //               },
    //               plain_text:
    //                 'The only limitation of possibility is your imagination',
    //               href: null,
    //             },
    //           ],
    //           color: 'default',
    //         },
    //       },
    //     ],
    //   },
    // ],
  },
}
