import styles from './styles.module.scss'
import {NavBar} from "@/components/navBar/index.jsx";
import {CartItem} from "@/components/cartItem/index.jsx";
import {useEffect, useState} from "react";
import {ProductImageDisplay} from "@/components/ProductImageDisplay/index.jsx";
import {ConfirmForm} from "@/components/confirmForm/index.jsx";


const MOCK_CART_ITEMS = [
    { id: 'prod1', type: 'КОЛЬЦО', name: 'МЕТЕОР', imageUrl: 'https://via.placeholder.com/280x280/FF6347/FFFFFF?Text=Кольцо1' },
    { id: 'prod2', type: 'КОЛЬЦО', name: 'СТОУН ХАРТ', imageUrl: 'https://via.placeholder.com/280x280/4682B4/FFFFFF?Text=Кольцо2' },
    { id: 'prod3', type: 'БРАСЛЕТ', name: 'ТАТТЛЕРС ДРИМ', imageUrl: 'https://via.placeholder.com/280x280/32CD32/FFFFFF?Text=Браслет1' },
    { id: 'prod4', type: 'СЕРЬГИ', name: 'ЛУННЫЙ СВЕТ', imageUrl: 'https://via.placeholder.com/280x280/FFD700/000000?Text=Серьги1' },
    { id: 'prod5', type: 'КОЛЬЕ', name: 'МОРСКАЯ ЗВЕЗДА', imageUrl: 'https://via.placeholder.com/280x280/8A2BE2/FFFFFF?Text=Колье1' },
];

export const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        setCartItems(MOCK_CART_ITEMS);
    }, []);

    const handleRemoveItem = (itemIdToRemove) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemIdToRemove));
    };

    const imagesForDisplay = cartItems.map(item => ({
        id: item.id,
        imageUrl: item.imageUrl
    }));

    const handleFormShow = (state)=> {
        setShowForm(state)
    }

    return(
        <>
            <NavBar theme={'black'} />
            <main className={styles.root}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.content}>
                        <div className={styles.leftPanel}>
                            {imagesForDisplay.length > 0 ? (
                                <ProductImageDisplay images={imagesForDisplay} />
                            ) : (
                                <div className={styles.emptyImagesPlaceholder}>Нет товаров для отображения</div>
                            )}
                        </div>
                        <div className={styles.rightPanel}>
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onRemove={handleRemoveItem}
                                    />
                                ))
                            ) : (
                                <p className={styles.emptyCartMessage}>Ваша корзина пуста.</p>
                            )}
                        </div>
                </div>
                <div className={styles.cartBottom}>
                    <div>итого</div>
                    <div>sum</div>
                </div>
                <div className={styles.button} onClick={() => handleFormShow(true)}>Купить</div>
            </main>
            {showForm &&
                <div className={styles.formContainer}>
                    <ConfirmForm action={() => handleFormShow(false)}/>
                </div>
            }
        </>
    )
}