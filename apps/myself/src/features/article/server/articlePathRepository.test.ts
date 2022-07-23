import { articlePathRepository } from './articlePathRepository'

const mockPath = `${__dirname}/__mocks__`

describe('articlePathRepository', () => {
  it('should return article paths, without sub directory', async () => {
    const result = await articlePathRepository(mockPath)
    const expected = [{ params: { slug: 'test' } }, { params: { slug: 'test2' } }]
    expect(result).toEqual(expected)
  })
})
