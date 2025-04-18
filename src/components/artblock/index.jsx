import styles from './styles.module.scss';

import logoSrc from '../../assets/logo.png';
import logotipe from '../../assets/logotipe.png';
import mainHeaderPhoto from '../../assets/mainHeader.png';

export const ArtBlock = () => {
    return (
        <div className={styles.artBlockContainer}>
            <div className={styles.textJwlr}>JWLR</div>
            <div className={styles.mainLogoWrapper}>
                <img src={logotipe} alt={''} className={styles.mainLogoSvg} />
            </div>
            <div className={styles.photoElement}>
                <img src={mainHeaderPhoto} alt={''} />
            </div>
            <div className={styles.smallLogosContainer}>
                <div className={styles.smallLogoItem}>
                    <img src={logoSrc} alt={''} className={styles.smallLogoSvg} />
                </div>
                <div className={styles.smallLogoItem2}>
                    <img src={logoSrc} alt={''} className={styles.smallLogoSvg} />
                </div>
                <div className={styles.smallLogoItem}>
                    <img src={logoSrc} alt={''} className={styles.smallLogoSvg} />
                </div>
            </div>
        </div>
    );
};