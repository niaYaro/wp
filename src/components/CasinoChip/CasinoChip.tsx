import React from 'react';
import chip from '../../img/video_preview_0001.jpg'
import styles from '../CasinoChip/CasinoChip.module.css'

const CasinoChip = () => {
  return (
    <div className={styles['chip']}>
        <div className={styles['gradient']}></div>
    </div>
  );
}

export default CasinoChip;
