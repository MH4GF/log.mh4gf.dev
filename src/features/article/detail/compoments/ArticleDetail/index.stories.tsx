import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArticleModel } from '../../../ArticleModel'

import { ArticleDetail } from '.'

export default {
  component: ArticleDetail,
} as ComponentMeta<typeof ArticleDetail>

const Template: ComponentStory<typeof ArticleDetail> = (args) => <ArticleDetail {...args} />

export const Default = Template.bind({})
Default.args = {
  article: new ArticleModel({
    slug: 'delonghi-magnifica-s',
    title: 'デロンギ マグニフィカS',
    publishedAt: '2021-11-19T07:44:00.000Z',
    outerLink: '',
    tags: [{ name: 'Gadget', color: 'gray' }],
    blocks: [
      {
        object: 'block',
        id: 'c3850b3e-df30-4716-b1d9-e184ee7846df',
        created_time: '2021-11-19T07:44:00.000Z',
        last_edited_time: '2021-11-19T07:44:00.000Z',
        created_by: {
          object: 'user',
          id: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3',
        },
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
      {
        object: 'block',
        id: 'a52ecd87-a43a-4bd1-b512-95bd68402b77',
        created_time: '2021-11-19T07:44:00.000Z',
        last_edited_time: '2022-04-09T06:24:00.000Z',
        created_by: {
          object: 'user',
          id: '6460d764-91ab-4a7a-927b-7b23f3e1c621',
        },
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
    ],
  }),
}
