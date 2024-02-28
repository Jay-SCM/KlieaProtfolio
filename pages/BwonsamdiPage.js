
import Bwonsamdi from '@/components/Bwonsamdi';
import Ahri from '../components/Ahri'; // Import the Ahri component from the components directory
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const BwonsamdiPage = () => {
  return (
    <div>
      {/* Render the ColorGrad component in the background */}
      <ColorGrad className={styles.colorGrad} />
      
      {/* Render the Ahri component */}
      <Bwonsamdi />
    </div>
  );
};

export default BwonsamdiPage;