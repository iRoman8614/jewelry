import styles from './styles.module.scss'

import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.png';

export const NavBar = () => {
    return(
        <nav className={styles.root}>
            <Link className={styles.link} to="/">
                <img className={styles.logo} src={logoSrc} alt={''} />
            </Link>
            <Link className={styles.link} to="/">Путь</Link>
            <Link className={styles.link} to="/">Доступные</Link>
            <Link className={styles.link} to="/">контакты</Link>
            <Link className={styles.link} to="/">заказ</Link>
        </nav>

    )
}