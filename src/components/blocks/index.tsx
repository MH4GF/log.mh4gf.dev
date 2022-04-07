import { createElement, FC } from 'react'

import { Audio } from './Audio'
import { Bookmark } from './Bookmark'
import { Breadcrumb } from './Breadcrumb'
import { BulletedListItem } from './BulletedListItem'
import { Callout } from './Callout'
import { ChildDatabase } from './ChildDatabase'
import { ChildPage } from './ChildPage'
import { Code } from './Code'
import { Column } from './Column'
import { ColumnList } from './ColumnList'
import { Divider } from './Divider'
import { Embed } from './Embed'
import { Equation } from './Equation'
import { File } from './File'
import { Heading1, Heading2, Heading3 } from './Heading'
import { Image } from './Image'
import { LinkPreview } from './LinkPreview'
import { LinkToPage } from './LinkToPage'
import { NumberedListItem } from './NumberedListItem'
import { Paragraph } from './Paragraph'
import { Pdf } from './Pdf'
import { Quote } from './Quote'
import { SyncedBlock } from './SyncedBlock'
import { Table } from './Table'
import { TableOfContents } from './TableOfContents'
import { TableRow } from './TableRow'
import { Template } from './Template'
import { ToDo } from './ToDo'
import { Toggle } from './Toggle'
import { Unsupported } from './Unsupported'
import { Video } from './Video'

import { BlockObject } from '~/src/lib/notion/type'

interface Props {
  blocks: BlockObject[]
}

export interface BlockViewProps<T> {
  block: BlockObject<T>
}

const blockView: {
  [key in BlockObject['type']]: FC<BlockViewProps<key>>
} = {
  audio: Audio,
  bookmark: Bookmark,
  breadcrumb: Breadcrumb,
  bulleted_list_item: BulletedListItem,
  callout: Callout,
  child_database: ChildDatabase,
  child_page: ChildPage,
  code: Code,
  column: Column,
  column_list: ColumnList,
  divider: Divider,
  embed: Embed,
  equation: Equation,
  file: File,
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  image: Image,
  link_preview: LinkPreview,
  link_to_page: LinkToPage,
  numbered_list_item: NumberedListItem,
  paragraph: Paragraph,
  pdf: Pdf,
  quote: Quote,
  synced_block: SyncedBlock,
  table: Table,
  table_of_contents: TableOfContents,
  table_row: TableRow,
  template: Template,
  to_do: ToDo,
  toggle: Toggle,
  unsupported: Unsupported,
  video: Video,
}

export const renderBlocks: FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => {
        // TODO: remove any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return createElement(blockView[block.type] as any, {
          block,
          key: block.id,
        })
      })}
    </>
  )
}
