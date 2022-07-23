import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'

import * as stories from './Image.stories'

describe('Image', () => {
  const { Default } = composeStories(stories)
  it('should render', () => {
    render(<Default />)
    expect(screen.getByRole('img', { name: 'profile.jpeg' }))
  })
})
