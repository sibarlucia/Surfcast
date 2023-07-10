import { PageMenu } from "../PageMenu"
import styles from './index.module.css'

export const PageLayout = ({ useMenu = true, children }) => {

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
        <div className={styles.separator} />
      </section>
    </main>
  )
} 