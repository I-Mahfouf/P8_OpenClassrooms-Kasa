import React from 'react';

import EmptyStar from '../../assets/emptyStar.svg'; 
import FilledStar from '../../assets/filledStar.svg'; 
import styles from './rating.module.scss';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`${styles.rating} ${index < rating ? styles.starFilled : styles.starEmpty}`}>
      {index < rating ? (
        <img className={styles.starImg} src={FilledStar} alt="Étoile remplie" /> 
      ) : (
        <img className={styles.starImg} src={EmptyStar} alt="Étoile vide" /> 
      )}
    </span>
  ));

  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;