import React from 'react';
import image from '../../img/700x400_5.jpg';
import styles from '../MainImage/MainImage.module.css'
import CasinoChip from '../CasinoChip/CasinoChip';

const MainImage = () => {
  return (
    <div className={styles['mainImageContainer']}>
      <img className={styles['mainImage']} src={image} alt="" />
    </div>
    );
}

export default MainImage;
