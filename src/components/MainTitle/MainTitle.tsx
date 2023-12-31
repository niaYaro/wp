import React from 'react';
import styles from '../MainTitle/MainTitle.module.scss'

const MainTitle: React.FC = () => {
  return (
    <h1 className={styles['mainTitle']}>
        Social Casino: Where Fun Meets Community!
    </h1>
  );
}

export default MainTitle;
