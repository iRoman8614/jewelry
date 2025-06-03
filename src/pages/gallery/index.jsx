import styles from './styles.module.scss'
import {NavBar} from "@/components/navBar/index.jsx";
import InfiniteImageSwiper from "@/components/InfiniteImageSwiper/index.jsx";
import meteora from '../../assets/meteora.png'
import meteora2 from '../../assets/ring.png'
import meteora3 from '../../assets/parallax5.png'
import InfiniteImageFeed from "@/components/InfiniteImageFeed/index.jsx";
import InvertingSvgDisplay from "@/components/InvertingSvgDisplay/index.jsx";

const myImages = [
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora3,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora,
    meteora,
    meteora,
    meteora,
];

const productImages = [
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
    meteora,
    meteora2,
];

export const GalleryPage = () => {
    return(
        <main className={styles.root}>
            <NavBar theme={'black'} />
            <div className={styles.title}>Галерея</div>
            <InfiniteImageFeed
                images={productImages}
                speed={40}
                imageWidth={400}
                imageHeight={400}
                verticalOffset={30}
                gap={20}
            />
            {/*<InvertingSvgDisplay debugMode={true} />*/}
            <div className={styles.swiper}>
                <InfiniteImageSwiper images={myImages} />
            </div>
        </main>
    )
}