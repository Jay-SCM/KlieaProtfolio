
import Elise from '../components/Elise'; 
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const ElisePage = () => {
  return (
    <div>
      <ColorGrad className={styles.colorGrad} />
      <Elise />
    </div>
  );
};

export default ElisePage;