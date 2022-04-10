import { Client } from '@notionhq/client'
import { ClientOptions } from '@notionhq/client/build/src/Client'

import { BlockObject, PageObject } from './type'

export { LogLevel } from '@notionhq/client'

export class NotionClient {
  client: Client

  constructor(options: ClientOptions) {
    this.client = new Client(options)
  }

  async fetchDatabasePages(databaseId: string): Promise<PageObject[]> {
    const pages: PageObject[] = []
    const res = await this.client.databases.query({ database_id: databaseId })
    // TODO: paging
    pages.push(...(res.results as PageObject[]))

    return pages
  }

  async fetchPage(pageId: string) {
    return (await this.client.pages.retrieve({ page_id: pageId })) as PageObject
  }

  async fetchBlockChildren(blockId: string): Promise<BlockObject[]> {
    const blocks: BlockObject[] = []
    let cursor: string | null = null

    do {
      const { results, next_cursor } = await this.client.blocks.children.list({
        block_id: blockId,
      })
      for (const block of results) {
        if ('type' in block) {
          if (block.has_children) {
            const children = await this.fetchBlockChildren(block.id)
            blocks.push({ ...block, children })
          } else {
            blocks.push(block)
          }
        }
      }

      cursor = next_cursor
    } while (cursor !== null)

    return blocks
  }
}
