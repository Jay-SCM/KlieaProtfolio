// components/Ahri.js

import React from 'react';
import BioCard from './BioCard';
import BioBox from './BioBox';
import VideoPlayer from './VideoPlayer';
import styles from '../styles/Ahri.module.css';

const Ahri = () => {
  const videoId = 'DIY3TZpOcDU';

  return (
    <div className={styles.container}>
      {/* Header Card */}
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Ahri</h2>
          <p>The Nine-Tailed Fox</p>
        </div>
      </div>

      {/* Image Card */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <BioCard
            imageUrl="/AhriBlue.jpg"
            title=""
            description="The Nine-Tailed Fox"
          />
        </div>
      </div>

      {/* Bio Box */}
      <BioBox />

      {/* Video Player */}
      <div className={styles.videoPlayerWrapper}>
        <VideoPlayer videoId={videoId} />
      </div>
    </div>
  );
};

export default Ahri;


