import React, { ReactNode } from 'react';
import styles from '../Layout/Layout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles['layout']}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
