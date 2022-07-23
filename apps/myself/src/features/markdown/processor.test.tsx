import React, { Fragment } from 'react'

import { processor } from './processor'

describe('processor', () => {
  describe('processSync', () => {
    it('should return ReactElement with Heading children', () => {
      const markdownText = '# Hello World'
      const file = processor.processSync(markdownText)
      const expected = (
        <Fragment>
          <h1>Hello World</h1>
        </Fragment>
      )
      expect(file.result === expected)
    })
  })
})
