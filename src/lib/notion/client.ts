import { Client } from '@notionhq/client'

export class NotionClient {
  client: Client

  constructor(key: string) {
    this.client = new Client({ auth: key })
  }

  async fetchDatabasePages(databaseId: string) {
    const res = await this.client.databases.query({ database_id: databaseId })
    // TODO: 適当なオブジェクトへのマッピング
    // TODO: paging
    return res.results
  }
}
