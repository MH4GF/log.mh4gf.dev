import { existsSync, unlinkSync } from 'fs'

import { download } from './download'

const filepath = 'public/tmp/test-image.png'

afterEach(() => {
  if (existsSync(filepath)) {
    unlinkSync(filepath)
  }
})

test('download', async () => {
  await download(
    'https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-logo-v2-200px-transparent.png',
    filepath,
  )
    .then((data) => {
      expect(data).toBe(filepath)
      expect(existsSync(filepath)).toBeTruthy()
    })
    .catch((err) => console.error(err))
})
