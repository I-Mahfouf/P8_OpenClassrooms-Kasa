import React, {useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import logoKasa from '../../assets/logoHeader.svg';



const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src={logoKasa} alt="Logo de Kasa" />
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={`${styles.navList_btnHome} ${activePage === '/' ? styles.activeLink : ''}`}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" className={`${styles.navList_btnAbout} ${activePage === '/about' ? styles.activeLink : ''}`}>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
