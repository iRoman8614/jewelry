
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.scss';
import { ParallaxProvider } from "react-scroll-parallax";
import { HomePage } from "@/pages/home";
import { CategoryPage } from "@/pages/category";
import {ProductDetailPage} from "@/pages/item/index.jsx";
import {PolicyPage} from "@/pages/policy/index.jsx";
import {NotFound} from "@/pages/notfound/index.jsx";
import {CartPage} from "@/pages/cart/index.jsx";
import {GalleryPage} from "@/pages/gallery/index.jsx";
const router = createHashRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "category/:categorySlug",
                element: <CategoryPage />,
            },
            {
                path: "item/:productId",
                element: <ProductDetailPage />
            },
            {
                path: "/policy",
                element: <PolicyPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/gallery",
                element: <GalleryPage />
            },
            {
                path: "/services",
                element: <PolicyPage />
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ParallaxProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </ParallaxProvider>
    </StrictMode>,
);