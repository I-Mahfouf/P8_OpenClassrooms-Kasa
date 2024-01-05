import React from 'react';
import { useParams } from 'react-router-dom'
import styles from '../Page_3/RentalPage.module.scss'

import Header from '../../components/Header/header';
import Carrousel from '../../components/Carrousel/carrousel';
import Rating from '../../components/Rating/rating';
import Collapse from '../../components/aboutCards/collapse';
import Footer from '../../components/Footer/footer';
import accomodationsData from '../../datas/logements.json';

const RentalPage = () => {
  const { id } = useParams();
  const rentalData = accomodationsData.find((accomodation) => accomodation.id === id);

  const { title, location } = rentalData;

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Carrousel pictures={rentalData.pictures} />
        </div>
        <div>
          <div>
            <div className={styles.rentalHead}>
              <h1 className={styles.rentalHead_title}>{title}</h1>
              <h2 className={styles.rentalHead_location}>{location}</h2>
            </div>
            <div className={styles.rentalTags}>
              {rentalData.tags.map((tag, index) => (
                <span className={styles.rentalTags_text} key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={styles.rentalHost}>
            <div className={styles.rentalInformations}>
              <p className={styles.rentalInformations_label}>{rentalData.host.name}</p>
              <img className={styles.rentalInformations_pic} src={rentalData.host.picture} alt={`Host: ${rentalData.host.name}`} />
            </div>
            <div className={styles.rentalInformations_rating}>
              <Rating rating={rentalData.rating} />
            </div>
          </div>
          <div className={styles.rentalCollapses}>
            <Collapse className={styles.rentalCollapses} title="Description" content={rentalData.description} />
            <Collapse className={styles.rentalCollapses} title="Équipements" content={rentalData.equipments} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RentalPage;