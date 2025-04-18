import styles from './styles.module.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import ring from '../../assets/ring.png';

const NUMBER_OF_SNAKE_ELEMENTS = 6;
const INITIAL_POSITION_PATTERN = [2, 1, 2, 3, 2, 1];
const POSITION_SHIFT_PX = 20;

const BASE_WAVE_PATTERN = [1, 2, 3, 2];
const BASE_WAVE_LENGTH = BASE_WAVE_PATTERN.length;

export const categoryData = [
    { id: 'rings', name: 'Rings', slug: '/category/rings', itemImageSrc: '/images/categories/item-ring.png', bgSliceSrc: '/images/categories/bg-slice-1.png' },
    { id: 'bracelets', name: 'Bracelets', slug: '/category/bracelets', itemImageSrc: '/images/categories/item-ring.png', bgSliceSrc: '/images/categories/bg-slice-2.png' },
    { id: 'earrings', name: 'Earrings', slug: '/category/earrings', itemImageSrc: '/images/categories/item-ring.png', bgSliceSrc: '/images/categories/bg-slice-3.png' },
    { id: 'pendants', name: 'Pendants', slug: '/category/pendants', itemImageSrc: '/images/categories/item-ring.png', bgSliceSrc: '/images/categories/bg-slice-4.png' },
];

// --- Основной компонент ---
export const InteractiveCategorySelector = () => {
    const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);

    const handleCategoryEnter = (index) => {
        if (index >= 0 && index < categoryData.length) {
            setHoveredCategoryIndex(index);
        } else {
            setHoveredCategoryIndex(null);
        }
    };

    const handleCategoryLeave = () => {
        setHoveredCategoryIndex(null);
    };

    return (
        <div className={styles.categorySelectorContainer}>
            <SnakeRow
                categories={categoryData}
                numberOfElements={NUMBER_OF_SNAKE_ELEMENTS}
                initialPattern={INITIAL_POSITION_PATTERN}
                baseWavePattern={BASE_WAVE_PATTERN}
                hoveredCategoryIndex={hoveredCategoryIndex}
                onCategoryEnter={handleCategoryEnter}
                onCategoryLeave={handleCategoryLeave}
                direction="normal"
            />
            <div className={styles.buttonRow}>
                {categoryData.map((category, index) => (
                    <Link
                        key={category.id}
                        to={category.slug}
                        className={styles.categoryButton}
                        onMouseEnter={() => handleCategoryEnter(index)}
                        onMouseLeave={handleCategoryLeave}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
            <SnakeRow
                categories={categoryData}
                numberOfElements={NUMBER_OF_SNAKE_ELEMENTS}
                initialPattern={INITIAL_POSITION_PATTERN}
                baseWavePattern={BASE_WAVE_PATTERN}
                hoveredCategoryIndex={hoveredCategoryIndex}
                onCategoryEnter={handleCategoryEnter}
                onCategoryLeave={handleCategoryLeave}
                direction="inverted"
            />
        </div>
    );
};

const SnakeRow = ({
                      categories,
                      numberOfElements,
                      initialPattern,
                      baseWavePattern,
                      hoveredCategoryIndex,
                      onCategoryEnter,
                      onCategoryLeave,
                      direction = 'normal',
                  }) => {
    const getPositionState = (visualIndex) => {
        if (hoveredCategoryIndex === null) {
            const safeInitialPattern = initialPattern.length >= numberOfElements
                ? initialPattern
                : [...initialPattern, ...Array(numberOfElements - initialPattern.length).fill(2)];
            return safeInitialPattern[visualIndex % safeInitialPattern.length];
        }
        const targetStateInWave = 3;
        const indexOfTargetStateInWave = baseWavePattern.findIndex(state => state === targetStateInWave);
        if (indexOfTargetStateInWave === -1) return 2;
        const baseWaveLength = baseWavePattern.length;
        const offset = (hoveredCategoryIndex - indexOfTargetStateInWave + baseWaveLength) % baseWaveLength;
        const effectiveIndexInWave = (visualIndex - offset + baseWaveLength) % baseWaveLength;
        return baseWavePattern[effectiveIndexInWave];
    };

    const mapStateToTranslateY = (state) => {
        const shiftDirection = (direction === 'normal' ? -1 : 1);
        switch (state) {
            case 1: return shiftDirection * POSITION_SHIFT_PX;
            case 3: return -shiftDirection * POSITION_SHIFT_PX;
            case 2: default: return 0;
        }
    };

    return (
        <div className={styles.snakeRowContainer}>
            {Array.from({ length: numberOfElements }).map((_, visualIndex) => {
                const categoryIndex = visualIndex % categories.length;
                const category = categories[categoryIndex];
                const positionState = getPositionState(visualIndex);
                const translateY = mapStateToTranslateY(positionState);
                return (
                    <div
                        key={`snake-${direction}-${visualIndex}`}
                        className={styles.snakeItemWrapper}
                        data-state={positionState}
                        onMouseEnter={() => onCategoryEnter(categoryIndex)}
                        onMouseLeave={onCategoryLeave}
                        style={{ transform: `translateY(${translateY}px)` }}
                    >
                        <img
                            src={ring}
                            alt={category.name}
                            className={styles.foregroundImage}
                        />
                        <img
                            src={ring}
                            alt=""
                            className={styles.foregroundImageLower}
                            aria-hidden="true"
                        />
                    </div>
                );
            })}
        </div>
    );
};