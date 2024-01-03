import React, { useState } from 'react';

import styles from './collapse.module.scss';
import arrow from '../../assets/arrow.png';

const Collapse = ({ title, description }) => {
  // Utilisation de useState pour gérer l'état local (isExpanded) du composant //
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour gérer le basculement de l'état isExpanded au clic sur la flèche //
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={styles.collapseHead}>
        <img src={arrow} alt='flèche de la collapse' className={`${styles.arrow} ${isExpanded ? styles.arrow_down : styles.arrow_up}`}
          onClick={handleToggle}></img>
        <p className={styles.collapseHead_title}>{title}</p>
      </div>
      <div className={styles.collapseBody}>
        {isExpanded && <p className={styles.collapseBody_description}>{description}</p>}
      </div>
    </div>
  );
};

export default Collapse;