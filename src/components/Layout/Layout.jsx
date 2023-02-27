import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";
import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from './layout.module.scss'

const montserrat = Montserrat({ 
  weight: ['300','400','500','600','700'],
  subsets: ['latin'] })

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Doga Construction</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <div className={styles.scroller}>
        <Navbar/>
          {children}
        <Footer />
      </div>
    </>
  )
}