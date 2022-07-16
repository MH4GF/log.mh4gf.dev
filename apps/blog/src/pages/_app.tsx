import '~/src/styles/tailwind.css'
import type { AppPropsWithLayout } from 'next/app'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
