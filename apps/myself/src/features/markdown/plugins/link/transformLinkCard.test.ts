import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { u } from 'unist-builder'
import { removePosition } from 'unist-util-remove-position'

import { transformLinkCard } from './transformLinkCard'

describe('transformLinkCard', () => {
  it('transform to linkCard from paragraph', () => {
    const processor = unified().use(remarkParse).use(transformLinkCard)
    const parsed = processor.parse(`[link](https://example.com)`)
    const result = removePosition(processor.runSync(parsed), true)
    const expected = u('root', [
      u('linkCard', [u('link', { title: null, url: 'https://example.com' }, [u('text', 'link')])]),
    ])

    expect(result).toStrictEqual(expected)
  })
})
