

import React from 'react';
import styles from '../styles/CodeSnippet.module.css'; 


const CodeSnippet = ({ title, code, isDisplayed }) => {
  // Conditionally apply a class based on whether the card is displayed
  const cardClass = isDisplayed ? styles.displayedCard : styles.snippetContainer;

  return (
    <div className={cardClass}>
      <div className={styles.title}>{title}</div>
      <pre className={styles.code}>{code}</pre>
    </div>
  );
};

export default CodeSnippet;



