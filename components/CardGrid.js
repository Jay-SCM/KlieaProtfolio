
import React from 'react';
import styles from '../styles/CardGrid.module.css';
import Link from 'next/link';

const CardGrid = ({ cards }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <Link key={card.id} href={card.linkTo} passHref>
          <div className={styles.card}>
            <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;



