import styles from './index.module.css'

export const Circular = ({ percentage = 0, title = '', description = '' }) => {

    return (
        <div className={styles.AD}>
            <div className={styles.graficoCircular}>
                <svg width="150" height="150">
                    <circle r="65" cx="50%" cy="50%" pathLength="100"/>
                    <circle
                        r="65"
                        cx="50%"
                        cy="50%"
                        pathLength="100"
                        strokeLinecap='round'
                        style={{ strokeDasharray: `${percentage} 100` }}
                    />
                </svg>
                <span>{percentage}%</span>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
                    
        </div>
    )

}