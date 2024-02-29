import React from 'react';
import Bane from '../components/Bane';
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const BanePage = () => {
  return (
    <div>
      <ColorGrad className={styles.colorGrad} />
      <Bane />
    </div>
  );
};

export default BanePage;
