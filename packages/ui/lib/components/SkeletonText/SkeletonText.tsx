import type { FC } from 'react'
import ContentLoader from 'react-content-loader'

type Props = {
  height?: string
}

const defaultProps: Required<Props> = {
  height: '1rem',
}

export const SkeletonText: FC<Props> = (props) => {
  const { height } = { ...props, ...defaultProps }

  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={height}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
  )
}
