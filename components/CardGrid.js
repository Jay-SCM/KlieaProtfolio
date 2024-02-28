// // components/HeroCard.js
// import React from 'react';


// const HeroCard = ({ imageUrl, title }) => {
//   return (
//     <div className={styles.heroCard}>
//       <div className={styles.imageContainer}>
//         <img src={imageUrl} alt={title} className={styles.image} />
//       </div>
//       <div className={styles.cardContent}>
//         <h3>{title}</h3>
//         <p className={styles.cardLink}>Go to {title}</p>
//       </div>
//     </div>
//   );
// };

// export default HeroCard;


// components/CardGrid.js
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



