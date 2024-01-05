import React, { useState } from 'react';
import styles from './carrousel.module.scss';

import prevArrow from '../../assets/arrowPrev.png';
import nextArrow from '../../assets/arrowNext.png';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className={styles.mainCarrousel}>
      <button className={styles.prevButton} onClick={previousSlide}>
        <img src={prevArrow} alt="Précedent" />
      </button>
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.mainCarrousel_pic} />
      <p className={styles.mainCarrousel_numbers}>{`${currentIndex + 1}/${pictures.length}`}</p>
      <button className={styles.nextButton} onClick={nextSlide}>
        <img src={nextArrow} alt="Suivant" />
      </button>
    </div>
  );
};

export default Carrousel;