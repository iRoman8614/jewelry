import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import clsx from 'clsx';
import styles from './styles.module.scss';

export const ParallaxLayout = ({
                                   elementsData,
                                   minHeight = '150vh',
                                   backgroundColor = '#000',
                                   containerClassName = '',
                               }) => {
    if (!elementsData || !Array.isArray(elementsData) || elementsData.length === 0) {
        console.warn('ParallaxLayout: проп elementsData отсутствует, не является массивом или пуст.');
        return null;
    }

    return (
        <div
            className={clsx(styles.container, containerClassName)}
            style={{
                minHeight: minHeight,
                backgroundColor: backgroundColor,
            }}
        >
            {elementsData.map((element) => (
                <Parallax
                    key={element.id}
                    speed={element.speed || 0}
                    className={styles.elementWrapper}
                    style={{
                        position: 'absolute',
                        top: element.top || '0%',
                        left: element.left || '0%',
                        width: element.width || 'auto',
                        zIndex: element.zIndex || 1,
                    }}
                >
                    {element.type === 'image' && element.src && (
                        <img
                            src={element.src}
                            alt={element.alt || `Parallax Element ${element.id}`}
                            className={styles.imageContent}
                        />
                    )}
                    {element.type === 'text' && element.content && (
                        <>
                            {element.title && <div className={styles.title}>{element.title}</div>}
                            <div className={styles.textContent}>
                                {typeof element.content === 'string'
                                    ? <p dangerouslySetInnerHTML={{ __html: element.content.replace(/\n/g, '<br />') }} />
                                    : element.content
                                }
                            </div>
                        </>
                    )}
                </Parallax>
            ))}
        </div>
    );
};

// --- Описание типов пропсов (PropTypes) ---
// ParallaxLayout.propTypes = {
//     elementsData: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         type: PropTypes.oneOf(['image', 'text' /*, 'video', etc. */]).isRequired,
//         speed: PropTypes.number,
//         top: PropTypes.string,
//         left: PropTypes.string,
//         width: PropTypes.string,
//         zIndex: PropTypes.number,
//         src: PropTypes.string, // для type: 'image'
//         alt: PropTypes.string, // для type: 'image'
//         content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // для type: 'text'
//     })).isRequired,
//     minHeight: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     containerClassName: PropTypes.string,
// };