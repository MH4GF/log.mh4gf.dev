import { rest } from 'msw'

export const SAMPLE_URL = 'https://mh4gf.dev'
export const NO_DATA_URL = 'https://nodata.mh4gf.dev'

const SAMPLE_HTML = `
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
    <meta property="og:url" content="https://mh4gf.dev/" />
    <meta property="og:site_name" content="Example Domain" />
    <meta property="og:image" content="https://mh4gf.dev/assets/images/social-card.png" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="https://mh4gf.dev/assets/images/social-card.png" />
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

export const handlers = {
  api: rest.get('http://localhost:3000/api/ogp', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        url: SAMPLE_URL,
        title: 'Example Domain',
        description: 'Hello! This is example :)',
        image: 'https://mh4gf.dev/assets/images/social-card.png',
      }),
    )
  }),
  apiLoading: rest.get('http://localhost:3000/api/ogp', (_req, res, ctx) => {
    return res(ctx.delay('infinite'))
  }),
  sample: rest.get(SAMPLE_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.body(SAMPLE_HTML))
  }),
  nodata: rest.get(NO_DATA_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.body(''))
  }),
}
