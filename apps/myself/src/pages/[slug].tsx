import type { NextPageWithLayout } from 'next'

import { ArticlePage } from '~/src/components/pages/ArticlePage'

const Page: NextPageWithLayout = () => {
  const text = `# Hello, world!
  waiwai
  `
  return <ArticlePage markdownText={text} />
}

export default Page
