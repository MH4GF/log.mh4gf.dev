import { Client } from '@notionhq/client'
import { ReactElement } from 'react'

type ElementType<T> = T extends (infer U)[] ? U : never
type MatchType<T, U, V = never> = T extends U ? T : V

export type PageObject = MatchType<
  ElementType<Awaited<ReturnType<Client['databases']['query']>>['results']>,
  {
    properties: unknown
  }
>

export type BlockObject<T = unknown> = MatchType<
  ElementType<
    Awaited<ReturnType<Client['blocks']['children']['list']>>['results']
  >,
  { type: T }
> & {
  children?: BlockObject[]
}

export type RichTextObject = ElementType<
  MatchType<
    ElementType<
      Awaited<ReturnType<Client['blocks']['children']['list']>>['results']
    >,
    { type: 'paragraph' }
  >['paragraph']['rich_text']
>

interface BlockSpec<T> {
  beforeParse?: (block: BlockObject<T>) => BlockObject
  render: (block: BlockObject<T>, renderBlocks: RenderBlocks) => ReactElement
}

export type BlockSchema = {
  [key in BlockObject['type']]: BlockSpec<key>
}
export interface BlockParser {
  parse: (blockObjects: BlockObject[]) => BlockObject[]
}
type UseBlockParserResult = {
  parser: BlockParser
}

export type BuildBlockParser = (schema: BlockSchema) => UseBlockParserResult

export type RenderBlocks = (blocks: BlockObject[]) => ReactElement[]

export interface BlockViewProps<T> {
  block: BlockObject<T>
  renderBlocks: RenderBlocks
}
