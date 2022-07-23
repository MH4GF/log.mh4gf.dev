import { readdir } from 'fs/promises'

import { DEFAULT_PATH } from './constants'

type ArticlePathRepository = (path?: string) => Promise<Array<{ params: { slug: string } }>>

/**
 * @package
 */
export const articlePathRepository: ArticlePathRepository = async (path) => {
  const dirPath = path || DEFAULT_PATH
  const dirents = await readdir(dirPath, { withFileTypes: true })
  const slugs = dirents
    .filter((dirent) => !dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((fileName) => fileName.replace('.md', ''))
    .map((slug) => ({ params: { slug } }))

  return slugs
}
