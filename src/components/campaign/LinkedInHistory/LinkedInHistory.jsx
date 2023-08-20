import styles from './index.module.css'
// import clipIcon from '../../../assets//icons/clipIcon.svg'
// import imgIcon from '../../../assets/icons/imgIcon.svg'
// import menuDotsIcon from '../../../assets/campaign/menu_dots.svg'
import { DateRangeButtons } from '../DateRangeButtons'
import profileImg from '../../../assets/campaign/defaultProfile.svg'
import ReactMarkdown from 'react-markdown'

const LinkedInHistoryMessages = ({ history, leadId, leadData }) => {
    return (
        <ul className={styles.historyList}>
            {
                history.map((item, index) => {
                    if (item.divider) { // divisor de fecha, no usado por el momento
                        return (
                            <li
                                key={`leadHistory-${leadId}-divider-${index}`}
                                className={styles.historyListItem}
                            >
                                <article className={styles.divider}>
                                    <span></span>
                                    <p>
                                        {item.message}
                                    </p>
                                    <span></span>
                                </article>
                            </li>
                        )
                    }
                    let messageName = 'Surfcast'
                    if (!item.reply) {
                        messageName = leadData.full_name
                    }
                    const date = new Date(item.updated_at)
                    const messageDate = date.toLocaleString('en-GB', {
                        minimumIntegerDigits: 2
                    })
                    return (
                        <li
                            key={`leadHistory-${leadId}-message-${index}`}
                            className={styles.historyListItem}
                        >
                            <article className={styles.message}>
                                <img
                                    src={profileImg}
                                    alt={messageName}
                                />
                                <div className={styles.messageContainer}>
                                    <h4 className={styles.messageUser}>
                                        {messageName}
                                        <span>
                                            {messageDate}
                                        </span>
                                    </h4>
                                    <div className={styles.messageTextContainer}>
                                        <ReactMarkdown>
                                            {item.message}
                                        </ReactMarkdown>
                                    </div>
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
                        alt={leadData.full_name}
                    />
                    <div className={styles.historyHeaderContainer_leadInfo}>
                        <h2>
                            {leadData.full_name}
                        </h2>
                        <p>
                            {leadData.job}
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
                leadData={leadData}
                history={history}
                leadId={leadId}
            />
            {/* <footer className={styles.historyContainerFooter}>
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
            </footer> */}
        </section>
    )
}