import React from 'react';
import Logo from '../Logo/Logo';
import styles from '../Header/Header.module.css'
import CasinoChip from '../CasinoChip/CasinoChip';

const Header = () => {
  return (
    <div className={styles['container']}>
      <Logo />
      <CasinoChip />
    </div>
  );
}

export default Header;
