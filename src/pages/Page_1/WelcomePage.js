import React from 'react';
import styles from '../Page_1/WelcomePage.module.scss';
import accomodationsData from '../../datas/logements.json';

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
            {accomodationsData.map((accommodation) => (
              <Cards
                key={accommodation.id}
                id={accommodation.id}
                title={accommodation.title}
                cover={accommodation.cover}
              />
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