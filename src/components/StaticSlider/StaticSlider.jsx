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
  let [goingRight, setGoingRight] = useState(true);

  const onClickLeft = () => {
    setIndex(index => index - 1)
    setGoingRight(false);

    if (index === 1) {
      setGoingRight(true);
    }
  }

  return (
    <div className={`${styles.staticSlider} ${className}`}>
      <div 
        // style={{
        //   background: `url(${})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover"
        // }}
        className={styles.slider}
      >
        <Image 
          alt="Project Image"
          src={imageUrls[index]}
          width="0"
          height="0"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          sizes="100vw"
        />
      </div>
      {index !== imageUrls.length - 1 && goingRight
      ? <Arrow className={styles.nextArrow} direction="right" onClick={() => setIndex(index => index + 1)}/>
      : <Arrow className={styles.nextArrow} direction="left" onClick={onClickLeft}/>
      }
    </div>
  )
}