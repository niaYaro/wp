import React from 'react';
import styles from '../SiteData/SiteData.module.css'
import Logo from '../Logo/Logo';

const SiteData = () => {
  return (
    <div className={styles['siteData']}>
        <Logo />
        <p><strong>Disclaimer: </strong>All games are free social games and so no real prizes will be issued. Wonder play is simply a portal to access social games for free and play with your friends. please contact us if you believe that any game causes offense and/or harm. We are about entertainment above all else. have fun and play as much as you like.</p>
    </div>
  );
}

export default SiteData;
