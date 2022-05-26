import { BlockObject } from '../lib/ntn'

import { ArticleModel, Tag } from './ArticleModel'

import { imageFactory } from '~/src/test/factories/blocks/imageFactory'
import { quoteFactory } from '~/src/test/factories/blocks/quoteFactory'
import { pageFactory } from '~/src/test/factories/pageFactory'

describe('ArticleModel', () => {
  describe('constructor', () => {
    const title = 'waiwai'
    const publishedAt = '2021-05-30T13:31:00.000+00:00'
    const tags: Tag[] = []
    const blocks: BlockObject[] = []
    const slug = 'my-slug'
    const outerLink = ''

    it('throw error if both slug and outerLink have values', () => {
      const slug = 'my-slug'
      const outerLink = 'https://example.com'

      expect(
        () => new ArticleModel({ slug, title, publishedAt, outerLink, tags, blocks }),
      ).toThrowError(
        `there must not be a value for both slug and outerLink. slug: ${slug}, outerLink: ${outerLink}`,
      )
    })

    it('throw error If a required fields do not exist', () => {
      expect(
        () => new ArticleModel({ slug, title: '', publishedAt: '', outerLink, tags, blocks }),
      ).toThrowError(`required fields do not exist: title, publishedAt`)
      expect(
        () => new ArticleModel({ slug, title, publishedAt: '', outerLink, tags, blocks }),
      ).toThrowError(`required fields do not exist: publishedAt`)
      expect(
        () => new ArticleModel({ slug, title: '', publishedAt, outerLink, tags, blocks }),
      ).toThrowError(`required fields do not exist: title`)
    })
  })

  describe('fromPage', () => {
    it('works with page', () => {
      const page = pageFactory.build()
      const article = ArticleModel.fromPage(page)
      expect(article.slug).toEqual('my-slug')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('2021-05-30T13:31:00.000+00:00')
      expect(article.outerLink).toEqual('')
      expect(article.tags).toEqual([{ color: 'blue', name: 'Zenn' }])
      expect(article.blocks).toEqual([])
    })

    it('works with page and blocks', () => {
      const page = pageFactory.build()
      const blocks = [quoteFactory.build(), imageFactory.build()]
      const article = ArticleModel.fromPage(page, blocks)
      expect(article.slug).toEqual('my-slug')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('2021-05-30T13:31:00.000+00:00')
      expect(article.outerLink).toEqual('')
      expect(article.blocks).not.toEqual([])
    })
  })

  describe('toJSON', () => {
    it('return JSON serializable object', () => {
      const page = pageFactory.build()
      const article = ArticleModel.fromPage(page)
      expect(article.toJSON()).toEqual({
        slug: 'my-slug',
        title: 'waiwai',
        publishedAt: '2021-05-30T13:31:00.000+00:00',
        outerLink: '',
        tags: [{ color: 'blue', name: 'Zenn' }],
        blocks: [],
      })
    })
  })
})
