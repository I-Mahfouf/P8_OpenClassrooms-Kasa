import React from 'react';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <p className={styles.bannerContainer_content}>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;