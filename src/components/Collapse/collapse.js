import React, { useState } from 'react';
import styles from './collapse.module.scss';

import PropTypes from 'prop-types';
import arrow from '../../assets/arrow.png';

const Collapse = ({ title, content, customClass }) => {
  // Utilisation du hook useState pour gérer l'état de l'expansion/repli du contenu //
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction de gestion du basculement de l'état d'expansion/repli //
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${customClass ||''}`}>
      <div className={styles.collapseHead} onClick={handleToggle}>
        <img
          src={arrow}
          alt='flèche de la collapse'
          className={`${styles.arrow} ${isExpanded ? styles.arrow_down : styles.arrow_up}`}
        />
        <p className={styles.collapseHead_title}>{title}</p>
      </div>
      <div className={`${styles.collapseBody} ${isExpanded ? styles.showContent : ''}`}>
      <div className={`${styles.collapseBody_content}`}>
        {Array.isArray(content)
          ? content.map((item, index) => <div key={index}>{item}</div>)
          : content}
      </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  customClass: PropTypes.string,
};

export default Collapse;

// Les propTypes sont utilisés pour spécifier les types attendus des propriétés (title, content, customClass) //
// Signale les erreurs potentielles //

// onClick={handleToggle} : Cet évenement signifie que lorsque l'élément avec l'icône de la flèche est cliqué, la fonction handleToggle sera exécutée. //