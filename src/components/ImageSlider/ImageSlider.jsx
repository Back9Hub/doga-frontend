import { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import styles from './imageSlider.module.scss'


const indexToClass = ["image0", "image1", "image2", "image3", "image4", "image5", "image6"]

const getImageClass = (originalIndex, sliderIndex) => {

  let resultIndex = originalIndex + sliderIndex;

  return indexToClass[resultIndex] ?? (resultIndex < 0 ? "image0" : "image6")
}

export default function ImageSlider() {
  let [index, setIndex] = useState(0)

  const previous = () => {
    setIndex(index => !(index >= 2) ? index + 1 : index)
  }
  
  const next = () => {
    setIndex(index => !(index <= -2) ? index - 1 : index)
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        previous();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.container} >
        <div className={styles.imageSlider}>
          <div style={{ backgroundColor: "aqua" }} className={`${styles.image} ${styles[getImageClass(1, index)]}`}></div>
          <div style={{ backgroundColor: "green" }} className={`${styles.image} ${styles[getImageClass(2, index)]}`}></div>
          <div style={{ backgroundColor: "blue" }} className={`${styles.image} ${styles[getImageClass(3, index)]}`}></div>
          <div style={{ backgroundColor: "orange" }} className={`${styles.image} ${styles[getImageClass(4, index)]}`}></div>
          <div style={{ backgroundColor: "antiquewhite" }} className={`${styles.image} ${styles[getImageClass(5, index)]}`}></div>
        </div>
        <div className={styles.arrowsContainer}>
          <Arrow 
            className={styles.leftArrow} 
            direction='left' 
            isDark={true} 
            onClick={previous} 
          />
          <Arrow 
            direction='right'
            isDark={true}
            onClick={next}
          />
        </div>
      </div>
    </>
  )
}