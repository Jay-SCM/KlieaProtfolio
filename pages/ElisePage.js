
import Elise from '../components/Elise'; // Import the Ahri component from the components directory
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const ElisePage = () => {
  return (
    <div>
      {/* Render the ColorGrad component in the background */}
      <ColorGrad className={styles.colorGrad} />
      
      {/* Render the Ahri component */}
      <Elise />
    </div>
  );
};

export default ElisePage;