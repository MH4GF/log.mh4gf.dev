import { FC } from 'react'

import { BlockViewProps } from '..'

const ImageBlock: FC<BlockViewProps<'image'>> = ({ block }) => {
  // パフォーマンス・セキュリティ上build時に画像を保存して同一オリジンから配信した方が良さそう
  return <div>not supported block type: {block.type}</div>
}

export { ImageBlock as Image }