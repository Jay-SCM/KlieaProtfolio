import React from 'react';
import styles from '../styles/BioCard.module.css';

const BioCard = ({ imageUrl, title, linkTo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <a href={linkTo} className={styles.cardLink}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default BioCard;



