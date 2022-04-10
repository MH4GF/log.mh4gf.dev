import { ReactElement } from 'react'

import {
  BlockParser,
  BlockSchema,
  BuildBlockParser,
  RenderBlocks,
} from './type'

export const buildBlockParser: BuildBlockParser = () => {
  const parser: BlockParser = {
    parse: (blockObjects) => {
      return blockObjects
    },
  }

  return { parser }
}

export const useRenderBlocks = (schema: BlockSchema) => {
  const renderBlocks: RenderBlocks = (blocks) => {
    const elms = blocks.map((block) => {
      // TODO: remove never
      return schema[block.type]?.render(block as never, renderBlocks)
    })
    return elms.filter((elm): elm is NonNullable<ReactElement> => elm != null)
  }

  return { renderBlocks }
}

export { LogLevel } from '@notionhq/client'

export { defaultBlockSchema } from './defaultBlockSchema'
export type { BlockObject, RichTextObject, BlockSchema } from './type'
export { NotionClient } from './client'
