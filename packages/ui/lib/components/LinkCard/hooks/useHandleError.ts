import type { SyntheticEvent } from 'react'
import { useCallback } from 'react'

type Args = {
  fallbackImageSrc: string
}

export const useHandleError = ({ fallbackImageSrc }: Args) =>
  useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      if (event.target && event.target instanceof HTMLImageElement) {
        event.target.src = fallbackImageSrc
      }
    },
    [fallbackImageSrc],
  )
