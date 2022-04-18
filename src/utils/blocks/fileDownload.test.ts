import { existsSync, unlinkSync } from 'fs'

import { imageFactory } from '../../test/factories/blocks/imageFactory'

import { fileDownload } from './fileDownload'

const filepath = 'public/tmp/image/f152c7c9-76fa-4a22-a842-e6e497456fd8.png'

describe('fileDownload', () => {
  afterEach(() => {
    if (existsSync(filepath)) {
      unlinkSync(filepath)
    }
  })
  it('work with file type image block', async () => {
    const block = imageFactory.build({
      id: 'f152c7c9-76fa-4a22-a842-e6e497456fd8',
      image: {
        caption: [],
        type: 'file',
        file: {
          // demo
          url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
          expiry_time: '2022-04-13T14:56:33.326Z',
        },
      },
    })
    const result = await fileDownload(block)
    expect(result).toBe(filepath)
    expect(existsSync(filepath)).toBeTruthy()
  })
  it('work with external type image block', async () => {
    const block = imageFactory.build({
      id: 'f152c7c9-76fa-4a22-a842-e6e497456fd8',
      image: {
        caption: [],
        type: 'external',
        external: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
        },
      },
    })
    const result = await fileDownload(block)
    expect(result).toBe(filepath)
    expect(existsSync(filepath)).toBeTruthy()
  })
})
