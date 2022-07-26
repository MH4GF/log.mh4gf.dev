import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import * as stories from './MarkdownArticle.stories'

describe('MarkdownArticle', () => {
  const { Default } = composeStories(stories)
  it('should render from markdown', () => {
    render(<Default />)

    const targets = [
      ['article'],
      ['heading', { name: 'Heading 1' }],
      ['heading', { name: 'Heading 2' }],
      ['heading', { name: 'Heading 3' }],
    ]

    targets.forEach((target) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(screen.getByRole(...target)).toBeInTheDocument()
    })
  })
})
