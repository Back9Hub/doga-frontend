import IconServiceCard from '@/components/IconServiceCard'
import styles from './services.module.scss'

const services = [
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""}
]



export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>DO YOU ALREADY KNOW OUR SERVICES?</h1>
      </section>
      <div className={styles.about}>
        <h2 className={styles.dogaTitle}>DOGA CONSTRUCTIONS</h2>
        <p>A well-built roof is essential to the value, safety, and durability of a home.</p>
        <p>At DOGA Constructions, we know to build commercial and residential roofing.</p>
      </div>
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>SERVICES</h2>
        <div className={styles.servicesContainer}>
          <IconServiceCard 
            className={styles.card}
            title="Commercial Roofing"
            src="/serviceIcons/commercial-roofing.png"
          />
          <IconServiceCard
            className={styles.card}
            title="Residential Roofing"
            src="/serviceIcons/residential-roofing.png"
          />
          <IconServiceCard
            className={styles.card}
            title="General Contractor"
            src="/serviceIcons/general-contractor.png"
          />
          <IconServiceCard
            className={styles.card}
            title="Residential Renovations"
            src="/serviceIcons/residential-renovations.png"
          />
          <IconServiceCard
            className={styles.card}
            title="Commercial Renovations"
            src="/serviceIcons/commercial-renovations.png"
          />
        </div>
      </section>
      <section className={styles.serviceAreas}>
        <h2 className={styles.serviceAreasTitle}>SERVICE AREAS</h2>
      </section>

    </>
  )
}