import Image from "next/image";
import { useState } from "react";
import Arrow from "../Arrow";
import styles from './staticSlider.module.scss'

const imageUrls = [];


export default function StaticSlider({className}) {
  let [index, setIndex] = useState(0);

  return (
    <div className={`${styles.staticSlider} ${className}`}>
      <div className={styles.slider}>
        <Image href={imageUrls[index]}/>
      </div>
      <Arrow className={styles.nextArrow} direction="right" onClick={() => setIndex(index => index + 1)}/>
    </div>
  )
}