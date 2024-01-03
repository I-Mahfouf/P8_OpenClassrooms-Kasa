import React from 'react';
import styles from '../Page_1/WelcomePage.module.scss';

import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import Cards from '../../components/homeCards/card';
import Footer from '../../components/Footer/footer';

const WelcomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <section className={styles.cardsContainer}>
          <div className={styles.cardsLayout}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Cards key={index} />
            ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WelcomePage;