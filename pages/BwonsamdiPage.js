
import Bwonsamdi from '@/components/Bwonsamdi';
import Ahri from '../components/Ahri'; 
import ColorGrad from '../components/ColorGrad'; 
import styles from '../styles/video.module.css';
const BwonsamdiPage = () => {
  return (
    <div>
      <ColorGrad className={styles.colorGrad} />
      <Bwonsamdi />
    </div>
  );
};

export default BwonsamdiPage;