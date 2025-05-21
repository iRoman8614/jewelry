// src/components/ProductImageDisplay/ProductImageDisplay.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const IMG_WIDTH = 140;
const IMG_HEIGHT = 140;

export const ProductImageDisplay = ({ images }) => {
    const [imagePositions, setImagePositions] = useState([]);
    const containerRef = useRef(null);
    const [containerMinHeight, setContainerMinHeight] = useState(0);

    useEffect(() => {
        if (!containerRef.current || !images || images.length === 0) {
            setImagePositions([]);
            setContainerMinHeight(0);
            return;
        }

        const panelWidth = containerRef.current.offsetWidth;
        const newPositions = [];
        let currentY = 10; // Начальный отступ сверху
        let maxYReached = currentY;

        images.forEach((imageItem, index) => {
            const maxLeft = panelWidth > IMG_WIDTH ? panelWidth - IMG_WIDTH - 10 : 0; // -10 небольшой отступ справа
            const left = Math.random() * maxLeft;
            const top = currentY;

            newPositions.push({
                id: imageItem.id,
                imageUrl: imageItem.imageUrl,
                top: `${top}px`,
                left: `${left}px`,
                width: `${IMG_WIDTH}px`,
                height: `${IMG_HEIGHT}px`,
            });

            maxYReached = Math.max(maxYReached, top + IMG_HEIGHT);

            // Рассчитываем вертикальный шаг для следующего изображения
            if (index < images.length - 1) {
                // Минимальный вертикальный шаг (расстояние между top текущей и top следующей картинки)
                const MIN_VERTICAL_STEP = 90;
                // Максимальный вертикальный шаг.
                // Чтобы обеспечить небольшое наложение, сделаем его чуть меньше высоты картинки.
                // Например, IMG_HEIGHT - 10px = 130px. Тогда наложение будет от 10px до 50px.
                const MAX_VERTICAL_STEP = IMG_HEIGHT - 10; // 130px

                let stepForNextImage = MIN_VERTICAL_STEP;
                if (MAX_VERTICAL_STEP > MIN_VERTICAL_STEP) {
                    stepForNextImage = MIN_VERTICAL_STEP + Math.random() * (MAX_VERTICAL_STEP - MIN_VERTICAL_STEP);
                }

                currentY += stepForNextImage;
            }
        });

        setImagePositions(newPositions);
        if (images.length > 0) {
            setContainerMinHeight(maxYReached + 10); // + небольшой отступ снизу
        } else {
            setContainerMinHeight(0);
        }

    }, [images]);

    return (
        <div
            ref={containerRef}
            className={styles.imageDisplayContainer}
            style={{ minHeight: `${containerMinHeight}px` }}
        >
            {imagePositions.map((pos) => (
                <img
                    key={pos.id}
                    src={pos.imageUrl}
                    alt={`Изображение товара ${pos.id}`}
                    className={styles.productImage}
                    style={{
                        top: pos.top,
                        left: pos.left,
                        width: pos.width,
                        height: pos.height,
                    }}
                />
            ))}
        </div>
    );
};