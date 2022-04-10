import { BlockSchema } from './type'

const defaultMessage = (type: string) => `not supported block type: ${type}`

export const defaultBlockSchema: BlockSchema = {
  audio: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  bookmark: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  breadcrumb: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  bulleted_list_item: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  callout: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  child_database: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  child_page: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  code: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  column: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  column_list: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  divider: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  embed: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  equation: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  file: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  heading_1: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  heading_2: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  heading_3: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  image: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  link_preview: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  link_to_page: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  numbered_list_item: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  paragraph: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  quote: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  to_do: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  toggle: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  template: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  synced_block: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  table_of_contents: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  table: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  table_row: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  video: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  pdf: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
  unsupported: {
    render: (block) => <div>{defaultMessage(block.type)}</div>,
  },
}
