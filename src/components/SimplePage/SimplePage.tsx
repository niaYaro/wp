import React, { ReactNode } from 'react';
import styles from '../SimplePage/SimplePage.module.scss'

interface PageContent {
    title: string,
    update: string,
    children: ReactNode,
}

const SimplePage: React.FC<PageContent>  = ({ title, update, children }) => {
  return (
    <div className={styles['simplePageWrapper']}>
        <h2>{title}</h2>
        <p>{`Last updated: `}{update}</p>
        {children}
    </div>
  );
}

export default SimplePage;
