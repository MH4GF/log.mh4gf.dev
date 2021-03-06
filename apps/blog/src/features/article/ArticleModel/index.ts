import type { BlockObject, PageObject, SelectColor } from 'notn'

export type Tag = {
  name: string
  color: SelectColor
}

export interface ArticleData {
  id: string
  slug: string
  title: string
  publishedAt: string
  outerLink: string
  tags: Tag[]
  blocks: BlockObject[]
}

const REQUIRED_PROPERTIES: Array<keyof ArticleData> = ['title', 'publishedAt']
const mustBeExistRequiredFields = (data: ArticleData) => {
  const missings: string[] = []
  REQUIRED_PROPERTIES.forEach((property) => {
    if (data[property] === '') missings.push(property)
  })
  if (missings.length > 0) {
    throw new Error(`required fields do not exist: ${missings.join(', ')}`)
  }
}

const mustBeOnlyOneOfSlugAndOuterLinkHasValue = (slug: string, outerLink: string) => {
  if (slug !== '' && outerLink !== '') {
    throw new Error(
      `there must not be a value for both slug and outerLink. slug: ${slug}, outerLink: ${outerLink}`,
    )
  }
}

const validate = (data: ArticleData) => {
  mustBeExistRequiredFields(data)
  mustBeOnlyOneOfSlugAndOuterLinkHasValue(data.slug, data.outerLink)
}

const TARGET_PROPERTIES = ['title', 'publishedAt', 'outerLink', 'tags']
const validatePropertyNames = (properties: PageObject['properties']) => {
  const missing: Array<string> = []
  TARGET_PROPERTIES.forEach((name) => {
    if (properties[name] === undefined) missing.push(name)
  })

  if (missing.length > 0) {
    throw new Error(`missing properties: ${missing.join(',')}`)
  }
}

export class ArticleModel implements ArticleData {
  readonly id: string
  readonly slug: string
  readonly title: string
  readonly publishedAt: string
  readonly outerLink: string
  readonly tags: Tag[]
  readonly blocks: BlockObject[]

  constructor(data: ArticleData) {
    validate(data)
    this.id = data.id
    this.slug = data.slug
    this.title = data.title
    this.publishedAt = data.publishedAt
    this.outerLink = data.outerLink
    this.tags = data.tags
    this.blocks = data.blocks
  }

  toJSON = (): ArticleData => {
    return {
      id: this.id,
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
    validatePropertyNames(properties)

    const id = page.id
    const slug =
      properties['slug'].type === 'rich_text'
        ? properties['slug'].rich_text.map((text) => text.plain_text).join('')
        : ''
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
      id,
      slug,
      title,
      publishedAt,
      outerLink,
      tags,
      blocks: blocks || [],
    }

    return new ArticleModel(data)
  }
}
