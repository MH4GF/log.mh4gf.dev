import { ComponentPropsWithoutRef, FC } from 'react'

import { externalLinks } from '~/src/utils/externalLinks'

export const Footer: FC<ComponentPropsWithoutRef<'footer'>> = (props) => {
  return (
    <footer {...props}>
      <div>
        <a href={externalLinks.about} className="underline">
          © Hirotaka Miyagi
        </a>
      </div>
    </footer>
  )
}
