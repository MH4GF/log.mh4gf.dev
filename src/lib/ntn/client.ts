import { Client, LogLevel } from '@notionhq/client'
import { ClientOptions } from '@notionhq/client/build/src/Client'
import { Logger, logLevelSeverity, makeConsoleLogger } from '@notionhq/client/build/src/logging'

import packageFile from './package.json'
import { PageObject, BlockObject } from './type'

/**
 * @package
 */
export class NotionClient {
  client: Client
  logLevel: LogLevel
  logger: Logger

  constructor(options: ClientOptions) {
    this.client = new Client(options)
    this.logLevel = options.logLevel ?? LogLevel.WARN
    this.logger = options.logger ?? makeConsoleLogger(`${packageFile.name}/Client`)
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
            this.log(LogLevel.INFO, 'block has children', { type: block.type, id: block.id })
            const children = await this.fetchBlockChildren(block.id)
            blocks.push({ ...block, children })
          } else if (
            block.type === 'synced_block' &&
            block.synced_block.synced_from?.block_id !== undefined
          ) {
            this.log(LogLevel.INFO, 'block is synced_block', { type: block.type, id: block.id })
            const children = await this.fetchBlockChildren(block.synced_block.synced_from.block_id)
            blocks.push({ ...block, children })
          } else {
            this.log(LogLevel.INFO, 'block is leaf node', { type: block.type, id: block.id })
            blocks.push(block)
          }
        }
      }

      cursor = next_cursor
    } while (cursor !== null)

    return blocks
  }

  private log(level: LogLevel, message: string, extraInfo: Record<string, unknown>) {
    if (logLevelSeverity(level) >= logLevelSeverity(this.logLevel)) {
      this.logger(level, message, extraInfo)
    }
  }
}
