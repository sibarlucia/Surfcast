import styles from './index.module.css'
import clipIcon from '../../../assets//icons/clipIcon.svg'
import imgIcon from '../../../assets/icons/imgIcon.svg'
import menuDotsIcon from '../../../assets/campaign/menu_dots.svg'
import { DateRangeButtons } from '../DateRangeButtons'
import profileImg from '../../../assets/campaign/defaultProfile.svg'

const LinkedInHistoryMessages = ({ history, leadId }) => {
    return (
        <ul className={styles.historyList}>
            {
                history.map((item, index) => {
                    if (item.divider) {
                        return (
                            <li
                                key={`leadHistory-${leadId}-divider-${index}`}
                                className={styles.historyListItem}
                            >
                                <article className={styles.divider}>
                                    <span></span>
                                    <p>
                                        {item.text}
                                    </p>
                                    <span></span>
                                </article>
                            </li>
                        )
                    }
                    return (
                        <li
                            key={`leadHistory-${leadId}-message-${index}`}
                            className={styles.historyListItem}
                        >
                            <article className={styles.message}>
                                <img
                                    src={item.user.icon}
                                    alt={item.user.name}
                                />
                                <div>
                                    <h4 className={styles.messageUser}>
                                        {item.user.name}
                                        <span>
                                            {item.hour}
                                        </span>
                                    </h4>
                                    <p>
                                        {item.message}
                                    </p>
                                </div>
                            </article>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export const LinkedInHistory = ({ leadData, leadId, history }) => {
    return (
        <section className={styles.historyContainer}>
            <header>
                <div className={styles.historyHeaderContainer}>
                    <img
                        className={styles.headerProfileImg}
                        src={profileImg}
                        alt={leadData.name}
                    />
                    <div className={styles.historyHeaderContainer_leadInfo}>
                        <h2>
                            {leadData.name}
                        </h2>
                        <p>
                            {leadData.position}
                        </p>
                    </div>
                </div>
                <div className={styles.historyHeaderContainer}>
                    <DateRangeButtons
                        text='Esta Semana: 12 - 18 de marzo 2023'
                    />
                </div>
            </header>
            <LinkedInHistoryMessages
                history={history}
                leadId={leadId}
            />
            <footer className={styles.historyContainerFooter}>
                <div className={styles.historyInputContainer}>
                    <input
                        className={styles.historyInput}
                        type="text"
                        placeholder="Escribe un mensaje..."
                    />
                </div>
                <div className={styles.footerActions}>
                    <button className={styles.actionImg}>
                        <img src={imgIcon} alt="imagen" />
                    </button>
                    <button className={styles.footerFile}>
                        <img src={clipIcon} alt="archivo" />
                    </button>
                    <button className={styles.footerSend}>
                                    Enviar
                    </button>
                    <button className={styles.footerMenu}>
                        <img src={menuDotsIcon} alt="Menu" />
                    </button>
                </div>
            </footer>
        </section>
    )
}