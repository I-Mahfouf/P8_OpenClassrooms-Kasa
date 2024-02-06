import React from 'react'; 
import styles from './styles.module.scss'; 

import Header from '../../components/Header/header'; 
import Banner from '../../components/Banner/banner';
//* Importation de l'image de la bannière *//
import imageAboutpage from '../../assets/aboutBanner.png'; 
//* Importation du composant Collapse *//
import Collapse from '../../components/Collapse/collapse'; 
import Footer from '../../components/Footer/footer'; 
//* Importation des descriptions des collapses depuis les données *//
import collapseDescriptions from '../../datas/collapseDescriptions'; 

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}> 
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