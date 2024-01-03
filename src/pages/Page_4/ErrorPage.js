import React from 'react';
import styles from './ErrorPage.module.scss'

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <div className='error404'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <span>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;