import { setupServer } from 'msw/node'

import { handlers, NO_DATA_URL, SAMPLE_URL } from '../__mocks__/handlers'

import { parseHTML } from './parseHTML'

const mockServer = setupServer(...Object.values(handlers))

describe('parseHTML', () => {
  beforeAll(() => mockServer.listen())
  afterEach(() => mockServer.resetHandlers())
  afterAll(() => mockServer.close())

  it('return parsed ogp', async () => {
    const url = SAMPLE_URL
    const result = await parseHTML(url)
    const expected = {
      url: 'https://mh4gf.dev/',
      title: 'Example Domain',
      description: 'Hello! This is example :)',
      imageSrc: 'https://mh4gf.dev/assets/images/social-card.png',
    }
    expect(result).toStrictEqual(expected)
  })

  it('return empty when ogp properties are not found', async () => {
    const url = NO_DATA_URL
    const result = await parseHTML(url)
    const expected = {
      url: '',
      title: '',
      description: '',
      imageSrc: '',
    }
    expect(result).toStrictEqual(expected)
  })
})
