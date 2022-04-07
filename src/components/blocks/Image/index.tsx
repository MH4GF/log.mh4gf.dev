import { FC } from 'react'

import { BlockViewProps } from '..'

const ImageBlock: FC<BlockViewProps<'image'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}

export { ImageBlock as Image }
