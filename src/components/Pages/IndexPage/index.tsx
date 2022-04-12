import { Cloudinary } from '@cloudinary/url-gen'
import Image from 'next/image'

import { ArticleList } from '~/src/components/ArticleList'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
  }[]
}

const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
})

const myImage = cld.image('sample')

export const IndexPage: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <Image src={myImage.toURL()} width="300" height="200" />
      <ArticleList articles={articles} />
    </>
  )
}
