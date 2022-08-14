import type { Link } from 'mdast'
import type { Plugin } from 'unified'
import type { Node } from 'unist'
import { SKIP, visit } from 'unist-util-visit'

import { isParagraph } from '../../../utils/finders'

const maybeLinkChild = (node: Node): Link | null => {
  if (isParagraph(node) && node.children.length === 1 && node.children[0].type === 'link') {
    return node.children[0]
  }

  return null
}

export const dropParagraph: Plugin = () => {
  return (tree) => {
    visit(tree, 'paragraph', (node) => {
      const link = maybeLinkChild(node)
      if (link) {
        Object.assign(node, link)
        return SKIP
      }
    })
  }
}
