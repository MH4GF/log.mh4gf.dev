import { Factory } from 'fishery'

import { PageObject } from '~/src/lib/ntn'

export const pageFactory = Factory.define<PageObject>(() => ({
  object: 'page',
  id: '985f5225-9f40-4e54-9cc0-cc42381908b8',
  created_time: '2022-05-10T00:06:00.000Z',
  last_edited_time: '2022-05-11T17:26:00.000Z',
  created_by: { object: 'user', id: 'ab25a488-8808-41be-86f0-1ba5198ea33c' },
  last_edited_by: { object: 'user', id: 'ab25a488-8808-41be-86f0-1ba5198ea33c' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: 'd4d72738-43cb-48a3-a717-07cf7994bb93',
  },
  archived: false,
  properties: {
    tags: {
      id: 'LEan',
      type: 'multi_select',
      multi_select: [
        {
          id: 'e047ebcb-10a5-4339-8241-53acaecb8b65',
          name: 'Zenn',
          color: 'blue',
        },
      ],
    },
    published: { id: 'U%3Fgg', type: 'checkbox', checkbox: true },
    outerLink: {
      id: '%5DFUT',
      type: 'url',
      url: '',
    },
    publishedAt: {
      id: 'sO%3D_',
      type: 'date',
      date: {
        start: '2021-05-30T13:31:00.000+00:00',
        end: null,
        time_zone: null,
      },
    },
    slug: {
      id: 'sO%3D_',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'my-slug',
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
          plain_text: 'my-slug',
          href: null,
        },
      ],
    },
    title: {
      id: 'title',
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: 'waiwai',
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
          plain_text: 'waiwai',
          href: null,
        },
      ],
    },
  },
  url: 'https://www.notion.so/M1-Mac-Docker-Ruby-on-Rails-Go-Node-985f52259f404e549cc0cc42381908b8',
}))
