import React from 'react';

import EmptyStar from '../../assets/emptyStar.svg'; 
import FilledStar from '../../assets/filledStar.svg'; 
import styles from './rating.module.scss';

const Rating = ({ rating }) => {
  //* Création d'un tableau de 5 éléments représentant les étoiles *//
  const stars = Array.from({ length: 5 }, (_, index) => (
    //* Condition pour déterminer si l'étoile doit être remplie ou vide *//
    <span key={index} className={`${styles.rating} ${index < rating ? styles.starFilled : styles.starEmpty}`}>
      {index < rating ? ( //* Si l'index est inférieur à la note, affiche une étoile remplie, sinon une étoile vide *//
        <img className={styles.starImg} src={FilledStar} alt="Étoile remplie" /> 
      ) : (
        <img className={styles.starImg} src={EmptyStar} alt="Étoile vide" /> 
      )}
    </span>
  ));

  //* Affichage de toutes les étoiles dans un conteneur *//
  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;


