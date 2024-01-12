import React from 'react';
import styles from './styles.module.scss'

import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import imageAboutpage from '../../assets/aboutBanner.png';
import Collapse from '../../components/Collapse/collapse';
import Footer from '../../components/Footer/footer';
import collapseDescriptions from '../../datas/collapseDescriptions';

const AboutPage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Banner imageUrl={imageAboutpage} />
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