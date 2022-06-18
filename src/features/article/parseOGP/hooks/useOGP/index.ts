import axios from 'axios'
import useSWR from 'swr'

import type { OGPResult } from '../../types'

type UseOGP = (url: string) => {
  result: OGPResult
}

const fetcher = (url: string) =>
  axios
    .get<OGPResult>(url, { baseURL: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000' })
    .then((res) => res.data)

export const useOGP: UseOGP = (url) => {
  const { data } = useSWR<OGPResult>(`api/ogp?url=${url}`, fetcher, {
    suspense: true,
  })

  // NOTE: suspense is not supported typescript, @see: https://github.com/vercel/swr/issues/1412
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { result: data! }
}
