import React from 'react';
import Header from '../Header/Header';
import MainImage from '../MainImage/MainImage';
import MainTitle from '../MainTitle/MainTitle';
import HowToStart from '../HowToStart/HowToStart';
import GamesList from '../GamesList/GamesList';
import Disclaimer from '../Disclaimer/Disclaimer';
import SiteData from '../SiteData/SiteData';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
        {/* <Header /> */}
        <MainImage />
        <MainTitle />
        <HowToStart />
        <GamesList />
        <Disclaimer />
        <SiteData />
        {/* <Footer /> */}
    </>
  );
}

export default Home;
