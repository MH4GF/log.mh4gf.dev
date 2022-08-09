import { isParagraph } from './finders'

describe('isParagraph', () => {
  it('should be true when passed a paragraph node', () => {
    const node = { type: 'paragraph' }
    expect(isParagraph(node)).toBe(true)
  })
  it('should be false when passed not paragraph node', () => {
    const node = { type: 'root' }
    expect(isParagraph(node)).toBe(false)
  })
})
