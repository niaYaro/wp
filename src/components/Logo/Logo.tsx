import React from 'react';
import logo from '../../img/Wonder-play-13-10-2023.png'
import styles from '../Logo/Logo.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={styles['logoContainer']}>
      <img className={styles['logo']} src={logo} alt="" />
    </div>
  );
}

export default Logo;
