import Image from "next/image";
import styles from "./iconServiceCard.module.scss"

export default function({title, src, className = ""}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.iconContainer}>
        <Image 
          className={styles.icon} 
          src={src}
          width="0"
          height="0"
          style={{ width: '100%', height: 'auto' }}
          sizes="100vw"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}