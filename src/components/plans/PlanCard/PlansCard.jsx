import styles from './index.module.css'

export const PlansCard = ({ title, description, price, disableButton, onSelected }) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.headerTitle}>
                    {title}
                </h2>
            </header>
            <main className={styles.mainContent}>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.priceContainer}>
                    <h1 className={styles.price}>
                        {price}
                    </h1>
                    <p className={styles.priceSpace}>
                        MENSUAL
                    </p>
                </div>
                {
                    disableButton 
                        ? (
                            <h2 className={styles.disabelText}>
                                Plan actual
                            </h2>
                        )
                        : (
                            <button
                                className={styles.button}
                                onClick={() => {onSelected(title)}}
                            >
                                Elegir
                            </button>
                        )
                } 
                
            </main>
        </article>
    )
}