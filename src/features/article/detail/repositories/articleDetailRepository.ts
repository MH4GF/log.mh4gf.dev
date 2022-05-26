import { ArticleModel } from '../../ArticleModel'

import { blockParseRules } from '~/src/components/blocks/blockParseRules'
import { buildBlockParser, NotionClient, PageObject } from '~/src/lib/ntn'

const getPage = async (client: NotionClient, slug: string) => {
  let page: PageObject | undefined = undefined

  const pages = await client.fetchDatabasePages({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        { property: 'published', checkbox: { equals: true } },
        { property: 'slug', rich_text: { contains: slug } },
      ],
    },
  })
  switch (pages.length) {
    case 1:
      page = pages[0]
      break
    case 0:
      throw new Error(`page not found with passed slug, slug: ${slug}`)
    default:
      throw new Error(`passed slug is not unique. count: ${pages.length}, slug: ${slug}`)
  }

  return page
}

const getBlocks = async (client: NotionClient, pageId: string) => {
  const blockObjects = await client.fetchBlockChildren(pageId)
  const parser = buildBlockParser(blockParseRules)
  return await parser.parse(blockObjects)
}

export const articleDetailRepository = async (
  client: NotionClient,
  slug: string,
): Promise<ArticleModel> => {
  const page = await getPage(client, slug)
  const blocks = await getBlocks(client, page.id)

  return ArticleModel.fromPage(page, blocks)
}
