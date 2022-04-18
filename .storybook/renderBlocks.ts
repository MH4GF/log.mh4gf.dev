import { blockRenderRules } from '../src/components/blocks/blockRenderRules'
import { useRenderBlocks } from '../src/lib/ntn'

export const { renderBlocks } = useRenderBlocks(blockRenderRules)
