import styles from './index.module.css'

export const DateRangeButtons = ({ onBackButton = () => {}, onNextButton = () => {}, text }) => {
    return (
        <div className={styles.dateContaner}>
            <div className={styles.dateButtonContainer}>
                <button onClick={onBackButton}>{'<'}</button>
                <button onClick={onNextButton}>{'>'}</button>
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}

