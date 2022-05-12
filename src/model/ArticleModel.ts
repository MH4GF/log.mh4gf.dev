import { BlockObject, PageObject, SelectColor } from '../lib/ntn'

export type Tag = {
  name: string
  color: SelectColor
}

export interface ArticleData {
  slug: string
  title: string
  publishedAt: string
  outerLink: string
  tags: Tag[]
  blocks: BlockObject[]
}

export class ArticleModel implements ArticleData {
  readonly slug: string
  readonly title: string
  readonly publishedAt: string
  readonly outerLink: string
  readonly tags: Tag[]
  readonly blocks: BlockObject[]

  constructor(data: ArticleData) {
    this.slug = data.slug
    this.title = data.title
    this.publishedAt = data.publishedAt
    this.outerLink = data.outerLink
    this.tags = data.tags
    this.blocks = data.blocks
  }

  toJSON = (): ArticleData => {
    return {
      slug: this.slug,
      title: this.title,
      publishedAt: this.publishedAt,
      outerLink: this.outerLink,
      tags: this.tags,
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
      properties['outerLink']?.type === 'url' ? properties['outerLink'].url || '' : ''
    const tags =
      properties['tags']?.type === 'multi_select'
        ? properties['tags'].multi_select.map((item) => {
            return { name: item.name, color: item.color }
          })
        : []

    const data = {
      slug: '',
      title,
      publishedAt,
      outerLink,
      tags,
      blocks: blocks || [],
    }

    return new ArticleModel(data)
  }
}
