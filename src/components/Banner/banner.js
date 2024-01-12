import React from 'react';
import styles from './banner.module.scss';

const Banner = ({ text, imageUrl }) => {
  return (
    <div className={styles.bannerContainer}>
      <img src={imageUrl} alt="Banner" className={styles.bannerPicture} />
      <p className={styles.bannerText}>{text}</p>
    </div>
  );
};

export default Banner;