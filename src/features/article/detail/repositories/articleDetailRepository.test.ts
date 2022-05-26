import { articleDetailRepository } from './articleDetailRepository'

import { NotionClient } from '~/src/lib/ntn'
import { richTextFactory } from '~/src/test/factories/blocks/richTextFactory'
import { pageFactory } from '~/src/test/factories/pageFactory'

describe('articleDetailRepository', () => {
  const fetchDatabasePages = () => []
  const fetchBlockChildren = () => []
  const fetchPage = () => pageFactory.build()

  const page = pageFactory.build({
    properties: {
      slug: { rich_text: [richTextFactory.build({ plain_text: 'my-slug' })] },
    },
  })

  it('return ArticleModel if it found page with slug', async () => {
    const fetchDatabasePages = () => [page]
    const client = { fetchDatabasePages, fetchBlockChildren, fetchPage } as unknown as NotionClient
    const slug = 'my-slug'
    expect((await articleDetailRepository(client, slug)).slug).toEqual('my-slug')
  })

  it('return ArticleModel if it not found page with slug but found page with id', async () => {
    const fetchPage = () => pageFactory.build({ id: '985f5225-9f40-4e54-9cc0-cc42381908b8' })
    const client = { fetchDatabasePages, fetchBlockChildren, fetchPage } as unknown as NotionClient
    const slug = '985f5225-9f40-4e54-9cc0-cc42381908b8'
    expect((await articleDetailRepository(client, slug)).slug).toEqual('my-slug')
  })

  it('throw error if it not found page with slug and not found page with id', async () => {
    const fetchPage = () => {
      throw new Error('unknown notion api error')
    }
    const client = { fetchDatabasePages, fetchBlockChildren, fetchPage } as unknown as NotionClient
    const slug = 'missing-slug'
    await expect(async () => await articleDetailRepository(client, slug)).rejects.toThrowError(
      'unknown notion api error',
    )
  })

  it('throw error if it found multiple pages with slug', async () => {
    const fetchDatabasePages = () => [page, page]
    const client = { fetchDatabasePages, fetchBlockChildren, fetchPage } as unknown as NotionClient
    const slug = 'my-slug'
    await expect(async () => await articleDetailRepository(client, slug)).rejects.toThrowError(
      'passed slug is not unique. count: 2, slug: my-slug',
    )
  })
})
