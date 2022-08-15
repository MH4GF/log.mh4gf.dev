import type { Plugin } from 'unified'
import { inspect } from 'unist-util-inspect'

// This plugin is used for debugging. do not use in production.
const print: Plugin = () => {
  return (tree) => {
    console.log(inspect(tree))
  }
}

export default print
