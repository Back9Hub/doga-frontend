import Image from "next/image"
import Link from "next/link"
import styles from "./projectCard.module.scss"

export default function ProjectCard({src="/projectImages/project1.png", name="Project", description="Project Description"}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt={name}
          src={src}
          width="0"
          height="0"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <Link href="/portfolio/projectName">
          <button className={styles.button}>SEE</button>
        </Link>
      </div>
    </div>
  )
}