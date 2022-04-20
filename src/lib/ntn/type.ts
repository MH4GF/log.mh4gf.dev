import { Client } from '@notionhq/client'
import { ReactElement } from 'react'

type ElementType<T> = T extends (infer U)[] ? U : never
type MatchType<T, U, V = never> = T extends U ? T : V

/**
 * @package
 */
export type PageObject = MatchType<
  ElementType<Awaited<ReturnType<Client['databases']['query']>>['results']>,
  {
    properties: unknown
  }
>

/**
 * @package
 */
export type BlockObject<T = unknown> = MatchType<
  ElementType<Awaited<ReturnType<Client['blocks']['children']['list']>>['results']>,
  { type: T }
> & {
  children?: BlockObject[]
}

/**
 * @package
 */
export type RichTextObject = ElementType<
  MatchType<
    ElementType<Awaited<ReturnType<Client['blocks']['children']['list']>>['results']>,
    { type: 'paragraph' }
  >['paragraph']['rich_text']
>

/**
 * @package
 */
export type BlockRenderRules = {
  [key in BlockObject['type']]: (
    block: BlockObject<key>,
    renderBlocks: RenderBlocks,
  ) => ReactElement
}

/**
 * @package
 */
export type BlockParseRules = {
  [key in BlockObject['type']]?: (block: BlockObject<key>) => Promise<BlockObject>
}

/**
 * @package
 */
export interface BlockParser {
  parse: (blockObjects: BlockObject[]) => Promise<BlockObject[]>
}

/**
 * @package
 */
export type BuildBlockParser = (rules: BlockParseRules) => BlockParser

/**
 * @package
 */
export type RenderBlocks = (blocks: BlockObject[]) => ReactElement[]

/**
 * @package
 */
export interface BlockViewProps<T> {
  block: BlockObject<T>
  renderBlocks?: RenderBlocks
}
