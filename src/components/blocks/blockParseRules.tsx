import merge from 'deepmerge'

import type { BlockParseRules } from '~/src/lib/ntn'
import { fileDownload } from '~/src/utils/blocks/fileDownload'
import { servingStaticFilePath } from '~/src/utils/servingStaticFilePath'

export const blockParseRules: BlockParseRules = {
  image: async (block) => {
    const filePath = await fileDownload(block)
    const servePath = servingStaticFilePath(filePath)
    switch (block.image.type) {
      case 'external':
        return merge(block, { image: { external: { url: servePath } } })
      case 'file':
        return merge(block, { image: { file: { url: servePath } } })
    }
  },
}
