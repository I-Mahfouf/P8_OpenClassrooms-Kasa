import React from 'react';

import logoKasa from '../../assets/logoHeader.svg';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={logoKasa} alt="Logo de Kasa" />
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navList_btnHome}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navList_btnAbout}>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
