import React from 'react';
import image from '../../img/700x400_5.jpg';
import styles from '../MainImage/MainImage.module.scss'

const MainImage: React.FC = () => {
  return (
    <div className={styles['generalWrapper']}>
      <div className={styles['red']}></div>
      <div className={styles['blue']}></div>
      <div  className={styles['mainImageContainer']}>
        <img className={styles['mainImage']} src={image} alt="Social casino" />
      </div>
    </div>
    );
}

export default MainImage;
