
import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ imageUrl, title, linkTo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <a href={linkTo} className={styles.cardLink}>
          Go to {title}
        </a>
      </div>
    </div>
  );
};

export default Card;




