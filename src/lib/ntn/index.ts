import { ReactElement } from 'react'

import {
  BlockObject,
  BlockParser,
  BlockSchema,
  BuildBlockParser,
  RenderBlocks,
} from './type'

const runParse = (schema: BlockSchema, blockObjects: BlockObject[]) => {
  return blockObjects.map((blockObject) => {
    const beforeParse = schema[blockObject.type].beforeParse
    // TODO: remove never
    const block = beforeParse ? beforeParse(blockObject as never) : blockObject
    if (block.children !== undefined) {
      block.children = runParse(schema, block.children)
    }
    return block
  })
}

export const buildBlockParser: BuildBlockParser = (schema) => {
  const parser: BlockParser = {
    parse: (blockObjects) => runParse(schema, blockObjects),
  }

  return { parser }
}

export const useRenderBlocks = (schema: BlockSchema) => {
  const renderBlocks: RenderBlocks = (blocks) => {
    const elms = blocks.map((block) => {
      // TODO: remove never
      return schema[block.type].render(block as never, renderBlocks)
    })
    return elms.filter((elm): elm is NonNullable<ReactElement> => elm != null)
  }

  return { renderBlocks }
}

export { LogLevel } from '@notionhq/client'

export { defaultBlockSchema } from './defaultBlockSchema'
export type { BlockObject, RichTextObject, BlockSchema } from './type'
export { NotionClient } from './client'
