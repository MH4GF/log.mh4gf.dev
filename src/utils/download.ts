import { createWriteStream, ReadStream } from 'fs'
import * as stream from 'stream'
import { promisify } from 'util'

import axios from 'axios'
import { extension } from 'mime-types'

const pipeline = promisify(stream.pipeline)

export const download = async (
  url: string,
  filepath: string,
  addExt = false,
): Promise<string> => {
  try {
    const res = await axios.get<ReadStream>(url, { responseType: 'stream' })
    const type = extension(res.headers['content-type'])
    let path = filepath
    if (addExt && type) {
      path = `${path}.${type}`
    }
    const writer = createWriteStream(path)
    await pipeline(res.data, writer)
  } catch (err) {
    console.error(err)
  }

  return filepath
}
