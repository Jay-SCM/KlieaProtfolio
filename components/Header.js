
import React from 'react';
import styles from '../styles/Header.module.css';
import TextCard from './TextCard'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <TextCard /> {/* Render the TextCard component */}
      </div>
    </header>
  );
};

export default Header;
