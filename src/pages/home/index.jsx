import styles from './styles.module.scss'
import {NavBar} from "@/components/navBar";
import {ArtBlock} from "@/components/artblock";
import {ParallaxLayout} from "@/components/parallaxLayout/index.jsx";

import paralax1 from '../../assets/parallax1.png'
import paralax2 from '../../assets/parallax2.png'
import paralax3 from '../../assets/parallax3.png'
import paralax4 from '../../assets/parallax4.png'
import paralax5 from '../../assets/parallax5.png'
import paralax6 from '../../assets/parallax6.png'
import paralax7 from '../../assets/parallax7.png'
import paralax8 from '../../assets/parallax8.png'
import paralax9 from '../../assets/parallax9.png'
import paralax10 from '../../assets/parallax10.png'
import paralax11 from '../../assets/parallax11.png'
import paralax12 from '../../assets/parallax12.png'
import paralax13 from '../../assets/parallax13.png'
import paralax14 from '../../assets/parallax14.png'
import paralax15 from '../../assets/parallax15.png'
import paralax16 from '../../assets/parallax16.png'
import paralax17 from '../../assets/parallax17.png'
import paralax18 from '../../assets/parallax18.png'
import paralax19 from '../../assets/parallax19.png'
import paralax20 from '../../assets/parallax20.png'
import paralax21 from '../../assets/parallax21.png'
import {InteractiveCategorySelector} from "@/components/snakeRow/index.jsx";

const paralaxSet1 = [
    { id: 0, type: 'text', content: '272727272727272727272727272727272727272727272<br/>727272727272727272727272727272727272727272727<br/>272727272727272727272727272727272727272727272<br/>727272727272727272727272727272727272727272727', top: '2%', left: '5%', width: '90%', zIndex: 10, speed: 1 },
    { id: 1, type: 'image', src: paralax1, alt: '', top: '5%', left: '65%', width: '22%', zIndex: 1, speed: -10 },
    { id: 2, type: 'image', src: paralax2, alt: '', top: '15%', left: '25%', width: '20%', zIndex: 3, speed: 5 },
    { id: 3, type: 'image', src: paralax3, alt: '', top: '40%', left: '75%', width: '18%', zIndex: 2, speed: -5 },
    { id: 4, type: 'image', src: paralax4, alt: '', top: '50%', left: '35%', width: '30%', zIndex: 4, speed: 20 },
    { id: 5, type: 'image', src: paralax5, alt: '', top: '70%', left: '5%', width: '28%', zIndex: 5, speed: -8 },
    { id: 6, type: 'image', src: paralax6, alt: '', top: '75%', left: '50%', width: '35%', zIndex: 1, speed: 8 },
];

const paralaxSet2 = [
    {id: 7, type: 'text', title: 'The Road', content: 'Explore the simple yet striking jewelry by 27jwlr. This work has earned accolades from respected design organizations including Adobe, AIGA, and Étapes, and has been featured on platforms like Muzli. Critics have praised his creations as “beautiful and inspired” and “vertigo-inducing,” celebrating them as pure design excellence.Explore the simple yet striking jewelry by 27jwlr. This work has earned accolades from respected design organizations including Adobe, AIGA, and Étapes, and has been ', top: '0%', left: '10%', width: '80%', zIndex: 10, speed: 2},
    {id: 8, type: 'image', src: paralax7, alt: '', top: '12%', left: '40%', width: '30%', zIndex: 1, speed: -8},
    {id: 9, type: 'image', src: paralax9, alt: '', top: '19%', left: '5%', width: '22%', zIndex: 3, speed: 5},
    {id: 10, type: 'image', src: paralax8, alt: '', top: '23%', left: '60%', width: '28%', zIndex: 2, speed: -4},
    {id: 11, type: 'image', src: paralax10, alt: '', top: '37%', left: '15%', width: '30%', zIndex: 4, speed: -10},
    {id: 12, type: 'text', content: 'Explore the simple yet striking jewelry by 27jwlr. This work has earned accolades from respected design organizations including Adobe, AIGA, and Étapes, and has been featured on platforms like Muzli. CTACTACTACTACTACTA', top: '45%', left: '50%', width: '45%', zIndex: 5, speed: 3},
    {id: 13, type: 'image', src: paralax11, alt: '', top: '52%', left: '70%', width: '19%', zIndex: 6, speed: 10},
    {id: 14, type: 'image', src: paralax12, alt: '', top: '59%', left: '8%', width: '20%', zIndex: 8, speed: -6},
    {id: 15, type: 'image', src: paralax13, alt: '', top: '68%', left: '20%', width: '24%', zIndex: 7, speed: 7},
    {id: 16, type: 'image', src: paralax14, alt: '', top: '70%', left: '60%', width: '26%', zIndex: 3, speed: -12},
    {id: 17, type: 'text', title: 'Available', content: 'Откройте для себя простые, но яркие украшения от 27jwlr. Эта работа заслужила похвалы от уважаемых дизайнерских организаций, включая Adobe, AIGA и Étapes, и была представлена на таких платформах, как Muzli. Критики хвалили его творения как «красивые и вдохновенные» и «головокружительные», восхваляя их как чистое совершенство дизайна.', top: '86%', left: '15%', width: '70%', zIndex: 5, speed: 3},
];

const paralaxSet3 = [
    {id: 18, type: 'image', src: paralax15, alt: '', top: '4%', left: '12%', width: '27%', zIndex: 1, speed: -8},
    {id: 19, type: 'image', src: paralax16, alt: '', top: '12%', left: '60%', width: '30%', zIndex: 3, speed: 5},
    {id: 20, type: 'image', src: paralax17, alt: '', top: '23%', left: '22%', width: '28%', zIndex: 2, speed: -4},
    {id: 21, type: 'text', title: 'Custom', content: 'Explore the simple yet striking jewelry by 27jwlr. This work has earned accolades from respected design organizations including Adobe, AIGA, and Étapes, and has been featured on platforms like Muzli. Critics have praised his creations as “beautiful and inspired” and “vertigo-inducing,” celebrating them as pure design excellence.', top: '37%', left: '10%', width: '60%', zIndex: 5, speed: 3},
    {id: 22, type: 'image', src: paralax18, alt: '', top: '46%', left: '80%', width: '12%', zIndex: 6, speed: 10},
    {id: 23, type: 'image', src: paralax19, alt: '', top: '55%', left: '18%', width: '33%', zIndex: 1, speed: -6},
    {id: 24, type: 'image', src: paralax20, alt: '', top: '76%', left: '60%', width: '35%', zIndex: 7, speed: 7},
    {id: 25, type: 'image', src: paralax21, alt: '', top: '90%', left: '7%', width: '35%', zIndex: 3, speed: -12},
];

export const HomePage = () => {
    return(
        <>
            <NavBar />
            <main className={styles.root}>
                <ArtBlock />
                <ParallaxLayout elementsData={paralaxSet1} minHeight="250vh" />
                <ParallaxLayout elementsData={paralaxSet2} minHeight="450vh" />
                <div><InteractiveCategorySelector /></div>
                <ParallaxLayout elementsData={paralaxSet3} minHeight="400vh" />
            </main>
        </>
    )
}