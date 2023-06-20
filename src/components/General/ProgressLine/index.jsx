import styles from './index.module.css'

// linea de progreso
export const ProgressLine = ({ progress = 25, beginColor = '#7D7DFF', endColor = null, active = false }) => {

    // en caso de no tener endcolor utiliza solo el inicial
    const progressStyle = {
      width: `${progress}%`,
      background: endColor
        ? `linear-gradient(90deg, ${beginColor} 0%, ${endColor} 100%)`
        : beginColor
    }


  return (
    <div
      className={styles.lineContainer}
    >
      <div className={styles.line}>
        {
          active && (
              <div
                className={styles.progress}
                style={progressStyle}  
              />
            )
          }
      </div>
    </div>
  )
  }