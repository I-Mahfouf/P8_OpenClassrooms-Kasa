import React from 'react';
import styles from './rating.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`${styles.rating} ${index < rating ? styles.starFilled : styles.starEmpty}`}>
      <FontAwesomeIcon icon={faStar} />
    </span>
  ));

  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;