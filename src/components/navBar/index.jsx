import styles from './styles.module.scss'

import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.png';

export const NavBar = ({theme}) => {
    return(
        <nav className={theme === 'black' ? styles.root : styles.rootWhite}>
            <div className={styles.buttonset}>
                <Link className={styles.link} to="/">
                    <img className={styles.logo} src={logoSrc} alt={''} />
                </Link>
                <Link className={styles.link} to="/">Путь</Link>
                <Link className={styles.link} to="/category/rings">Доступные</Link>
                <Link className={styles.link} to="/">контакты</Link>
                <Link className={styles.link} to="/">заказ</Link>
                <Link className={styles.link} to="/gallery">галерея</Link>
            </div>
            <div className={styles.buttonsetAdditional}>
                <Link className={styles.link} to="/cart">корзина</Link>
                <Link className={styles.link} to="/services">сервис</Link>
            </div>
        </nav>

    )
}