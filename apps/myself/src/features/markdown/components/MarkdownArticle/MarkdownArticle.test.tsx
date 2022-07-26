import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import * as stories from './MarkdownArticle.stories'

describe('MarkdownArticle', () => {
  const { Default } = composeStories(stories)
  it('should render from markdown', () => {
    render(<Default />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})
