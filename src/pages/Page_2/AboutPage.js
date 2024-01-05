import React from 'react';
import styles from '../Page_2/AboutPage.module.scss'

import Header from '../../components/Header/header';
import Banner from '../../components/Banner/aboutBanner';
import Collapse from '../../components/aboutCards/collapse';
import Footer from '../../components/Footer/footer';
import collapseDescriptions from '../../datas/collapseDescriptions';

const AboutPage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <section className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            {collapseDescriptions.map((data, index) => (
              <Collapse key={index} title={data.title} content={data.description} />
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


export default AboutPage;