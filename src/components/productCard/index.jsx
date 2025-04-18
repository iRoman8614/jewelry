import styles from './styles.module.scss'

export const ProductCard1 = ({item}) => {
    return(
        <div className={styles.card1}>
            <img className={styles.card1img} src={item.image} alt={''} />
            <div className={styles.title}>{item?.name}</div>
            <div className={styles.desc}>{item?.desc}</div>
            <div className={styles.desc}>weight {item?.weight}</div>
            <div className={styles.desc}>size {item?.size}</div>
            <div className={styles.desc}>material {item?.material}</div>
            <div className={styles.desc}>price {item?.price}</div>
        </div>
    )
}

export const ProductCard2 = ({item}) => {
    return(
        <div className={styles.card2}>
            <img className={styles.card2img} src={item.image} alt={''} />
            <div className={styles.title}>{item?.name}</div>
            <div className={styles.desc}>{item?.desc}</div>
            <div className={styles.desc}>weight {item?.weight}</div>
            <div className={styles.desc}>size {item?.size}</div>
            <div className={styles.desc}>material {item?.material}</div>
            <div className={styles.desc}>price {item?.price}</div>
        </div>
    )
}

export const ProductCard3 = ({item}) => {
    return(
        <div className={styles.card3}>
            <img className={styles.card3img} src={item.image} alt={''} />
            <div className={styles.title}>{item?.name}</div>
            <div className={styles.desc}>{item?.desc}</div>
            <div className={styles.desc}>weight {item?.weight}</div>
            <div className={styles.desc}>size {item?.size}</div>
            <div className={styles.desc}>material {item?.material}</div>
            <div className={styles.desc}>price {item?.price}</div>
        </div>
    )
}