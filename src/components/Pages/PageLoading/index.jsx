import logo from '../../../assets/logo.png'
import styles from './index.module.css'

export const PageLoading = () => {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
    </main>
  ) 
} 