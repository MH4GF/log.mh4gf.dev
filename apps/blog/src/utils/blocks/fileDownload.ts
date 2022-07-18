import { existsSync, mkdirSync } from 'fs'

import type { BlockObject } from 'notn'

import { download } from '../download'

const uploadDir = (type: string) => `public/tmp/${type}`

const setupDir = (dir: string) => {
  if (!existsSync(dir)) mkdirSync(dir)
}

const fileUrl = (block: BlockObject): string => {
  switch (block.type) {
    case 'image':
      switch (block.image.type) {
        case 'external':
          return block.image.external.url
        case 'file':
          return block.image.file.url
      }
      break
    default:
      throw new Error(`not supported block type: ${block.type}`)
  }
}

export const fileDownload = async (block: BlockObject): Promise<string> => {
  const dir = uploadDir(block.type)
  setupDir(dir)
  const filepath = `${dir}/${block.id}`
  const url = fileUrl(block)

  const result = await download(url, filepath, { addExt: true })

  return result
}
