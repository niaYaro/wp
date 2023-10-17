import React from 'react';
import Logo from '../Logo/Logo';
import styles from '../HowToStart/HowToStart.module.css'
import CasinoChip from '../CasinoChip/CasinoChip';

const HowToStart = () => {
  return (
    <>
      <h2 className={styles['subtitle']}>
          How to start in free casino
      </h2>
      <ul className={styles['list']}>
        <li className={styles['listItem']}>Register an account<p className={styles['listItemSubtext']}>(Sign up easily and quickly)</p></li>
        <li className={styles['listItem']}>Choose a game <p className={styles['listItemSubtext']}>(Select yot favorite social casino game)</p></li>
        <li className={styles['listItem']}>Enjoy the game <p className={styles['listItemSubtext']}>(All games are free for use)</p></li>
      </ul>
    </>
  );
}

export default HowToStart;
