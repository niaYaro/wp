import React from 'react';
import styles from '../SimplePage/SimplePage.module.scss'

interface PageContent {
    header: string,
    text: string,
}

const SimplePage: React.FC<PageContent>  = ({ header, text }) => {
  return (
    <div className={styles['simplePageWrapper']}>
        <h2 className={styles['simplePageHeader']}>{header}</h2>
        <p className={styles['simplePageText']}>{text}</p>
    </div>
  );
}

export default SimplePage;
