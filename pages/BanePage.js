import React from 'react';
import Bane from '../components/Bane'; // Import the Ahri component from the components directory
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const BanePage = () => {
  return (
    <div>
      {/* Render the ColorGrad component in the background */}
      <ColorGrad className={styles.colorGrad} />
      
      {/* Render the Ahri component */}
      <Bane />
    </div>
  );
};

export default BanePage;
