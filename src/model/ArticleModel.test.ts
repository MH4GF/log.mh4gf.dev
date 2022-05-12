import { ArticleModel } from './ArticleModel'

import { imageFactory } from '~/src/test/factories/blocks/imageFactory'
import { quoteFactory } from '~/src/test/factories/blocks/quoteFactory'
import { pageFactory } from '~/src/test/factories/pageFactory'

describe('ArticleModel', () => {
  describe('fromPage', () => {
    it('works with page', () => {
      const page = pageFactory.build()
      const article = ArticleModel.fromPage(page)
      expect(article.slug).toEqual('')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('2021-05-30T13:31:00.000+00:00')
      expect(article.outerLink).toEqual('https://zenn.dev/mh4gf/articles/d917c809991808')
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
      expect(article.slug).toEqual('')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('')
      expect(article.outerLink).toEqual('')
      expect(article.blocks).toEqual([])
    })

    it('works with page and blocks', () => {
      const page = pageFactory.build()
      const blocks = [quoteFactory.build(), imageFactory.build()]
      const article = ArticleModel.fromPage(page, blocks)
      expect(article.slug).toEqual('')
      expect(article.title).toEqual('waiwai')
      expect(article.publishedAt).toEqual('2021-05-30T13:31:00.000+00:00')
      expect(article.outerLink).toEqual('https://zenn.dev/mh4gf/articles/d917c809991808')
      expect(article.blocks).not.toEqual([])
    })
  })
})
