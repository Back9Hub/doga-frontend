import styles from './arrow.module.scss'

export default function Arrow({direction, isDark=false, className="", ...props}) {
  return (
    <div className={`${styles.arrow} ${isDark ? styles.dark : ""} ${className}`} {...props}>
      { direction === 'right' ? '>' : '<' }
    </div>
  )
}