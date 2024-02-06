import React, { useState } from 'react';
import styles from './carrousel.module.scss';

//* Importation de l'icône de flèche précédente *//
import prevArrow from '../../assets/arrowPrev.png';
//* Importation de l'icône de flèche suivante *//
import nextArrow from '../../assets/arrowNext.png'; 

const Carrousel = ({ pictures }) => {
  //* Déclaration de l'état du currentIndex pour suivre l'index de l'image affichée *//
  const [currentIndex, setCurrentIndex] = useState(0);

  //* Fonction pour passer à la diapositive suivante en mettant à jour l'index *//
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  //* Fonction pour passer à la diapositive précédente en mettant à jour l'index *//
  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className={styles.mainCarrousel}>
      {pictures.length > 1 && ( //* Vérifie s'il y a plus d'une image *//
        <button className={styles.prevButton} onClick={previousSlide}>
          <img src={prevArrow} alt="Précedent" />
        </button>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.mainCarrousel_pic} />
      {pictures.length > 1 && ( 
        <p className={styles.mainCarrousel_numbers}>{`${currentIndex + 1}/${pictures.length}`}</p>
      )}
      {pictures.length > 1 && ( 
        <button className={styles.nextButton} onClick={nextSlide}>
          <img src={nextArrow} alt="Suivant" />
        </button>
      )}
    </div>
  );
};

export default Carrousel;

