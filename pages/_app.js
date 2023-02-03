import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AppWrapper } from '../components/context'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  )
}
