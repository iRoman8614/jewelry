import React, { useState, useEffect } from 'react';
import styles from './mobile.module.scss';
import { useParams, Link } from 'react-router-dom';
import { NavBar } from "@/components/navBar/index.jsx";
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";

const categoryData = { /* ... скопируйте или адаптируйте ... */ };
const Products = [ /* ... скопируйте или адаптируйте ... */ ];

import logo from '../../assets/logo.png'
import ring from '../../assets/mobRing.png'
import ring2 from '../../assets/parallax3.png'
import ring3 from '../../assets/parallax4.png'

const sliderImages = [
    { url: ring, alt: 'Красный слайд', caption: 'Это первый слайд' },
    { url: ring2, alt: 'Зеленый слайд' },
    { url: ring3, alt: 'Синий слайд', caption: 'Третий и последний' },
];

export const MobileCategoryPageContent = () => {
    const location = useLocation();
    const { categorySlug } = useParams();
    const currentCategory = categoryData[categorySlug];

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    return (
        <>
            <div>
                <img className={styles.header} src={logo} alt={'logo'} />
            </div>
            <NavBar theme={'black'} />
            <ImageSlider images={sliderImages} />
            <div className={styles.categoriesBlock}>
                <div className={styles.greyCategories}>
                    <div>
                        <img className={styles.categoryCircle} src={ring} alt={''} />
                        кольца
                    </div>
                    <div>
                        <img className={styles.categoryCircle} src={ring} alt={''} />
                        подвески
                    </div>
                    <div>
                        <img className={styles.categoryCircle} src={ring} alt={''} />
                        браслеты
                    </div>
                    <div>
                        <img className={styles.categoryCircle} src={ring} alt={''} />
                        серьги
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.newItems}>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
            </div>
            <div className={styles.categoryItems}>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
            </div>
        </>
    );
};

const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className={`${styles.arrow} ${styles.prevArrow}`}>
        ❮
    </button>
);

const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className={`${styles.arrow} ${styles.nextArrow}`}>
        ❯
    </button>
);

export const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return <div>Нет изображений для отображения.</div>;
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    useEffect(() => {
        if (images.length > 1) {
            const timer = setTimeout(() => {
                goToNext();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, images.length]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slide} style={{ backgroundImage: `url(${images[currentIndex].url})` }}></div>
            {images.length > 1 && (
                <>
                    <PrevArrow onClick={goToPrevious} />
                    <NextArrow onClick={goToNext} />
                </>
            )}
            {images.length > 1 && (
                <div className={styles.dotsContainer}>
                    {images.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`${styles.dot} ${currentIndex === slideIndex ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(slideIndex)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};