import '@/styles/globals.css'
import Layout from '../components/Layout/Layout'
import { StyledEngineProvider } from '@mui/material';


export default function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  )
}
