
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
                path: "*",
                element: <h2>404 - Page Not Found (Data Router)</h2>
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