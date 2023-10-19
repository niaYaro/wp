import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import CasinoChip from '../CasinoChip/CasinoChip';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles['container']}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <CasinoChip />
    </div>
  );
}

export default Header;
