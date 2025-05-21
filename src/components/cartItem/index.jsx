import React, {useMemo, useState} from 'react';
import styles from './styles.module.scss';

import cross from '../../assets/cross.svg';
import hoverCross from '../../assets/hoverCross.svg';

export const CartItem = ({item}) => {
    const [isHovered, setIsHovered] = useState(false);

    const randomPaddingLeft = useMemo(() => {
        return Math.floor(Math.random() * 121); // Генерирует целое число от 0 до 120
    }, []);

    return (
        <div className={styles.root} style={{ paddingLeft: `${randomPaddingLeft}px` }}>
            <div className={styles.itemType}>{item.type}</div>
            <div className={styles.itemName}>{item.name}</div>
            <div
                className={styles.buttonContainer}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="button"
                tabIndex={0}
            >
                <img
                    src={isHovered ? hoverCross : cross}
                    alt="Удалить товар"
                    className={styles.crossIcon}
                />
            </div>
        </div>
    );
};