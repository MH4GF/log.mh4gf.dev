import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import * as stories from './ArticlePage.stories'

describe('ArticlePage', () => {
  const { Default } = composeStories(stories)
  it('should render page', () => {
    render(<Default />)
    expect(screen.getByRole('main'))
  })
})
