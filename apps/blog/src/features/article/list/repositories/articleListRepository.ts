import type { NotionClient } from 'notn'

import { ArticleModel } from '../../ArticleModel'

export const articleListRepository = async (client: NotionClient) => {
  const pages = await client.fetchDatabasePages({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: { property: 'published', checkbox: { equals: true } },
    sorts: [{ property: 'publishedAt', direction: 'descending' }],
  })

  return pages.map((page) => ArticleModel.fromPage(page).toJSON())
}
