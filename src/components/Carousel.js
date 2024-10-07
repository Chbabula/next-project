import React, { useState } from "react";
import styles from "./carousel.module.css";
import { data } from "../data/Data";
import Image from "next/image";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  
  const totalCards = data.length; 

  const clickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };

  const clickNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const {
    beforeImgSrc,
    roleBefor,
    imageSrc,
    name,
    hike,
    qulif,
    dop,
    afterImgSrc,
    roleAfter,
  } = data[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.mainContainer}>
        {/* Static "Before" Card */}
        <div className={styles.beforeContainer}>
          <div className={styles.beforeTopDiv}>
            <p>BEFORE</p>
          </div>
          <div className={styles.beforeImg}>
            <Image
              src={beforeImgSrc}
              alt="Before Company"
              className={styles.beforeImage}
              width={100}
              height={100}
            />
          </div>
          <p className={styles.role}>{roleBefor}</p> 
        </div>
        
        <div className={styles.profileContainer}>
          <div className={styles.arrowImgContainer}>
            <Image 
              src="/arrow1.jpg  "
              alt="Left Arrow"
              width={150}  
              height={40}
              className={styles.arrowImage}
            />
            </div>
          <div className={styles.profileWrapper}>
            <div className={styles.upGradLogo}>upGrad</div>
            <div className={styles.profileImageContainer}>
              <Image
                src={imageSrc} 
                alt={name}
                className={styles.profileImage}
                width={200}
                height={200}
              />
              <div className={styles.hikeContainer}>
                <p><BsGraphUpArrow /> {hike}</p> 
              </div>
            </div>
            
            
            </div>
          <div className={styles.arrowImgContainer}>
          <Image 
            src="/arrow.jpg"
            alt="Right Arrow"
            width={150}  
            height={40}
            className={styles.arrowImage}
          />
          </div>

        </div>

   
        <div className={styles.afterContainer}>
          <div className={styles.afterTopDiv}>
            <p>AFTER</p>
          </div>
          <div className={styles.afterImg}>
            <Image
              src={afterImgSrc}
              alt="After Company"
              className={styles.afterImage}
              width={100}
              height={100}
            />
          </div>
          <p className={styles.role}>{roleAfter}</p> 
        </div>
      </div>
      <div className={styles.profileInfo}>
              <h3>{name}</h3> 
              <p>{qulif}</p> 
              <p>{dop}</p> 
            </div>
      <div className={styles.buttnContainer}>
        <div
          className={`${styles.prev} ${currentIndex === 0 ? styles.disabled : ""}`}
          onClick={clickPrev}
        >
          <IoIosArrowBack />
        </div>
        <p className={styles.ptag}>{currentIndex + 1}/{totalCards}</p> 
        <div
          className={`${styles.next} ${currentIndex === totalCards - 1 ? styles.disabled : ""}`}
          onClick={clickNext}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
