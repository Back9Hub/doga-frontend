import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'
import logo from '/public/DOGA_LOGO_Blanco.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
      <Link href="/">
        <Image src={logo} alt="logo"/>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT US</Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/contact-us">CONTACT US</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}