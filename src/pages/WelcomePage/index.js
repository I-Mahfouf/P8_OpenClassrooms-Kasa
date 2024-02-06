import React from 'react';
//* Importation des styles spécifiques à cette page *//
import styles from './styles.module.scss'; 
//* Importation des données des logements depuis le fichier JSON *//
import accomodationsData from '../../datas/logements.json'; 

//* Importation des composants *//
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
//* Importation de l'image de la bannière de la page d'accueil *//
import imageHomepage from '../../assets/homebanner.png';
import Cards from '../../components/homeCards/card'; 
import Footer from '../../components/Footer/footer';

const WelcomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <header>
        <Header />
      </header>
      <main>
        {/* Affichage de la bannière avec un texte et une image */}
        <Banner text="Chez vous, partout et ailleurs" imageUrl={imageHomepage} />
        <section className={styles.cardsContainer}>
          <div className={styles.cardsLayout}>
            {accomodationsData.map((accommodation) => ( 
              //* Création des cartes de logement en parcourant les données du fichier JSON *//
              <Cards
                key={accommodation.id} 
                id={accommodation.id} // Propriété ID du logement //
                title={accommodation.title} // Propriété titre du logement //
                cover={accommodation.cover} // Propriété image de couverture du logement //
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




