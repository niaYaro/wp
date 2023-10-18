import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import CasinoChip from '../CasinoChip/CasinoChip';

const Header = () => {
  return (
    <div className={styles['container']}>
    {/* <div className="container"> */}
      <Logo />
      <CasinoChip />
    </div>
  );
}

export default Header;
