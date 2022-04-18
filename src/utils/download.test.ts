import { existsSync, unlinkSync } from 'fs'

import { download } from './download'

const filepath = 'public/tmp/test-image.png'

afterEach(() => {
  if (existsSync(filepath)) {
    unlinkSync(filepath)
  }
})

describe('download for local file from external file url', () => {
  it('works for correct filepath and extension', async () => {
    await download(
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
      filepath,
    ).then((data) => {
      expect(data).toBe(filepath)
      expect(existsSync(filepath)).toBeTruthy()
    })
  })

  it('add extension if enabled addExt option', async () => {
    await download(
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
      'public/tmp/test-image',
      { addExt: true },
    ).then((data) => {
      expect(data).toBe(filepath)
      expect(existsSync(filepath)).toBeTruthy()
    })
  })
})
