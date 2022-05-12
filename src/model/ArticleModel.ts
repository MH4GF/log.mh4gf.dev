import { BlockObject, PageObject } from '../lib/ntn'

export interface ArticleData {
  slug: string
  title: string
  publishedAt: string
  outerLink: string
  blocks: BlockObject[]
}

export class ArticleModel implements ArticleData {
  readonly slug: string
  readonly title: string
  readonly publishedAt: string
  readonly outerLink: string
  readonly blocks: BlockObject[]

  constructor(data: ArticleData) {
    this.slug = data.slug
    this.title = data.title
    this.publishedAt = data.publishedAt
    this.outerLink = data.outerLink
    this.blocks = data.blocks
  }

  toJSON = (): ArticleData => {
    return {
      slug: this.slug,
      title: this.title,
      publishedAt: this.publishedAt,
      outerLink: this.outerLink,
      blocks: this.blocks,
    }
  }

  static fromPage = (page: PageObject, blocks?: BlockObject[]): ArticleModel => {
    const properties = page.properties
    const title =
      properties['title'].type === 'title' ? properties['title'].title[0].plain_text : ''
    const publishedAt =
      (properties['publishedAt']?.type === 'date' && properties['publishedAt'].date?.start) || ''
    const outerLink =
      page.properties['outerLink'].type === 'url' ? page.properties['outerLink'].url || '' : ''

    const data = {
      slug: '',
      title,
      publishedAt,
      outerLink,
      blocks: blocks || [],
    }

    return new ArticleModel(data)
  }
}
