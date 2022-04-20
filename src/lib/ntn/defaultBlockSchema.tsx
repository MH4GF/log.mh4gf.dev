import { BlockRenderRules } from './type'

const defaultMessage = (type: string) => `not supported block type: ${type}`

/**
 * @package
 */
export const defaultBlockSchema: BlockRenderRules = {
  audio: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  bookmark: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  breadcrumb: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  bulleted_list_item: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  callout: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  child_database: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  child_page: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  code: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  column: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  column_list: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  divider: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  embed: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  equation: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  file: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  heading_1: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  heading_2: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  heading_3: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  image: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  link_preview: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  link_to_page: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  numbered_list_item: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  paragraph: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  quote: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  to_do: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  toggle: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  template: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  synced_block: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  table_of_contents: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  table: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  table_row: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  video: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  pdf: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
  unsupported: (block) => <div key={block.id}>{defaultMessage(block.type)}</div>,
}
