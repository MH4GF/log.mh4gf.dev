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

    it('throw error if both slug and outerLink have values', () => {
      const slug = 'my-slug'
      const outerLink = 'https://example.com'

      expect(
        () => new ArticleModel({ slug, title, publishedAt, outerLink, tags, blocks }),
      ).toThrowError(
        `there must not be a value for both slug and outerLink. slug: ${slug}, outerLink: ${outerLink}`,
      )
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

    it('works even if some information on the page is missing', () => {
      const page = pageFactory.build({
        properties: {
          outerLink: { url: '' },
          publishedAt: { date: { start: '' } },
        },
      })
      const article = ArticleModel.fromPage(page)
      expect(article.slug).toEqual('my-slug')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('')
      expect(article.outerLink).toEqual('')
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
