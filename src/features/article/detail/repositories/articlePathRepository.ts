import { ArticleModel } from '../../ArticleModel'

import { NotionClient } from '~/src/lib/ntn'

export const articlePathRepository = async (client: NotionClient) => {
  const pages = await client.fetchDatabasePages({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        { property: 'published', checkbox: { equals: true } },
        { property: 'slug', rich_text: { is_not_empty: true } },
      ],
    },
  })

  return pages.map((page) => ArticleModel.fromPage(page))
}
