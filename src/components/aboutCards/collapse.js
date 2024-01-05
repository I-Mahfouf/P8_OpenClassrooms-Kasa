import React, { useState } from 'react';
import styles from './collapse.module.scss';

import PropTypes from 'prop-types';
import arrow from '../../assets/arrow.png';

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={styles.collapseHead}>
        <img
          src={arrow}
          alt='flèche de la collapse'
          className={`${styles.arrow} ${isExpanded ? styles.arrow_down : styles.arrow_up}`}
          onClick={handleToggle}
        />
        <p className={styles.collapseHead_title}>{title}</p>
      </div>
      <div className={styles.collapseBody}>
        {isExpanded && <p className={styles.collapseBody_content}>{content}</p>}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;