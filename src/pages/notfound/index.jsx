import styles from './styles.module.scss'
import {NavBar} from "@/components/navBar/index.jsx";
import logo from '../../assets/logotipe.png'

export const NotFound = () => {
    return(
        <>
            <NavBar theme={'black'} />
            <main className={styles.root}>
                <div className={styles.container}>
                    <div>
                        <img className={styles.image} src={logo} alt={'logo'}/>
                    </div>
                    <div className={styles.title}>404 не найдено</div>
                </div>
            </main>
        </>
    )
}