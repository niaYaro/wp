import React from 'react';
import logo from '../../img/Wonder-play-13-10-2023.png'
import styles from '../Logo/Logo.module.scss'

const Logo: React.FC = () => {
  return (
    <div>
      <img className={styles['logo']} src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
