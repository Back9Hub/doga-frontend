import CopyrightIcon from '@/icons/CopyrightIcon'
import IgIcon from '@/icons/IgIcon'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'
import logo from '/public/DOGA_LOGO_Gris.png'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" />
      </div>
      <hr className={styles.hr}/>
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
      <div className={styles.info}>
        <p>General Contractor CGC1531954</p>
        <p>Roofing Contractor CCC1333736</p>
      </div>
      <Link href="https://www.instagram.com/dogaconstruction/">
        <div className={styles.socialMedia}>
            <IgIcon className={styles.igIcon}/>
            <p>dogaconstruction</p>
        </div>
      </Link>
      <div className={styles.copyrightSection}>
        <div className={styles.year}>
          <CopyrightIcon className={styles.copyrightIcon}/>
          <p>2023</p>
        </div>
        <p>Todos los derechos reservados</p>
      </div>

    </footer>
  )
}