import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { parseHTML } from './parseHTML'

const bodyHTML = `
<!doctype html>
<html>
  <head>
    <title>Example Domain</title>
    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Example Domain" />
    <meta property="og:locale" content="en_US" />
    <meta name="description" content="Hello! This is example :)" />
    <meta property="og:description" content="Hello! This is example :)" />
    <meta property="og:url" content="https://example.com/" />
    <meta property="og:site_name" content="Example Domain" />
    <meta property="og:image" content="https://example.com/assets/images/social-card.png" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="https://example.com/assets/images/social-card.png" />
    <meta property="twitter:title" content="Example Domain" />
    <meta name="twitter:site" content="@example" />
  </head>
<body>
  <div>
    <h1>Example Domain</h1>
  </div>
</body>
</html>
`

const mockServer = setupServer(
  rest.get('https://example.com', (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(bodyHTML))
  }),
  rest.get('https://nodata.com', (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(''))
  }),
)

describe('parseHTML', () => {
  beforeAll(() => mockServer.listen())
  afterEach(() => mockServer.resetHandlers())
  afterAll(() => mockServer.close())

  it('return parsed ogp', async () => {
    const url = 'https://example.com'
    const result = await parseHTML(url)
    const expected = {
      url: 'https://example.com/',
      title: 'Example Domain',
      description: 'Hello! This is example :)',
      image: 'https://example.com/assets/images/social-card.png',
    }
    expect(result).toStrictEqual(expected)
  })

  it('return empty when ogp properties are not found', async () => {
    const url = 'https://nodata.com'
    const result = await parseHTML(url)
    const expected = {
      url: '',
      title: '',
      description: '',
      image: '',
    }
    expect(result).toStrictEqual(expected)
  })
})
