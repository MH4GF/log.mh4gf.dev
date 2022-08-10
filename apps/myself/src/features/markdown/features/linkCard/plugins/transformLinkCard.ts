import type { Plugin } from 'unified'
import type { Node } from 'unist'
import { visit } from 'unist-util-visit'

import { isParagraph } from '../../../utils/finders'

const isTransformLinkcardTarget = (node: Node): boolean => {
  return isParagraph(node) && node.children.length === 1 && node.children[0].type === 'link'
}

export const transformLinkCard: Plugin = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (isTransformLinkcardTarget(node)) {
        node.type = 'linkCard'
      }
    })
  }
}
