import checkLogo from '../../../assets/check.svg'
import styles from './index.module.css'

// nodo de progreso
export const ProgressNode = ({ number, text, active = false, color = null }) => {
  
  const nodeStyles = {
    backgroundColor: '#CECECE'
  }

  if (color && active) {
    nodeStyles.backgroundColor = color
  }
  
  return (
    <article
      className={styles.node}
    >
      <div
        className={styles.content}
        style={nodeStyles}
      >
        {
          active
          ? (
            <img
              src={checkLogo}
              alt="check"
              className={styles.checkLogo}  
            />
            )
            : (
              <h3 
                className={styles.number}
              >
              { number }
            </h3>
          )
        }
      </div>
      <p
        className={`${styles.text} ${active ? styles.textActive : ''}`}
      >
        {text}
      </p>
    </article>
  )
}