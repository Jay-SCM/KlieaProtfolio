
import React from 'react';
import styles from '../styles/BioCard.module.css';

// Declaring BioCard component, which takes imageUrl, title, and linkTo as props
const BioCard = ({ imageUrl, title, linkTo }) => {
  // Returning JSX markup for BioCard component
  return (
    <div className={styles.card}> // Defining a div with styles from the imported CSS module
      <div className={styles.imageContainer}> // Defining a div for image container with specific styles
        <img src={imageUrl} alt={title} className={styles.image} /> // Displaying image with given URL and alt text, applying styles from CSS module
      </div>
      <div className={styles.cardContent}> // Defining a div for card content with specific styles
        <h3>{title}</h3> // Displaying title inside an h3 tag
        <a href={linkTo} className={styles.cardLink}> // Creating a link to the provided URL with specific styles
          Go to {title} // Displaying link text along with the title
        </a>
      </div>
    </div>
  );
};

// Exporting the BioCard component to be used in other parts of the application
export default BioCard;
