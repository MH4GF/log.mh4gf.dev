import { ReactElement } from 'react'

import {
  BlockObject,
  BlockParseRules,
  BlockRenderRules,
  BuildBlockParser,
  RenderBlocks,
} from './type'

const runParse = (rules: BlockParseRules, blockObjects: BlockObject[]) => {
  return Promise.all(
    blockObjects.map(async (blockObject) => {
      let block = blockObject
      const run = rules[blockObject.type]
      if (run) {
        // TODO: remove never
        block = await run(blockObject as never)
      }

      if (block.children !== undefined) {
        block.children = await runParse(rules, block.children)
      }
      return block
    }),
  )
}

export const buildBlockParser: BuildBlockParser = (rules) => {
  return {
    parse: (blockObjects) => runParse(rules, blockObjects),
  }
}

export const useRenderBlocks = (rules: BlockRenderRules) => {
  const renderBlocks: RenderBlocks = (blocks) => {
    const elms = blocks.map((block) => {
      // TODO: remove never
      return rules[block.type](block as never, renderBlocks)
    })
    return elms.filter((elm): elm is NonNullable<ReactElement> => elm != null)
  }

  return { renderBlocks }
}

export { LogLevel } from '@notionhq/client'

export { defaultBlockSchema } from './defaultBlockSchema'
export type {
  PageObject,
  BlockObject,
  RichTextObject,
  BlockRenderRules,
  BlockParseRules,
  BlockViewProps,
} from './type'
export { NotionClient } from './client'
