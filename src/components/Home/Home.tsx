import React from 'react';
import MainImage from '../MainImage/MainImage';
import MainTitle from '../MainTitle/MainTitle';
import HowToStart from '../HowToStart/HowToStart';
import GamesList from '../GamesList/GamesList';
import Conditions from '../Conditions/Conditions';
import SiteData from '../SiteData/SiteData';

const Home: React.FC = () => {
  return (
    <>
        <MainImage />
        <MainTitle />
        <HowToStart />
        <GamesList />
        <Conditions />
        <SiteData />
    </>
  );
}

export default Home;
