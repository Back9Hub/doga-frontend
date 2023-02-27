import Link from "next/link"
import styles from "./homepage.module.scss"

export default function Homepage() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>THE BEST CONSTRUCTION PROJECTS</h1>
        <Link href="/contact-us">
          <button className={styles.cta}>A QUOTE NOW</button>
        </Link>
      </section>
      <section className={styles.aboutUs}>
        <div className={styles.aboutDescription}>
          <h1 className={styles.sectionTitle}>
            ABOUT US
          </h1>
          <p>We strive to understand your roof’s problems and needs, then we inspect it to identify the problems.</p>
          <p>
            Your home’s roof not only protects the contents of your home, but it also acts as a layer of defense for the elements of the structure itself. If your roof is 
            well-maintained, you’re also maintaining the supporting beams, the rafters, the walls, and the foundation, which keeps your home safer and extends its life.
          </p>
        </div>
        <div className={styles.aboutImages}>
          
        </div>
      </section>
      <section className={styles.services}>
          <h1 className={styles.sectionTitle}>
            OUR SERVICES
          </h1>
      </section>
      <section className={styles.contactUs}>
        <h2>Do you want to contact us?</h2>
        <Link href="/contact-us">
          <button>ASK FOR INFORMATION</button>
        </Link>
      </section>
    </>
  )
}