export interface ArticleData {
  slug: string
  title: string
}

export class Article implements ArticleData {
  readonly slug: string
  readonly title: string

  constructor(data: ArticleData) {
    this.slug = data.slug
    this.title = data.title
  }

  toJSON = () => {
    return {
      slug: this.slug,
      title: this.title,
    }
  }
}
