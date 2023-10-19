import React from 'react';
import styles from '../HowToStart/HowToStart.module.scss'
import Blocks from '../Block/Block';

const blockContent = [
    {
        mainText: 'Register an account',
        subText: 'Sign up easily and quickly',
    },
    {
        mainText: 'Choose a game',
        subText: 'Select yot favorite social casino game',
    },
    {
        mainText: 'Enjoy the game',
        subText: 'All games are free for use',
    }
]

const HowToStart: React.FC = () => {
  return (
    <div>
      <h2 className={styles['subtitle']}>
          How to start in free casino
      </h2>
      <Blocks text={blockContent} />
    </div>
  );
}

export default HowToStart;
