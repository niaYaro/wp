import React from 'react';
import Blocks from '../Block/Block';

const mockedData = [
    {
        mainText: 'Our games are not for real money and are completely safe',
    },
    {
        mainText: 'You must be 18+ due to the nature of the game',
    },
    {
        mainText: 'All games are available to all players who have registered',
    }
]

const Disclaimer = () => {
  return (
    <Blocks text={mockedData} />
  );
}

export default Disclaimer;
