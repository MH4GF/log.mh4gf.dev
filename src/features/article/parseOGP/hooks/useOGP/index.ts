import axios from 'axios'
import useSWR from 'swr'

import { OGPResult } from '../../types'

type UseOGP = (url: string) => {
  result: OGPResult
}

const fetcher = (url: string) => axios.get<OGPResult>(url).then((res) => res.data)

export const useOGP: UseOGP = (url) => {
  const { data } = useSWR<OGPResult>(`/api/ogp?url=${url}`, fetcher, { suspense: true })

  // NOTE: suspense is not supported typescript, @see: https://github.com/vercel/swr/issues/1412
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { result: data! }
}
