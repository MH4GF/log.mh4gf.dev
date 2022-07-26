import { createElement, Fragment } from 'react'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remark2Rehype from 'remark-rehype'
import { unified } from 'unified'

import { H1, H2, H3, Image, UnorderedList } from './components/tags'

export const processor = unified()
  .use(remarkParse)
  .use(remark2Rehype)
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      img: Image,
      ul: UnorderedList,
    },
  })
