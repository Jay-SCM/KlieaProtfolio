
import React from 'react';
import Ahri from '../components/Ahri'; // Import the Ahri component from the components directory
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const AhriPage = () => {
  return (
    <div>
      {/* Render the ColorGrad component in the background */}
      <ColorGrad className={styles.colorGrad} />
      
      {/* Render the Ahri component */}
      <Ahri />
    </div>
  );
};

export default AhriPage;

