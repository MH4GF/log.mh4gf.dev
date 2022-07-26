import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

import { link } from './index.css'

import { About } from '~/src/components/About'

export const HomePage: FC = () => {
  return (
    <main>
      <About />
      <Link href={'call-for-job-offers'}>
        <a className={link}>call-for-job-offers</a>
      </Link>
    </main>
  )
}
