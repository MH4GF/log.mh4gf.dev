import React from 'react'

import { isLinkCard } from '.'

describe('isLinkCard', () => {
  it('should return true when href equals children', () => {
    const href = 'https://mh4gf.dev'
    const children = [href]
    expect(isLinkCard(href, children)).toBe(true)
  })

  it('should return false when href NOT equals children', () => {
    const href = 'https://mh4gf.dev'
    const children = <div>hello</div>
    expect(isLinkCard(href, children)).toBe(false)
  })
})
