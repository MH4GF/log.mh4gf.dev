import { Client } from '@notionhq/client'

import { PageObject } from './type'

export class NotionClient {
  client: Client

  constructor(key: string) {
    this.client = new Client({ auth: key })
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
}
