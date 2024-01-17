import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const ErrorPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main>
        <div className={styles.errorPageContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.textContainer_title}>404</h1>
            <h2 className={styles.textContainer_subtitle}>Oups! La page que vous demandez n'existe pas.</h2>
          </div>
          <div>
            <Link className={styles.returnHome} to='/'>Retourner sur la page d'accueil</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;