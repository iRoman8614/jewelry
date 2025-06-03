import styles from './styles.module.scss'
import { useParams, Link } from 'react-router-dom';
import {NavBar} from "@/components/navBar/index.jsx";
import {ProductCard1, ProductCard2, ProductCard3} from "@/components/productCard/index.jsx";
import { useLocation } from 'react-router-dom';

import next from '../../assets/next.svg'
import prev from '../../assets/prev.svg'
import logotipe from '../../assets/logotipe.png'
import {useLayoutEffect} from "react";
import meteora from '../../assets/meteora.png'
import {BackButton} from "@/components/BackButton/index.jsx";

const categoryData = {
    'rings': {
        title: 'Кольца',
        subtitle: 'Основа нашего бренда. Предмет, с которого все началось - КОЛЬЦО',
        description: 'Кольцо — это больше, чем украшение, это символ истории и индивидуальности. Мы создаем каждое кольцо с вниманием к деталям и мастерством. Оно отражает дух свободы, силу характера и уникальный стиль.'
    },
    'bracelets': {
        title: 'Браслеты',
        description: 'Элегантные и стильные браслеты, которые добавят изюминку вашему образу.'
    },
    'earrings': {
        title: 'Серьги',
        description: 'От классических гвоздиков до роскошных подвесок - найдите свои идеальные серьги.'
    },
    'necklaces': {
        title: 'Ожерелья',
        description: 'Подчеркните свою шею изящными ожерельями и уникальными подвесками из нашей коллекции.'
    },
};

const Products = [
    {
        image: meteora,
        name: 'meteor',
        desc: 'Essentials',
        weight: '',
        size: '16.8',
        material: '',
        price: '33000'
    },
    {
        image: meteora,
        name: 'traffic',
        desc: 'Gemplate',
        weight: '',
        size: '20.5',
        material: '',
        price: '80000'
    },
    {
        image: meteora,
        name: '',
        weight: '',
        size: '',
        material: '',
        price: ''
    },
    {
        image: meteora,
        name: 'meteor',
        desc: 'Essentials',
        weight: '',
        size: '16.8',
        material: '',
        price: '33000'
    },
    {
        image: meteora,
        name: 'traffic',
        desc: '55 gr ',
        weight: '',
        size: '20.5',
        material: 'oxydized silver 925 / 3 tourmalines ',
        price: '80000'
    },
    {
        image: meteora,
        name: 'meteor',
        desc: 'Essentials',
        weight: '',
        size: '16.8',
        material: '',
        price: '33000'
    },
    {
        image: meteora,
        name: 'traffic',
        desc: 'Gemplate',
        weight: '',
        size: '20.5',
        material: '',
        price: '80000'
    },
    {
        image: meteora,
        name: 'traffic',
        desc: '55 gr ',
        weight: '',
        size: '20.5',
        material: 'oxydized silver 925 / 3 tourmalines ',
        price: '80000'
    },
    {
        image: meteora,
        name: '',
        weight: '',
        size: '',
        material: '',
        price: ''
    },
    {
        image: meteora,
        name: 'traffic',
        desc: 'Gemplate',
        weight: '',
        size: '20.5',
        material: '',
        price: '80000'
    },
    {
        image: meteora,
        name: 'traffic',
        desc: '55 gr ',
        weight: '',
        size: '20.5',
        material: 'oxydized silver 925 / 3 tourmalines ',
        price: '80000'
    },
    {
        image: meteora,
        name: '',
        weight: '',
        size: '',
        material: '',
        price: ''
    }
]

const cardTypeSequence = [
    3, 2, 1, 2,
    2, 3, 3, 2,
    1, 1, 3, 1
];

const cardComponents = {
    1: ProductCard1,
    2: ProductCard2,
    3: ProductCard3,
};

export const DesktopCategoryPageContent = () => {
    const location = useLocation();
    const { categorySlug } = useParams();
    const currentCategory = categoryData[categorySlug];

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        console.log('Forced scroll to top on:', location.pathname);
    }, [location.pathname]);

    return (
        <>
            <NavBar theme={'black'} />
            <main className={styles.root}>
                <div className={styles.categorieHeader}>
                    <div className={styles.categorieTitle}>{currentCategory?.title}</div>
                    <h3 className={styles.categorieSubitle}>{currentCategory?.subtitle}</h3>
                    <p className={styles.categorieDesc}>{currentCategory?.description}</p>
                </div>
                <div className={styles.productsGrid}>
                    {
                        Products.map((product, index) => {
                            const cardType = cardTypeSequence[index % cardTypeSequence.length];
                            const CardComponent = cardComponents[cardType];
                            return (
                                <Link className={styles.link} to={'/item/1'}>
                                    <CardComponent key={product.id || index} item={product} />
                                </Link>
                            );
                        })
                    }
                </div>
            </main>
            <footer className={styles.bottomPagination}>
                <div>
                    <img className={styles.logotipe} src={logotipe} alt={''}/>
                </div>
                <div className={styles.pagination}>
                    <img className={styles.arrow} src={prev} alt={''} />
                    1 / 1
                    <img className={styles.arrow} src={next} alt={''} />
                </div>
                <BackButton />
            </footer>
        </>
    );
}