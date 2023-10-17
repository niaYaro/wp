import React from 'react';
import styles from '../Block/Block.module.css'

interface BlocksText {
    mainText: string,
    subText?: string,
}

interface Props {
    text: BlocksText[],
}

const Blocks: React.FC<Props>  = ( { text }) => {
  return (
    <ul className={styles['blocksList']}>
        {text.map(item => (
            <li className={styles['blocksListItem']}>{item.mainText}
                {item.subText &&
                    <p className={styles['blocksListItemSubtext']}>{item.subText}</p>
                }
            </li>    
        ))}
    </ul>
  );
}

export default Blocks;
