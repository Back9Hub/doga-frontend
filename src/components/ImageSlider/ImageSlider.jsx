import Link from 'next/link'
import { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import styles from './imageSlider.module.scss'


const imageUrls = [
  "./exampleImages/image1.png",
  "./exampleImages/image2.png",
  "./exampleImages/image3.png",
  "./exampleImages/image4.png",
  "./exampleImages/image5.png",
]

const indexToClass = ["image0", "image1", "image2", "image3", "image4", "image5", "image6"]

const getBackgroundImageStyles = (index) => {
  return (
    { 
      background: `url(${imageUrls[index]})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  )
}

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
          <div style={getBackgroundImageStyles(0)} className={`${styles.image} ${styles[getImageClass(1, index)]}`}>
            <h2 className={styles.title}>Commercial Renovations</h2>
            <Link href="/services">
              <button className={styles.button}>
                More Information
              </button>
            </Link>
          </div>
          <div style={getBackgroundImageStyles(1)} className={`${styles.image} ${styles[getImageClass(2, index)]}`}>
            <h2 className={styles.title}>Commercial Roofing</h2>
            <Link href="/services">
              <button className={styles.button}>
                More Information
              </button>
            </Link>
          </div>
          <div style={getBackgroundImageStyles(2)} className={`${styles.image} ${styles[getImageClass(3, index)]}`}>
            <h2 className={styles.title}>Residential Roofing</h2>
            <Link href="/services">
              <button className={styles.button}>
                More Information
              </button>
            </Link>
          </div>
          <div style={getBackgroundImageStyles(3)} className={`${styles.image} ${styles[getImageClass(4, index)]}`}>
            <h2 className={styles.title}>General Contractor</h2>
            <Link href="/services">
              <button className={styles.button}>
                More Information
              </button>
            </Link>
          </div>
          <div style={getBackgroundImageStyles(4)} className={`${styles.image} ${styles[getImageClass(5, index)]}`}>
            <h2 className={styles.title}>Commercial Renovation</h2>
            <Link href="/services">
              <button className={styles.button}>
                More Information
              </button>
            </Link>
          </div>
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