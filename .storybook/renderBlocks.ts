import { blockSchema } from '../src/components/blocks/blockSchema'
import { useRenderBlocks } from '../src/lib/ntn'

export const { renderBlocks } = useRenderBlocks(blockSchema)
