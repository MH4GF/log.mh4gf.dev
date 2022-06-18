import type { NextApiResponse } from 'next'

import { parseHTML } from '~/src/features/article/parseOGP/server/parseHTML'
import { OGPResult } from '~/src/features/article/parseOGP/types'
import { apiHandler } from '~/src/server/apiHandler'
import { ValidationError } from '~/src/server/errors'

export default apiHandler.get(async (req, res: NextApiResponse<OGPResult>) => {
  let url = req.query.url
  if (url instanceof Array) {
    if (url.length === 1) {
      url = url[0]
    } else {
      throw new ValidationError('url query parameter must be a single value')
    }
  }

  const result = await parseHTML(url)

  res.status(200).json(result)
})
