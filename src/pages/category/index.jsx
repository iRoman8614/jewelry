import React, { Suspense, lazy } from 'react';
import { useDeviceDetect } from '@/hooks/useDeviceDetect'; // Укажите правильный путь к хуку

const DesktopCategoryPage = lazy(() =>
    import('./DesktopCategory.jsx').then(module => ({ default: module.DesktopCategoryPageContent }))
);
const MobileCategoryPage = lazy(() =>
    import('./MobileCategory.jsx').then(module => ({ default: module.MobileCategoryPageContent }))
);

// Компонент-заглушка на время загрузки
const PageLoader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Загрузка страницы...
    </div>
);

export const CategoryPage = () => { // Это будет ваш основной экспортируемый компонент для маршрута
    const { isMobile } = useDeviceDetect();

    return (
        <Suspense fallback={<PageLoader />}>
            {isMobile ? <MobileCategoryPage /> : <DesktopCategoryPage />}
        </Suspense>
    );
};

// Если вы используете этот файл как index.js в папке CategoryPage,
// то в вашем роутере вы будете импортировать CategoryPage из этой папки.
// export default CategoryPage; // если нужно экспортировать по умолчанию