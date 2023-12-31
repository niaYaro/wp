import React from 'react';
import styles from '../Footer/Footer.module.scss'
import { Link } from 'react-router-dom';
    
const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
        <div>
            <h3>About us</h3>
            <p>
            Out site about social casino games help to explore a wide array of free games created for your enjoyment. No deposits or real prizes, just pure fun.Please note that our site is intended for players 18 and older. We're committed to responsible gaming and compliance with legal regulations.This isn't a place for real-money gambling; it's all about the excitement of play without any financial risks.
            </p>
        </div>
        <ul className={styles['termsPolicy']}>
            <li className={styles['termsPolicyItem']}>
                <Link className={styles['termsPolicyLink']} to="terms">Terms</Link>
            </li>
            <li className={styles['termsPolicyItem']}>
                <Link className={styles['termsPolicyLink']} to="policy">Policy</Link>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
