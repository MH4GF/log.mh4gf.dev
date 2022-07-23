import { readFile } from 'fs/promises'

import type { Article } from '../types'

type ArticleDetailRepository = (slug: string, path?: string) => Promise<Article>
const DEFAULT_PATH = 'contents/articles'

/**
 * @package
 */
export const articleDetailRepository: ArticleDetailRepository = async (slug, path) => {
  const filePath = `${path || DEFAULT_PATH}/${slug}.md`
  const file = await readFile(filePath, 'utf8').catch(() => {
    throw new Error(`no such file contents for slug: ${slug}`)
  })

  return {
    markdownText: file,
  }
}
