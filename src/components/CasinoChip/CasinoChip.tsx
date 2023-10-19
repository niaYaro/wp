import React from 'react';
import styles from '../CasinoChip/CasinoChip.module.scss'

const CasinoChip: React.FC = () => {
  return (
    <div className={styles['chip']}>
        <div className={styles['gradient']}></div>
    </div>
  );
}

export default CasinoChip;
