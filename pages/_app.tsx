import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '@/components/Layout'
import '@/styles/globals.css'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const theme = {
  colors: {
    primary: '#117cad',
    hover: '#115caa',
    navUnderline: 'palevioletred',
  },
  radius: {
    buttonRadius: '3px',
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
