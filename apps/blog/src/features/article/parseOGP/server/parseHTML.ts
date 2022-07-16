import axios from 'axios'
import { JSDOM } from 'jsdom'

import { OGPResult } from '../types'

const extractOGP = (head: HTMLHeadElement): OGPResult => {
  const properties: { [key in string]: string } = {}
  const metaElms = head.querySelectorAll('meta')
  metaElms.forEach((elm) => {
    const property = elm.getAttribute('property')
    const content = elm.getAttribute('content')
    if (property && content && property.startsWith('og:')) {
      const key = property.replace('og:', '')
      properties[key] = content
    }
  })

  return {
    url: properties['url'] || '',
    title: properties['title'] || '',
    description: properties['description'] || '',
    image: properties['image'] || '',
  }
}

export const parseHTML = async (url: string): Promise<OGPResult> => {
  const headers = { 'User-Agent': 'bot' }
  const res = await axios.get<string>(url, { headers, responseType: 'document' })
  const dom = new JSDOM(res.data)

  return extractOGP(dom.window.document.head)
}
