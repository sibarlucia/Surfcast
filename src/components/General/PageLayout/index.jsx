import { PageMenu } from "../PageMenu"
import styles from './index.module.css'

export const PageLayout = ({ useMenu = true, children, separator = true }) => {

    if (!useMenu) {
        return (
            <main>
                {
                    children
                }
            </main>
        )
    }
    return (
        <main className={styles.main}>
            <PageMenu />
            <section className={`${styles.mainSection} pageScrollbar`}>
                {
                    children
                }
                {
                    separator && (
                        <div className={styles.separator} />
                    )
                }
            </section>
        </main>
    )
} 