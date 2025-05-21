import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';

const defaultMockImages = Array.from({ length: 15 }, (_, i) => `https://via.placeholder.com/60x60/eee/888?text=F${i + 1}`);

const InfiniteImageSwiper = ({
                                 images = defaultMockImages,
                                 numVisibleInitial = 10,
                                 imageWidth = 80,
                                 imageHeight = 80,
                                 gap = 20
                             }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const actualNumVisible = images.length > 0 ? Math.min(numVisibleInitial, images.length) : 0;

    const handlePrev = () => {
        if (images.length === 0 || images.length <= actualNumVisible) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        if (images.length === 0 || images.length <= actualNumVisible) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const displayedImages = useMemo(() => {
        if (!images || images.length === 0 || actualNumVisible === 0) {
            return [];
        }
        const result = [];
        for (let i = 0; i < actualNumVisible; i++) {
            const imageIdx = (currentIndex + i) % images.length;
            result.push({
                src: images[imageIdx],
                key: `swiper-img-slot-${i}-idx-${imageIdx}-cidx-${currentIndex}`
            });
        }
        return result;
    }, [images, currentIndex, actualNumVisible]);

    const canSwipe = images.length > actualNumVisible && actualNumVisible > 0;

    return (
        <div className={styles.swiperContainer}>
            <div className={styles.controlsAndImages}>
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={handlePrev}
                    disabled={!canSwipe}
                    aria-label="Previous images"
                >
                    ‹ {/* HTML entity for thin left arrow */}
                </button>

                <div
                    className={styles.imagesWrapper}
                    style={{
                        width: `${actualNumVisible * imageWidth + Math.max(0, actualNumVisible - 1) * gap}px`,
                    }}
                >
                    <div
                        className={styles.imagesList}
                        style={{ gap: `${gap}px` }}
                    >
                        {displayedImages.map((imgData) => (
                            <img
                                key={imgData.key}
                                src={imgData.src}
                                alt="" // Предоставьте осмысленный alt, если возможно
                                className={styles.imageItem}
                                style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={handleNext}
                    disabled={!canSwipe}
                    aria-label="Next images"
                >
                    › {/* HTML entity for thin right arrow */}
                </button>
            </div>
            <div className={styles.soldLabel}>ПРОДАНО</div>
        </div>
    );
};

export default InfiniteImageSwiper;