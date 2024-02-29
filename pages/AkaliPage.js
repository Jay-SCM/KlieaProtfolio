import React from 'react';
import Akali from '../components/Akali'; 
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const AkaliPage = () => {
  return (
    <div>
      <ColorGrad className={styles.colorGrad} />
      <Akali />
    </div>
  );
};

export default AkaliPage;

