import React from 'react';
import Logo from '../Logo/Logo';
import styles from '../MainTitle/MainTitle.module.css'
import CasinoChip from '../CasinoChip/CasinoChip';

const MainTitle = () => {
  return (
    <h1 className={styles['mainTitle']}>
        Social Casino: Where Fun Meets Community!
    </h1>
  );
}

export default MainTitle;
