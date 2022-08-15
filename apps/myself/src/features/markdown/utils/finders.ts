import type { Paragraph } from 'mdast'
import type { Node } from 'unist'

const isObject = (target: unknown): target is object => {
  return typeof target === 'object' && target !== null
}

const isNode = (node: Node): node is Node => {
  return isObject(node) && 'type' in node
}

export const isParagraph = (node: Node): node is Paragraph => {
  return isNode(node) && node.type === 'paragraph'
}
