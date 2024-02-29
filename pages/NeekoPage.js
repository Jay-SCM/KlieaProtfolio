
import React from 'react';
import Ahri from '../components/Ahri'; 
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const AhriPage = () => {
  return (
    <div>
  
      <ColorGrad className={styles.colorGrad} />
      

      <Ahri />
    </div>
  );
};

export default AhriPage;

