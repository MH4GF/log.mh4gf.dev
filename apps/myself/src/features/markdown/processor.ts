import { createElement, Fragment } from 'react'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remark2Rehype from 'remark-rehype'
import { unified } from 'unified'

import { Image } from './components/tags'

export const processor = unified()
  .use(remarkParse)
  .use(remark2Rehype)
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: {
      h1: 'h1',
      img: Image,
    },
  })
