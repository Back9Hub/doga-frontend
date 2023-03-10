import Image from "next/image";
import { useState } from "react";
import Arrow from "../Arrow";
import styles from './staticSlider.module.scss'

const imageUrls = [
  "/projectImages/project1.png",
  "/projectImages/project2.png",
  "/projectImages/project3.png"
];


export default function StaticSlider({className}) {
  let [index, setIndex] = useState(0);

  return (
    <div className={`${styles.staticSlider} ${className}`}>
      <div style={{background: `url(${imageUrls[index]})`}} className={styles.slider}>
        {/* <Image src={imageUrls[index]}/> */}
      </div>
      <Arrow className={styles.nextArrow} direction="right" onClick={() => setIndex(index => index + 1)}/>
    </div>
  )
}