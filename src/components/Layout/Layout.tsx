import React, { ReactNode } from 'react';
import styles from '../Layout/Layout.module.css'

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles['layout']}>
        {children}
    </div>
  );
}

export default Layout;
