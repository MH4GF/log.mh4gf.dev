import { BulletedListItem } from './BulletedListItem'
import { Callout } from './Callout'
import { Code } from './Code'
import { Column } from './Column'
import { ColumnList } from './ColumnList'
import { Divider } from './Divider'
import { Heading1, Heading2, Heading3 } from './Heading'
import { Image } from './Image'
import { Paragraph } from './Paragraph'
import { Quote } from './Quote'
import { SyncedBlock } from './SyncedBlock'

import { BlockRenderRules } from '~/src/lib/ntn'

export const blockRenderRules: BlockRenderRules = {
  paragraph: (block) => <Paragraph block={block} key={block.id} />,
  column: (block, renderBlocks) => (
    <Column block={block} renderBlocks={renderBlocks} key={block.id} />
  ),

  column_list: (block, renderBlocks) => (
    <ColumnList block={block} renderBlocks={renderBlocks} key={block.id} />
  ),
  heading_1: (block) => <Heading1 block={block} key={block.id} />,
  heading_2: (block) => <Heading2 block={block} key={block.id} />,
  heading_3: (block) => <Heading3 block={block} key={block.id} />,
  bulleted_list_item: (block, renderBlocks) => (
    <BulletedListItem block={block} renderBlocks={renderBlocks} key={block.id} />
  ),
  callout: (block) => <Callout block={block} key={block.id} />,
  divider: (block) => <Divider block={block} key={block.id} />,
  synced_block: (block, renderBlocks) => (
    <SyncedBlock block={block} renderBlocks={renderBlocks} key={block.id} />
  ),
  image: (block) => <Image block={block} key={block.id} />,
  quote: (block) => <Quote block={block} key={block.id} />,
  code: (block) => <Code block={block} key={block.id} />,
}
