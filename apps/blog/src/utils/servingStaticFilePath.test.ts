import { servingStaticFilePath } from './servingStaticFilePath'

describe('servingStaticFilePath', () => {
  it('remove the leading `public`', () => {
    const url = 'public/tmp/image/f152c7c9.jpeg'
    expect(servingStaticFilePath(url)).toBe('/tmp/image/f152c7c9.jpeg')
  })
  it('do nothing if is not exists `public`', () => {
    const url = 'different/tmp/image/f152c7c9.jpeg'
    expect(servingStaticFilePath(url)).toBe('different/tmp/image/f152c7c9.jpeg')
  })
  it('do nothing if is not exists `public` of the leading text', () => {
    const url = 'diff/public/f152c7c9.jpeg'
    expect(servingStaticFilePath(url)).toBe('diff/public/f152c7c9.jpeg')
  })
})
