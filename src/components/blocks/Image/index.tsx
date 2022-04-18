import Image from 'next/image'
import { FC } from 'react'

import { BlockObject, BlockViewProps } from '~/src/lib/ntn'

const imageUrl = (block: BlockObject<'image'>) => {
  switch (block.image.type) {
    case 'external':
      return block.image.external.url
    case 'file':
      return block.image.file.url
  }
}

const ImageBlock: FC<BlockViewProps<'image'>> = ({ block }) => {
  return <Image src={imageUrl(block)} width="600" height="400" alt="" />
}

export { ImageBlock as Image }
