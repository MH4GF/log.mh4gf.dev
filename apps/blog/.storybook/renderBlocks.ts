import { blockRenderRules } from '../src/components/blocks/blockRenderRules'
import { useRenderBlocks } from 'notn'

export const { renderBlocks } = useRenderBlocks(blockRenderRules)
