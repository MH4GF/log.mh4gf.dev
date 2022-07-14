import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

import { ValidationError } from './errors'

type ErrorResult = {
  code: number
  name: string
  message: string
}

export const apiHandler = nextConnect({
  onError: (error: unknown, _req: NextApiRequest, res: NextApiResponse<ErrorResult>) => {
    if (error instanceof ValidationError) {
      return res.status(400).send({
        code: 400,
        name: error.name,
        message: error.message,
      })
    }

    return res.status(500).send({
      code: 500,
      name: 'ServerError',
      message: 'Something wrong :(',
    })
  },
})
