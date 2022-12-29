import axios from 'axios'
import { JSDOM, VirtualConsole } from 'jsdom'

import type { OGPResult } from '../types'

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
    imageSrc: properties['image'] || '',
  }
}

// 不正なCSSを読み込むとエラーが発生する。CSSはOGPに関係ないので無視する
// ref: https://github.com/jsdom/jsdom/issues/2230
const virtualConsole = new VirtualConsole()
virtualConsole.on('error', () => {
  console.warn('virtualConsole error')
})

export const parseHTML = async (url: string): Promise<OGPResult> => {
  const headers = { 'User-Agent': 'bot' }
  const res = await axios.get<string>(url, {
    headers,
    responseType: 'document',
  })
  const dom = new JSDOM(res.data, { virtualConsole })

  return extractOGP(dom.window.document.head)
}
