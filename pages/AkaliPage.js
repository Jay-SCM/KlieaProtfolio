import React from 'react';
import Akali from '../components/Akali'; // Import the Ahri component from the components directory
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const AkaliPage = () => {
  return (
    <div>
      {/* Render the ColorGrad component in the background */}
      <ColorGrad className={styles.colorGrad} />
      
      {/* Render the Ahri component */}
      <Akali />
    </div>
  );
};

export default AkaliPage;

