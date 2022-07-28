import 'the-new-css-reset/css/reset.css'
import 'ui/dist/style.css'
import '~/src/styles/global.css'

import type { AppPropsWithLayout } from 'next/app'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
