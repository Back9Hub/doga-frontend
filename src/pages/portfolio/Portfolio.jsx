import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './portfolio.module.scss'

export default function Portfolio() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>KNOW OUR PROJECTS</h1>
      </section>
      <div className={styles.description}>
        <p>At DOGA Constructions, we know to build commercial and residential roofing.</p>
      </div>
      <section className={styles.projects}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </section>

    </>
  )
}