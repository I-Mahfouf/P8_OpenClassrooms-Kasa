import React from 'react';
import styles from './card.module.scss';

const Card = () => {
  return (
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <p className={styles.cardContent_text}>Titre de la location</p>
        </div>
      </div>
  );
};

export default Card;