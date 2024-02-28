
import React from 'react';
import Link from 'next/link';
import styles from '../styles/BioBox.module.css';

const BioBox = () => {
  return (
    <div className={styles.bioBox}>
      <p>Innately connected to the magic of the spirit realm,
      Ahri is a fox-like vastaya who can manipulate her prey's emotions
       consume their essence—receiving flashes of their memory and insight</p>
       <p>Ahri is a fox-like vastaya who can manipulate her prey's emotions
       consume their essence—receiving flashes of their memory and insight</p>
        <p>from each soul she consumes. Once a powerful yet wayward predator,
        Ahri is now traveling the world in search of remnants of her ancestors
        while also trying to replace her stolen memories with ones of her own making.
        </p>
      <Link href="/AkaliBio">
        <button>BIO</button>
      </Link>
    </div>
  );
};

export default BioBox;




