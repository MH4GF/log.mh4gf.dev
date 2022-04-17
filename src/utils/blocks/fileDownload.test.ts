import { existsSync, unlinkSync } from 'fs'

import { BlockObject } from './../../lib/ntn/type'
import { fileDownload } from './fileDownload'

const filepath = 'public/tmp/image/f152c7c9-76fa-4a22-a842-e6e497456fd8.png'
const blockObj = (
  image: BlockObject<'image'>['image'],
): BlockObject<'image'> => {
  return {
    object: 'block',
    id: 'f152c7c9-76fa-4a22-a842-e6e497456fd8',
    created_time: '2022-04-11T07:45:00.000Z',
    last_edited_time: '2022-04-11T07:45:00.000Z',
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
    type: 'image',
    image: image,
  }
}

describe('fileDownload', () => {
  afterEach(() => {
    if (existsSync(filepath)) {
      unlinkSync(filepath)
    }
  })
  it('work with file type image block', async () => {
    const block = blockObj({
      caption: [],
      type: 'file',
      file: {
        // demo
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
        expiry_time: '2022-04-13T14:56:33.326Z',
      },
    })
    const result = await fileDownload(block)
    expect(result).toBe(filepath)
    expect(existsSync(filepath)).toBeTruthy()
  })
  it('work with external type image block', async () => {
    const block = blockObj({
      caption: [],
      type: 'external',
      external: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
      },
    })
    const result = await fileDownload(block)
    expect(result).toBe(filepath)
    expect(existsSync(filepath)).toBeTruthy()
  })
})
