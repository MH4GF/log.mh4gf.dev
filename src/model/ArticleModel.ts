import { BlockObject } from '../lib/notion/type'

export interface ArticleData {
  slug: string
  title: string
  blocks: BlockObject[]
}

export class ArticleModel implements ArticleData {
  readonly slug: string
  readonly title: string
  readonly blocks: BlockObject[]

  constructor(data: ArticleData) {
    this.slug = data.slug
    this.title = data.title
    this.blocks = data.blocks
  }

  toJSON = () => {
    return {
      slug: this.slug,
      title: this.title,
    }
  }
}
