import { BlockRenderRules } from './type'

const defaultMessage = (type: string) => `not supported block type: ${type}`

/**
 * @package
 */
export const defaultBlockSchema: BlockRenderRules = {
  audio: (block) => <div>{defaultMessage(block.type)}</div>,
  bookmark: (block) => <div>{defaultMessage(block.type)}</div>,
  breadcrumb: (block) => <div>{defaultMessage(block.type)}</div>,
  bulleted_list_item: (block) => <div>{defaultMessage(block.type)}</div>,
  callout: (block) => <div>{defaultMessage(block.type)}</div>,
  child_database: (block) => <div>{defaultMessage(block.type)}</div>,
  child_page: (block) => <div>{defaultMessage(block.type)}</div>,
  code: (block) => <div>{defaultMessage(block.type)}</div>,
  column: (block) => <div>{defaultMessage(block.type)}</div>,
  column_list: (block) => <div>{defaultMessage(block.type)}</div>,
  divider: (block) => <div>{defaultMessage(block.type)}</div>,
  embed: (block) => <div>{defaultMessage(block.type)}</div>,
  equation: (block) => <div>{defaultMessage(block.type)}</div>,
  file: (block) => <div>{defaultMessage(block.type)}</div>,
  heading_1: (block) => <div>{defaultMessage(block.type)}</div>,
  heading_2: (block) => <div>{defaultMessage(block.type)}</div>,
  heading_3: (block) => <div>{defaultMessage(block.type)}</div>,
  image: (block) => <div>{defaultMessage(block.type)}</div>,
  link_preview: (block) => <div>{defaultMessage(block.type)}</div>,
  link_to_page: (block) => <div>{defaultMessage(block.type)}</div>,
  numbered_list_item: (block) => <div>{defaultMessage(block.type)}</div>,
  paragraph: (block) => <div>{defaultMessage(block.type)}</div>,
  quote: (block) => <div>{defaultMessage(block.type)}</div>,
  to_do: (block) => <div>{defaultMessage(block.type)}</div>,
  toggle: (block) => <div>{defaultMessage(block.type)}</div>,
  template: (block) => <div>{defaultMessage(block.type)}</div>,
  synced_block: (block) => <div>{defaultMessage(block.type)}</div>,
  table_of_contents: (block) => <div>{defaultMessage(block.type)}</div>,
  table: (block) => <div>{defaultMessage(block.type)}</div>,
  table_row: (block) => <div>{defaultMessage(block.type)}</div>,
  video: (block) => <div>{defaultMessage(block.type)}</div>,
  pdf: (block) => <div>{defaultMessage(block.type)}</div>,
  unsupported: (block) => <div>{defaultMessage(block.type)}</div>,
}
