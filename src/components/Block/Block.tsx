import React from 'react';
import styles from '../Block/Block.module.scss'
import CasinoIcon from '../../icons/CasinoIcon';

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
            <li className={styles['blocksListItem']}>
                <div>
                    <CasinoIcon />
                    <p>{item.mainText}</p>
                    {item.subText &&
                        <p className={styles['blocksListItemSubtext']}>{item.subText}</p>
                    }
                </div>
            </li>    
        ))}
    </ul>
  );
}

export default Blocks;
