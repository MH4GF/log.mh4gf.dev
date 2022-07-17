import { Factory } from 'fishery'

import { RichTextObject } from 'notn'

const annotations: RichTextObject['annotations'] = {
  bold: false,
  italic: false,
  strikethrough: false,
  underline: false,
  code: false,
  color: 'default',
}

const textType: RichTextObject = {
  type: 'text',
  text: {
    content:
      'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
    link: null,
  },
  annotations: annotations,
  plain_text:
    'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  href: null,
}

const userMentionType: RichTextObject = {
  type: 'mention',
  mention: {
    type: 'user',
    user: { object: 'user', id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30' },
  },
  annotations: annotations,
  plain_text: '@Anonymous',
  href: null,
}

const databaseMentionType: RichTextObject = {
  type: 'mention',
  mention: {
    type: 'database',
    database: { id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30' },
  },
  annotations: annotations,
  plain_text: 'database page',
  href: 'https://www.notion.so/8af73ba68a2841809aae6dc03b34d65f',
}

const pageMentionType: RichTextObject = {
  type: 'mention',
  mention: {
    type: 'page',
    page: { id: '2ec11fc1-dd03-454b-b4ca-89ac099efd30' },
  },
  annotations: annotations,
  plain_text: 'waiwai',
  href: 'https://www.notion.so/750aa36474194ac784502b36a71778cc',
}

type Params = {
  type: 'text' | 'mention'
  mentionType: 'user' | 'database' | 'page'
}

export const richTextFactory = Factory.define<RichTextObject, Params>(({ transientParams }) => {
  switch (transientParams.type) {
    case 'mention':
      switch (transientParams.mentionType) {
        case 'user':
          return userMentionType
        case 'page':
          return pageMentionType
        default:
          return databaseMentionType
      }
    default:
      return textType
  }
})
