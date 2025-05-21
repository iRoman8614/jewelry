import styles from './styles.module.scss'
import React, {useState} from "react";

import cross from '../../assets/cross.svg';
import hoverCross from '../../assets/hoverCross.svg';


export const FormListItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className={styles.root}>
            <div className={styles.img}></div>
            <div>кольцо</div>
            <div>метеора</div>
            <div className={styles.sumConteiner}>
                <div>33к</div>
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
        </div>
    )
}