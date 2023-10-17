import React from 'react';
import image from '../../img/700x400_5.jpg';
import styles from '../Main/Main.module.css'
import CasinoChip from '../CasinoChip/CasinoChip';
import MainImage from '../MainImage/MainImage';

const Main = () => {
  return (
    <div className={styles['main']}>
      <div className={styles['red']}></div>
      <div className={styles['blue']}></div>
      <MainImage />
    </div>
  );
}

export default Main;
