import type { NotionClient } from 'notn'

import { articleDetailRepository } from './articleDetailRepository'

import { richTextFactory } from '~/src/test/factories/blocks/richTextFactory'
import { pageFactory } from '~/src/test/factories/pageFactory'

describe('articleDetailRepository', () => {
  const fetchBlockChildren = () => []

  const page = pageFactory.build({
    properties: {
      slug: { rich_text: [richTextFactory.build({ plain_text: 'my-slug' })] },
    },
  })

  it('return ArticleModel if it found page with slug', async () => {
    const fetchDatabasePages = () => [page]
    const client = {
      fetchDatabasePages,
      fetchBlockChildren,
    } as unknown as NotionClient
    const slug = 'my-slug'
    expect((await articleDetailRepository(client, slug)).slug).toEqual('my-slug')
  })

  it('return ArticleModel if it not found page with slug', async () => {
    const fetchDatabasePages = () => []
    const client = {
      fetchDatabasePages,
      fetchBlockChildren,
    } as unknown as NotionClient
    const slug = 'missing'
    await expect(async () => await articleDetailRepository(client, slug)).rejects.toThrowError(
      'page not found with passed slug, slug: missing',
    )
  })

  it('throw error if it found multiple pages with slug', async () => {
    const fetchDatabasePages = () => [page, page]
    const client = {
      fetchDatabasePages,
      fetchBlockChildren,
    } as unknown as NotionClient
    const slug = 'my-slug'
    await expect(async () => await articleDetailRepository(client, slug)).rejects.toThrowError(
      'passed slug is not unique. count: 2, slug: my-slug',
    )
  })
})
