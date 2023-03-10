import ImageSlider from "@/components/ImageSlider"
import StaticSlider from "@/components/StaticSlider"
import EngineerIcon from "@/icons/EngineerIcon"
import FinancingIcon from "@/icons/FinancingIcon"
import QualityIcon from "@/icons/QualityIcon"
import ReliabilityIcon from "@/icons/ReliabilityIcon"
import Image from "next/image"
import Link from "next/link"
import styles from "./home.module.scss"

export default function Homepage() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>THE BEST CONSTRUCTION PROJECTS</h1>
        <Link href="/contact">
          <button className={styles.cta}>A QUOTE NOW</button>
        </Link>
      </section>
      <section id="about" className={styles.aboutUs}>
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
        <StaticSlider className={styles.staticSlider}/>
      </section>
      <section className={styles.services}>
        <h1 className={styles.sectionTitle}>
          OUR SERVICES
        </h1>
        <div className={styles.imageSliderContainer}>
          <ImageSlider/>
        </div>
      </section>
      <div>
        <ul className={styles.serviceIcons}>
          <li className={styles.service}>
            <QualityIcon className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>QUALITY</h3>
          </li>
          <li className={styles.service}>
            <EngineerIcon className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>EXPERT ENGINEER</h3>
          </li>
          <li className={styles.service}>
            <ReliabilityIcon className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>RELIABILITY</h3>
          </li>
          <li className={styles.service}>
            <FinancingIcon className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>FINANCING</h3>
          </li>
        </ul>
      </div>
      <div className={styles.contactUs}>
        <h2>Do you want to contact us?</h2>
        <Link href="/contact">
          <button>ASK FOR INFORMATION</button>
        </Link>
      </div>
    </>
  )
}