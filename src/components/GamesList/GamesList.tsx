import React from 'react';
import styles from '../GamesList/GamesList.module.scss'

const GamesList: React.FC = () => {
  return (
    <ul className={styles['gamesList']}>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['socialCasinoGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.gamebuddy.socialcasinoslots">Play Now</a>
        </li>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['houseSlotsGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.neowiz.casino.slots.classic.slot.machine">Play Now</a>
        </li>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['infinitySlotsGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.murka.infinityslots">Play Now</a>
        </li>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['jackpotFriendsGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.jackpotfriends.slots">Play Now</a>
        </li>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['loveGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.ra.love.slots.free.casino.games">Play Now</a>
        </li>
        <li className={styles['gamesListItem']}>
            <div className={`${styles['gamePic']} ${styles['scarletGame']}`}></div>
            <a className={styles['gameLink']} href="https://play.google.com/store/apps/details?id=com.murka.scatterslots">Play Now</a>
        </li>
    </ul>
  );
}

export default GamesList;
