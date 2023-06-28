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
      <section className={styles.mainSection}>
        {
          children
        }
      </section>
    </main>
  )
} 