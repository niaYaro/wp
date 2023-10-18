import React from 'react';
import styles from '../HowToStart/HowToStart.module.css'
import Blocks from '../Block/Block';

const mockedData = [
    {
        mainText: 'Register an account',
        subText: '(Sign up easily and quickly)',
    },
    {
        mainText: 'Choose a game',
        subText: '(Select yot favorite social casino game)',
    },
    {
        mainText: 'Enjoy the game',
        subText: '(All games are free for use)',
    }
]

const HowToStart = () => {
  return (
    <div className={styles['howToStartContainer']}>
      <h2 className={styles['subtitle']}>
          How to start in free casino
      </h2>
      <Blocks text={mockedData} />
    </div>
  );
}

export default HowToStart;
