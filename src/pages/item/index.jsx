import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/a11y';

import styles from './styles.module.scss';

import met1 from '../../assets/met1.png';
import met2 from '../../assets/met2.png';
import met3 from '../../assets/met3.png';
import met4 from '../../assets/met4.png';
import { NavBar } from "@/components/navBar/index.jsx";

const getMockProductData = (productId) => {
    console.log("Checking product ID:", productId, typeof productId);
    if (productId === "1") {
        return {
            id: 'meteor',
            name: 'METEOR',
            images: [ met1, met2, met3, met4 ],
            details: {
                size: { label: 'РАЗМЕР', value: '16.8' },
                weight: { label: 'ВЕС', value: '2.2' },
                material: { label: 'МАТЕРИАЛЫ', value: 'ЧЕРНЕНОЕ СЕРЕБРО\nДРУГИЕ КАМНИ\nПРОЧЕЕ' },
                price: { label: 'ЦЕНА', value: '33K' }
            }
        };
    }
    return null;
};


export const ProductDetailPage = () => {
    const { productId: routeProductId } = useParams();
    const [product, setProduct] = useState(null);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [itemQuantity, setItemQuantity] = useState(0);
    const cookieName = product ? `item_${product.id}` : null;

    useEffect(() => {
        const data = getMockProductData(routeProductId);
        setProduct(data);
    }, [routeProductId]);

    useEffect(() => {
        if (cookieName) {
            const quantityFromCookie = parseInt(Cookies.get(cookieName) || '0', 10);
            setItemQuantity(quantityFromCookie);
            console.log(`Read cookie ${cookieName}:`, quantityFromCookie);
        } else {
            setItemQuantity(0);
        }
    }, [cookieName]);

    const formatMultilineText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index) => (<React.Fragment key={index}>{line}<br /></React.Fragment>));
    };

    const handlePrev = () => { swiperRef.current?.swiper?.slidePrev(); };
    const handleNext = () => { swiperRef.current?.swiper?.slideNext(); };

    const handleAddToCart = () => {
        if (!cookieName) return;
        const newQuantity = 1;
        Cookies.set(cookieName, newQuantity.toString(), { expires: 7 });
        setItemQuantity(newQuantity);
        console.log(`Set cookie ${cookieName} to:`, newQuantity);
    };

    const handleIncreaseQuantity = () => {
        if (!cookieName) return;
        const newQuantity = itemQuantity + 1;
        Cookies.set(cookieName, newQuantity.toString(), { expires: 7 });
        setItemQuantity(newQuantity);
        console.log(`Set cookie ${cookieName} to:`, newQuantity);
    };

    const handleDecreaseQuantity = () => {
        if (!cookieName || itemQuantity <= 0) return;
        const newQuantity = itemQuantity - 1;
        if (newQuantity === 0) {
            Cookies.remove(cookieName);
            setItemQuantity(0);
            console.log(`Removed cookie ${cookieName}`);
        } else {
            Cookies.set(cookieName, newQuantity.toString(), { expires: 7 });
            setItemQuantity(newQuantity);
            console.log(`Set cookie ${cookieName} to:`, newQuantity);
        }
    };

    if (!product) {
        return <div>Загрузка товара или товар не найден...</div>;
    }

    return (
        <main className={styles.root}>
            <NavBar theme={'black'} />
            <div className={styles.productDetailPage}>
                <div ref={prevRef} className={`${styles.customSwiperButton} ${styles.customSwiperButtonPrev}`} role="button" aria-label="Предыдущий слайд" onClick={handlePrev}></div>
                <div className={styles.swiperLayer}>
                    <Swiper
                        ref={swiperRef}
                        modules={[A11y]}
                        slidesPerView={'auto'}
                        spaceBetween={630}
                        loop={true}
                        centeredSlides={false}
                        className={styles.productSwiper}
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index} className={styles.productSlide}>
                                <div className={styles.slideImageWrapper}><img src={image} alt={`${product.name} - изображение ${index + 1}`} /></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.productViewContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.creature}>СУЩНОСТЬ</h2>
                        <h1 className={styles.productName}>{product.name}</h1>
                    </div>
                    <div className={styles.productInfoOverlay}>
                        <div className={styles.productInfoContent}>
                            <div className={styles.productSpecs}>
                                <div className={styles.specItem}><span>{product.details.size.label}</span><span>{product.details.size.value}</span></div>
                                <div className={styles.specItem}><span>{product.details.weight.label}</span><span>{product.details.weight.value}</span></div>
                                <div className={`${styles.specItem} ${styles.materialItem}`}><span>{product.details.material.label}</span><span>{formatMultilineText(product.details.material.value)}</span></div>
                                <div className={`${styles.specItem} ${styles.priceItem}`}><span>{product.details.price.label}</span><span className={styles.priceValue}>{product.details.price.value}</span></div>
                            </div>
                            <div className={styles.cartControl}>
                                {itemQuantity === 0 ? (
                                    <button className={styles.addToCartButton} onClick={handleAddToCart}>
                                        <span className={styles.addToCartIcon}></span>
                                        ДОБАВИТЬ
                                    </button>
                                ) : (
                                    <div className={styles.quantityControl}>
                                        <button className={`${styles.quantityButton} ${styles.quantityButtonMinus}`} onClick={handleDecreaseQuantity} aria-label="Уменьшить количество">-</button>
                                        <span className={styles.quantityDisplay}>{itemQuantity}</span>
                                        <button className={`${styles.quantityButton} ${styles.quantityButtonPlus}`} onClick={handleIncreaseQuantity} aria-label="Увеличить количество">+</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className={styles.backButton}>НАЗАД</button>
                    </div>
                </div>
                <div ref={nextRef} className={`${styles.customSwiperButton} ${styles.customSwiperButtonNext}`} role="button" aria-label="Следующий слайд" onClick={handleNext}></div>
            </div>
        </main>
    );
};