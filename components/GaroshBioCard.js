

import React from 'react';
import styles from '../styles/BioCard.module.css';

const GaroshBioCard = ({ imageUrl, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
    </div>
  );
};

export default GaroshBioCard;

