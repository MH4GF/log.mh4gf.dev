import { articleDetailRepository } from './articleDetailRepository'

const mockPath = `${__dirname}/__mocks__`

describe('ArticleDetailRepository', () => {
  it("should return article text if passed slug's contents file is exists", async () => {
    const result = await articleDetailRepository('test', mockPath)
    const expectedText = `# Hello World!

This is mock file for test!
`
    expect(result.markdownText).toBe(expectedText)
  })

  it("should error if passed slug's contents file is not exists", async () => {
    await expect(
      async () => await articleDetailRepository('not-exists', mockPath),
    ).rejects.toThrowError('no such file contents for slug: not-exists')
  })
})
