import React, { ReactNode } from 'react';
import styles from '../SimplePage/SimplePage.module.scss'

interface PageContent {
    header: string,
    text: string,
    children: ReactNode,
}

const SimplePage: React.FC<PageContent>  = ({ header, text, children }) => {
  return (
    <div className={styles['simplePageWrapper']}>
        <h2>{header}</h2>
        <p>{text}</p>
        {children}
    </div>
  );
}

export default SimplePage;
