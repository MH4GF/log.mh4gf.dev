import { BulletedListItem } from './BulletedListItem'
import { Callout } from './Callout'
import { Column } from './Column'
import { ColumnList } from './ColumnList'
import { Divider } from './Divider'
import { Heading1, Heading2, Heading3 } from './Heading'
import { Paragraph } from './Paragraph'
import { SyncedBlock } from './SyncedBlock'

import { BlockSchema, defaultBlockSchema } from '~/src/lib/ntn'

export const blockSchema: BlockSchema = {
  ...defaultBlockSchema,
  paragraph: {
    render: (block) => <Paragraph block={block} key={block.id} />,
  },
  column: {
    render: (block, renderBlocks) => (
      <Column block={block} renderBlocks={renderBlocks} key={block.id} />
    ),
  },
  column_list: {
    render: (block, renderBlocks) => (
      <ColumnList block={block} renderBlocks={renderBlocks} key={block.id} />
    ),
  },
  heading_1: {
    render: (block) => <Heading1 block={block} key={block.id} />,
  },
  heading_2: {
    render: (block) => <Heading2 block={block} key={block.id} />,
  },
  heading_3: {
    render: (block) => <Heading3 block={block} key={block.id} />,
  },
  bulleted_list_item: {
    render: (block, renderBlocks) => (
      <BulletedListItem
        block={block}
        renderBlocks={renderBlocks}
        key={block.id}
      />
    ),
  },
  callout: {
    render: (block) => <Callout block={block} key={block.id} />,
  },
  divider: {
    render: (block) => <Divider block={block} key={block.id} />,
  },
  synced_block: {
    render: (block, renderBlocks) => (
      <SyncedBlock block={block} renderBlocks={renderBlocks} key={block.id} />
    ),
  },
}
