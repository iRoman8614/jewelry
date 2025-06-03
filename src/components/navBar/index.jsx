// import styles from './styles.module.scss'
// import { Link } from 'react-router-dom';
// import logoSrc from '../../assets/logo.png';
//
// export const NavBar = ({theme}) => {
//     return(
//         <nav className={theme === 'black' ? styles.root : styles.rootWhite}>
//             <div className={styles.buttonset}>
//                 <Link className={styles.link} to="/">
//                     <img className={styles.logo} src={logoSrc} alt={''} />
//                 </Link>
//                 <Link className={styles.link} to="/">Путь</Link>
//                 <div className={styles.linkList}>
//                     Доступные
//                     <div className={styles.linkHiden}>
//                         <Link className={styles.link} to="/category/rings">кольца</Link>
//                         <Link className={styles.link} to="/category/bracelets">браслеты</Link> {/* Changed path for variety */}
//                         <Link className={styles.link} to="/category/earrings">серьги</Link>   {/* Changed path for variety */}
//                         <Link className={styles.link} to="/category/pendants">подвески</Link> {/* Changed path for variety */}
//                     </div>
//                 </div>
//                 <Link className={styles.link} to="/">контакты</Link>
//                 <Link className={styles.link} to="/">заказ</Link>
//                 <Link className={styles.link} to="/gallery">галерея</Link>
//             </div>
//             <div className={styles.buttonsetAdditional}>
//                 <Link className={styles.link} to="/cart">корзина</Link>
//                 <Link className={styles.link} to="/services">сервис</Link>
//             </div>
//         </nav>
//     );
// }

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.png';

export const NavBar = ({ theme }) => {
    // Моковые данные для коллекций
    const collections = {
        rings: [
            { name: 'Коллекция "Заря"', path: '/category/rings/zarya' },
            { name: 'Коллекция "Луна"', path: '/category/rings/luna' },
        ],
        bracelets: [
            { name: 'Коллекция "Река"', path: '/category/bracelets/reka' },
            { name: 'Коллекция "Лес"', path: '/category/bracelets/les' },
        ],
        earrings: [
            { name: 'Коллекция "Ветер"', path: '/category/earrings/veter' },
            { name: 'Коллекция "Звезда"', path: '/category/earrings/zvezda' },
        ],
        pendants: [
            { name: 'Коллекция "Тайна"', path: '/category/pendants/taina' },
            { name: 'Коллекция "Оберег"', path: '/category/pendants/obereg' },
        ],
    };

    return (
        <nav className={theme === 'black' ? styles.root : styles.rootWhite}>
            <div className={styles.buttonset}>
                <Link className={styles.link} to="/">
                    <img className={styles.logo} src={logoSrc} alt="Логотип" />
                </Link>
                <Link className={styles.link} to="/">Путь</Link>

                <div className={styles.linkList}>
                    Доступные
                    <div className={styles.linkHiden}>
                        {/* Кольца */}
                        <div className={styles.subMenuItem}>
                            <Link className={styles.link} to="/category/rings">кольца</Link>
                            <div className={styles.collectionsList}>
                                {collections.rings.map(collection => (
                                    <Link key={collection.path} className={styles.link} to={collection.path}>
                                        {collection.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Браслеты */}
                        <div className={styles.subMenuItem}>
                            <Link className={styles.link} to="/category/bracelets">браслеты</Link>
                            <div className={styles.collectionsList}>
                                {collections.bracelets.map(collection => (
                                    <Link key={collection.path} className={styles.link} to={collection.path}>
                                        {collection.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Серьги */}
                        <div className={styles.subMenuItem}>
                            <Link className={styles.link} to="/category/earrings">серьги</Link>
                            <div className={styles.collectionsList}>
                                {collections.earrings.map(collection => (
                                    <Link key={collection.path} className={styles.link} to={collection.path}>
                                        {collection.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Подвески */}
                        <div className={styles.subMenuItem}>
                            <Link className={styles.link} to="/category/pendants">подвески</Link>
                            <div className={styles.collectionsList}>
                                {collections.pendants.map(collection => (
                                    <Link key={collection.path} className={styles.link} to={collection.path}>
                                        {collection.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Link className={styles.link} to="/">контакты</Link>
                <a className={styles.link} href="#/#custom">заказ</a>
                <Link className={styles.link} to="/gallery">галерея</Link>
            </div>
            <div className={styles.buttonsetAdditional}>
                <Link className={styles.link} to="/cart">корзина</Link>
                <Link className={styles.link} to="/services">сервис</Link>
            </div>
        </nav>
    );
};